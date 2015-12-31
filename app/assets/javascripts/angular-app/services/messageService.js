function Message($resource) {

  var messages = $resource('/api/messages/:messageId', 
    {
      messageId: '@messageId'
    });

  var Message = {
    all: messages.query(),

    create: function(message) {
      return messages.save(message);
    },

  };
  return Message;

};