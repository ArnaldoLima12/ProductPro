const express = require('express');
const {initSession} = require('./backend/config/session.js');
require('./backend/db/conectionDB.js');

const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'frontend')));  //Configuração da pasta raiz de elementos estáticos;
app.use(express.urlencoded({extended:true}));
//Ativa o envio de formularios no server
app.set('views', path.join(__dirname, 'frontend', 'views')); // Raiz das views
app.set('view engine', 'ejs'); // Renderizador das views


const routerLogin = require('./backend/routers/routerLogin.js'); //Raiz das ROTAS //Substituindo as rotas pelas rotas definidas no arquivo de rotas
const routerPanel = require('./backend/routers/routerPanel.js');
initSession(app);

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