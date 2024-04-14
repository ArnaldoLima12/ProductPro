const { products } = require('../db/Schemas.js');
const Product = require('../models/ProductModel.js')


exports.produtos = async (req, res) =>
{   
    let menssage = req.session.message;
    let erro = req.session.erro;

    let products = await Product.listProducts();
    req.session.message = '';
    req.session.erro = '';
    
    res.render('produtos', {erro: erro, success: menssage, list: products});
}

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
                    req.session.message = product.sucess;
                    res.redirect('/home/product');
                }
                else
                {   
                    req.session.erro = product.erros;
                    res.redirect('/home/product');
                }
            }
            else
            {   
                req.session.erro = 'Todos os campos devem ser preenchidos!';
                res.redirect('/home/product');
            }
           
        }
        catch(error)
        {
           res.render('produtos', {erro: 'Erro ao tentar conectar-se ao servidor'});
        }
}

exports.listProducts = async (req, res) =>
{   
    if(req.query.page < 1) req.query.page = 1;    
    res.send(await Product.listProducts(req.query.page, req.query.limit)); 
}