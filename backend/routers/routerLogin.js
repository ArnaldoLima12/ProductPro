const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController.js');


//Rota de Login
router.get('/', LoginController.index);
router.post('/login', LoginController.loginVerify);

module.exports = router;