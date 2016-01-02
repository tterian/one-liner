function Message($resource) {

  var messages = $resource('/api/messages');
  var conversations = $resource('/api/conversations/:conversationId', 
    {
      conversationId: '@conversationId'
    });
  var conversation_reply = $resource('/api/conversations/:conversationId/reply', 
    {
      conversationId: '@conversationId'
    });


  var Message = {
    all: conversations.query(),

    create: function(message) {
      return messages.save(message);
    },

    getConversation: function(conversationId) {
      return conversations.query({'conversationId': conversationId});
    },

    replyConversation: function(conversationId) {
      return conversation_reply.save({'conversationId': conversationId});
    }

  };
  return Message;

};