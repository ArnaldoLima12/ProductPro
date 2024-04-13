const { products } = require('../db/Schemas.js');
const Product = require('../models/ProductModel.js')



exports.createProduct = (req, res) =>
{
        try
        {   
            let product = new Product();
            let body = req.body;

            if(body.name && body.price && body.category)
            {   
               
                let create = product.createProduct(req.body);

                if(create)
                {   
                    req.session.messageSucess = product.message;
                    res.redirect('/home/product');
                }
                else
                {
                    res.render('produtos', {erro: product.erros})
                }
            }
            else
            {
                res.render('produtos', {erro: 'Todos os campos devem ser preenchidos!'});
            }
           
        }
        catch(error)
        {
           res.render('produtos', {erro: 'Erro ao tentar conectar-se ao servidor'});
        }
}

exports.listProducts = async (req, res) =>
{   
    let product = new Product();
    res.send(await product.listProducts());
}