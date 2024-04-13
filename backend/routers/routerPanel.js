const router = require('express').Router();
const auth = require('../middleware/loginMiddleware.js');
const upload = require('../config/multer.js');

const PanelController = require('../controllers/PanelController.js');
const PerfilController = require('../controllers/PerfilController.js');
const ProdutosController = require('../controllers/ProdutosController.js');




//Rotas do panel
router.get('/', auth, PanelController.home);
router.get('/perfil', auth, PanelController.perfil);
router.get('/logout', auth, PanelController.logout);
router.get('/product', auth, PanelController.produtos);


//Rotas do painel (perfil)
router.post('/perfil/updatePassword', PerfilController.updatePassword);
router.post('/perfil/updatePhoto', auth, upload.single('file'), PerfilController.photoUpdate)

//Rotas do painel (produtos)
router.post('/product/create', auth, ProdutosController.createProduct)
router.get('/product/list', auth, ProdutosController.listProducts);

module.exports = router;