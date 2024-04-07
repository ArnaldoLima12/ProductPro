const session = require('express-session');

const initSession = app =>
{
    app.use(session({
        name: 'ProductPro',
        secret: 'dajsfafyfa9jf9sasasyfa9hf9ashfa',
        resave: false,
        saveUninitialized: false,
        cookie: {secure: false}
    }));
}

module.exports = {initSession}

