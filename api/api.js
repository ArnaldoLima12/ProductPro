const Product = require('../backend/models/ProductModel.js');

exports.ListProducts = async (req, res) =>
{   
    //Busca uma lista de produtos de acordo com a pagina e limite de itens por pagina
    res.send(await Product.listProducts(req.params.page, req.params.limit));
}