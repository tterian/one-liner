function MessagesController($scope, $location, $mdDialog, User, Conversation, Message) {

  $scope.posts = Post.all;
  $scope.conversations = Conversation.all;

  $scope.getConversation = function(conversationId) {
    Conversation.get(conversationId).$promise
      .then(function(response) {
        $scope.conversation = response;
        $scope.messages = response.messages;
      });
  }

  $scope.replyToMessage = function(conversationId, message) {
    var newMessage = {
      subject:    $scope.conversation.subject,
      body:       message.body,
      image:      $scope.user.image,
      created_at: new Date()
    };    
    Conversation.reply(conversationId, message).$promise
      .then(function(response) {
        $scope.messages.push(newMessage);
        $scope.message.body = "";
      });
  }

  $scope.showPost = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'PostsController',
      templateUrl: 'assets/angular-app/templates/post/new.html.erb',
      targetEvent: ev
    });
  };

  $scope.deletePost = function(post) {

  }

  $scope.sendMessage = function(message) {
    var m = {
      recipient_id: $scope.currentProfile.id,
      content:      message.content
    }
    var newConversation = {
      id:           $scope.conversations.length + 1,
      created_at:   new Date(),
      image:        $scope.user.image,
      messages: {
        body:    message.content,
        image:   $scope.user.image,
        subject: $scope.currentProfile.name
      },
      recipients: [
        $scope.currentProfile,
        $scope.user
      ],
      subject:    $scope.currentProfile.name
    }
    Message.create(m).$promise
      .then(function() {
        $scope.conversations.push(newConversation);
        $mdDialog.hide();
      });
  }

  $scope.showEditProfile = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'UsersController',
      templateUrl: 'assets/angular-app/templates/user/edit.html.erb',
      targetEvent: ev
    });
  };


  $scope.signOut = function() {
    User.signOut();
    $location.path('/');
  };

  $scope.closeDialog = function(ev) {
    $mdDialog.hide(ev);
  }


// Redirects

  $scope.redirectToProfile = function(user) {
//  var userId = user.name.replace(/ /g,"_").toLowerCase();
    var userId = user.id;
    var path = '/profile/'+userId;
    $location.path(path);
  }

  $scope.redirectToSetting = function(user) {
    var path = '/settings/account';
    $location.path(path);
  }

  $scope.redirectToHome = function(ev) {
    var path = '/';
    $location.path(path);
  }

  $scope.redirectToNotifications = function(ev) {
    var path = '/notifications';
    $location.path(path);
  }

  $scope.redirectToMessages = function(ev) {
    var path = '/messages';
    $location.path(path);
  }


};