const { categorys } = require('../db/Schemas.js');
const Product = require('../models/ProductModel.js')


exports.produtos = async (req, res) =>
{   
    let menssage = req.session.message;
    let erro = req.session.erro;
    let category = await Product.listCategorys();
    
    req.session.message = '';
    req.session.erro = '';
    
    res.render('produtos', {erro: erro, success: menssage, category});
}

exports.createProduct = (req, res) =>
{
        try
        {   
            let product = new Product();
            let body = req.body;

            if(body.name && body.price && body.category)
            {   
                let newbody = req.body.category.split('/');
                req.body.category = newbody[0];
                req.body.categoryName = newbody[1];
               
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
           req.session.erro = 'Erro ao tentar conectar-se ao servidor';
           res.redirect('/home/product');
        }
}

exports.createCategory = (req, res) =>
{
    let product = new Product();

    if(req.body.name)
    {   
        let save = product.createCategory(req.body);

        if(save)
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
}

exports.listProducts = async (req, res) =>
{   
    if(req.query.page < 1) req.query.page = 1;    
    res.send(await Product.listProducts(req.query.page, req.query.limit)); 
}

// exports.listCategorys = async (req, res) =>
// {

// }

