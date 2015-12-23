function User($auth) {

  var User = {
    currentUser: function() {
      return $auth.validateUser().$$state.value;
    },

    getProfile: function(user) {
      return $auth.validateUser(user).$$state.value;
    },

    signIn: function(user) {
      return $auth.submitLogin({
        email: user.email,
        password: user.password
      })
    },

    signOut: function() {
      return $auth.signOut()
    },

    signUp: function(user) {
      return $auth.submitRegistration({
        email: user.email,
        password: user.password,
        name: user.name,
        avatar: user.avatar,
      });
    }
  };
  return User;

};