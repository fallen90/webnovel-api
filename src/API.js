const client = require('./Requester');

const API_DEFS = {
    search : keyword => '/search/auto?keyword=' + encodeURIComponent(keyword),
    getBook : id => '/book/GetBookDetailPage?bookId=' + id
};

const search = keyword => client(API_DEFS.search(keyword));
const getBook = id => client(API_DEFS.getBook(id));

module.exports = {
    API_DEFS, search, getBook
}