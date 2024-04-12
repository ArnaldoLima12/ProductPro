const {products} = require('../db/Schemas.js');

exports.listProducts = (req, res) =>
{   
    res.send(JSON.parse(res.send({id: 23321, name: 'Arroz', price: '21.43', category: 'Derivados'}))) 
}