const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session); // Chame a função passando 'session' como argumento
// const store =  new MongoDBStore({
//     uri: 'mongodb+srv://arnaldolima588:puiMkwO0voFh532Y@product.ksq95do.mongodb.net/?retryWrites=true&w=majority&appName=Product',
//     databaseName: 'productpro',
//     collection: 'session'
// }, function(erro) {console.log(erro)});


const initSession = app => {
    app.use(session({
        name: 'ProductPro',
        secret: 'dajsfafyfa9jf9sasasyfa9hf9ashfa',
        resave: false,
        saveUninitialized: false,
        // store: store,
        cookie: {maxAge: 15 * 60 * 1000, secure: false}
    }));
};



setInterval(() =>
{
    store.clear();

}, 15 * 60 * 1000);


module.exports = { initSession };
