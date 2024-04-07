const router = require('express').Router();
const PanelController = require('../controllers/PanelController.js');
const PerfilController = require('../controllers/PerfilController.js');
const auth = require('../middleware/loginMiddleware.js');
const upload = require('../config/multer.js');


//Rotas do panel
router.get('/', auth, PanelController.home);
router.get('/perfil', auth, PanelController.perfil);
router.get('/logout', auth, PanelController.logout);


//Rotas do painel (perfil)
router.post('/perfil/updatePassword', PerfilController.updatePassword);
router.post('/perfil/updatePhoto', auth, upload.single("file"), PerfilController.photoUpdate)

module.exports = router;