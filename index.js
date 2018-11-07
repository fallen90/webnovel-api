// module.exports = () => {
//   // Your code goes here
// };


var Search =  require('./src/Search');

(async () => {
  var search = new Search('TEST');
  var searchResults = await search.resolve();
  var results = search.getResults();

  results.books = await Promise.all(results.books.map(book => book.resolve()));

  console.log(results);
})();