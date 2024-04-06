const router = require('express').Router();
const PanelController = require('../controllers/PanelController.js');
const auth = require('../middleware/loginMiddleware.js');

//Rotas do panel
router.get('/', auth, PanelController.home);
router.get('/perfil', auth, PanelController.perfil);
router.get('/logout', auth, PanelController.logout);


module.exports = router;