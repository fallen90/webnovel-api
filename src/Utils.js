module.exports = {
    returnError : (error,message) => new Promise(resolve => resolve([{ error, message }, null]))
}