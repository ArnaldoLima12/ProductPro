const router = require('express').Router();
const auth = require('../middleware/loginMiddleware.js');
const upload = require('../config/multer.js');

const PainelController = require('../controllers/PanelController.js');
const PerfilController = require('../controllers/PerfilController.js');
const ProdutosController = require('../controllers/ProdutosController.js');




//Rotas do panel
router.get('/', auth, PainelController.home);
router.get('/logout', auth, PainelController.logout);
router.get('/perfil', auth, PerfilController.perfil);
router.get('/product', auth, ProdutosController.produtos);


//Rotas do painel (perfil)
router.post('/perfil/updatePassword', PerfilController.updatePassword);
router.post('/perfil/updatePhoto', auth, upload.single('file'), PerfilController.photoUpdate)

//Rotas do painel (produtos)
router.post('/product/create', auth, ProdutosController.createProduct)
router.get('/product/list', auth, ProdutosController.listProducts);
router.post('/product/create-category', auth, ProdutosController.createCategory);

module.exports = router;