const env = require('dotenv').config();
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Configuração das opções para o MongoStore
let options = {
    mongoUrl: process.env.URI_DATABASE,
    dbName: process.env.NAME_DATABASE, 
    collectionName: 'sessions',
    autoRemove: 'native', 
    autoRemoveInterval: 10
};

const initSession = app => {
    // Inicialização da sessão utilizando o MongoStore
    app.use(session({
        secret: process.env.SECRET_SESSION,
        resave: true,
        saveUninitialized: false,
        store: MongoStore.create(options), // Passa as opções diretamente
        cookie: {maxAge: 15 * 60 * 1000, secure: false}
    }));
};

module.exports = { initSession };
