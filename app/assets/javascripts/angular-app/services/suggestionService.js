function Suggestion($resource) {

  var suggestions = $resource('/api/suggestions')

  var Suggestion = {
    all: suggestions.query(),
  };
  return Suggestion;

};