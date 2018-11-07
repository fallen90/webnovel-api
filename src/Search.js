const API = require('./API');
const Book = require('./Book');
const resolve = require('./Resolve');

class Search {
    constructor(search_keyword){
        this.keyword = search_keyword;    
    }

    async resolve(){
        const searchResults = await API.search(this.keyword);
        this.result = resolve(searchResults);
        return this;
    }

    mapBooks(data){
        if(data && data.books && Array.isArray(data.books) && data.books.length >= 1){
            return data.books.map(book => new Book(book));
        } else {
            return [];
        }
    }

    mapResultToObject(data){
        return {
            books : this.mapBooks(data)
        }
    }
    getResults(){
        const results = this.result.data;
        return this.mapResultToObject(results.data);
    }

    hasErrors(){
        return resolve(this.result).error;
    }
}

module.exports = Search;