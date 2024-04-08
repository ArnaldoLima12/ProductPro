const session = require('express-session');
const MongoStore = require('connect-mongo'); 

let options = {mongoUrl:'mongodb+srv://arnaldolima588:puiMkwO0voFh532Y@product.ksq95do.mongodb.net/?retryWrites=true&w=majority&appName=Product', dbName: 'productpro', autoRemove: 'native', collectionName: 'sessions'};

const initSession = app => {
    app.use(session({
        name: 'ProductPro',
        secret: 'dajsfafyfa9jf9sasasyfa9hf9ashfa',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create(options),
        cookie: {maxAge: 15 * 60 * 1000, secure: false}
    }));
};


module.exports = { initSession };
