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

  $scope.addPost = function(post) {
    if ($scope.posts.length == 0) {
      var lastPost = 0;
    } else {
      var lastPost = $scope.posts[$scope.posts.length - 1];
    }

    var newPost = {
      id:           lastPost.id + 1,
      content:      post.content,
      poster: {
        image: $scope.user.image,
        name:  $scope.user.name
      },
      rating: {
        count: $scope.user.reviews,
        score: $scope.user.average_rating
      },
      user_id:      $scope.user.id,
      created_at:   new Date(),
      comments:     []
    };

    Post.create(newPost).$promise
      .then(function() {
        $scope.posts.push(newPost);
        $scope.post = '';
      });
  };

  $scope.deletePost = function(post) {

  }

  $scope.sendMessage = function(message) {
    var m = {
      recipient_id: $scope.currentProfile.id,
      content:      message.content
    }
    Message.create(m).$promise
      .then(function() {
        $scope.conversations.push(m);
        $mdDialog.hide();
      });
  }

  $scope.signIn = function(user) {
    User.signIn(user)
      .then(function() {
        $mdDialog.hide();
      })
      .catch(function(response) {
        $scope.authResponse = response.errors;
      });
  };

  $scope.showSignUp = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'UsersController',
      templateUrl: 'assets/angular-app/templates/user/signup.html.erb',
      targetEvent: ev
    });
  };

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