const 
    API             =   require('./API'),
    resolve         =   require('./Resolve'),
    returnError     =   require('./Utils').returnError;

class Book {
    constructor(details){
        Object.assign(this, details);
    }
    
    async processResponse(getBookInfoPromise){
        const bookInfo = await getBookInfoPromise;
        const bookInfoResolved = resolve(bookInfo).data;
        const data = (!bookInfoResolved.error) ? bookInfoResolved.data : bookInfoResolved.error;

        Object.assign(this, data.bookInfo);

        return data.bookInfo;
    }

    resolve(){
        if(this.id || this.bookId){
            return this.processResponse(API.getBook(this.id));
        } else {
            return returnError('no-book-id','Book ID not found');
        }
    }
}


module.exports = Book;