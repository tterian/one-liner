function Message($resource) {

  var messages = $resource('/api/messages');

  var Message = {
    create: function(message) {
      return messages.save(message);
    }
  };
  return Message;

};