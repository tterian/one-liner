function Conversation($resource) {

  var conversations = $resource('/api/conversations/:conversationId', 
    {
      conversationId: '@conversationId'
    });
  var conversation_reply = $resource('/api/conversations/:conversationId/reply', 
    {
      conversationId: '@conversationId'
    });


  var Conversation = {
    all: conversations.query(),

    get: function(conversationId) {
      return conversations.get({'conversationId': conversationId});
    },

    reply: function(conversationId, message) {
      return conversation_reply.save({'conversationId': conversationId, 'body': message.body});
    }

  };
  return Conversation;

};