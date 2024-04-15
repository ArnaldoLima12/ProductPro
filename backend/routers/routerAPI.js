const router = require('express').Router();
const API = require('../../api/api.js');

router.get('/list/:page/:limit', API.ListProducts);

module.exports  = router;