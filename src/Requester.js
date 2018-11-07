const 
    axios       =   require('axios'),
    API_URL     =   'https://m.webnovel.com/ajax';

module.exports = (url) => new Promise(resolve => {
    axios
        .create({
            baseURL: API_URL
        })
        .get(url)
        .then(response => resolve([null, response.data]))
        .catch(error => resolve([error, null]));
});