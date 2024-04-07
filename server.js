const express = require('express');
const session = require('express-session');
require('./backend/db/conectionDB.js');

const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'frontend')));  //Configuração da pasta raiz de elementos estáticos;
app.use(express.urlencoded({extended:true}));
//Ativa o envio de formularios no server
app.set('views', path.join(__dirname, 'frontend', 'views')); // Raiz das views
app.set('view engine', 'ejs'); // Renderizador das views

app.use(session({
    name: 'ProductPro',
    secret: 'dajsfafyfa9jf9sasasyfa9hf9ashfa',
    resave: true,
    saveUninitialized: true,
    cookie:  {maxAge: 15 * 60 * 1000, secure: false}
}));


const routerLogin = require('./backend/routers/routerLogin.js'); //Raiz das ROTAS //Substituindo as rotas pelas rotas definidas no arquivo de rotas
const routerPanel = require('./backend/routers/routerPanel.js');
  

//Rotas
app.use('/', routerLogin);
app.use('/home', routerPanel);

app.use((req, res, next) =>
{   
    if(res.status(404)) res.status(404).render('404');
});


app.listen(port, () =>
{
    console.log('Servidor rodando na porta ', port); //Inicia o servidor
});