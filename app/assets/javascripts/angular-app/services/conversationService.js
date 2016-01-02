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

    getConversation: function(conversationId) {
      return conversations.get({'conversationId': conversationId});
    },

    replyConversation: function(conversationId) {
      return conversation_reply.save({'conversationId': conversationId});
    }

  };
  return Conversation;

};