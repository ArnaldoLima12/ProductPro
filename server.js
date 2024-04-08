const express = require('express');
const session = require('./backend/config/session.js');
const { conection } = require('./backend/db/conectionDB.js');
const path = require('path');

const app = express();
const port = 8080;

// Configuração da pasta raiz de elementos estáticos
app.use(express.static(path.join(__dirname, 'frontend')));

// Ativa o envio de formulários no servidor
app.use(express.urlencoded({ extended: true }));

// Raiz das views
app.set('views', path.join(__dirname, 'frontend', 'views'));

// Renderizador das views
app.set('view engine', 'ejs');

// Faz conexão com o Banco de dados
conection();

// Inicialização da sessão
session.initSession(app);

// Importação das rotas
const routerLogin = require('./backend/routers/routerLogin.js');
const routerPanel = require('./backend/routers/routerPanel.js');

// Uso das rotas
app.use('/', routerLogin);
app.use('/home', routerPanel);

// Rota para página não encontradaa
app.use((req, res, next) => {
    if (res.status(404)) res.status(404).render('404');
});

// Inicia o servidor
app.listen(port, () => {
    console.log('Servidor rodando na porta', port);
});
