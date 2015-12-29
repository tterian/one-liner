function Account($resource) {

  var account = $resource('/api/account/info/:accountId', 
    {
      accountId: '@accountId'
    });

  var Info = {
    get: function(accountId) {
      return account.get({'accountId': accountId});
    }
  };
  return Info;

};