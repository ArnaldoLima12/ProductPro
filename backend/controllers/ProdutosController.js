const {products} = require('../db/Schemas.js');

exports.listProducts = (req, res) =>
{   
    return JSON.parse({id: 23321, name: 'Arroz', price: '21.43', category: 'Derivados'}); 
}