var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['word', 'meaning'];

DictionarySearch = new SearchSource('dict', fields, options);
