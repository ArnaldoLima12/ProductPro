const {products} = require('../db/Schemas.js');


class Product
{   
    #roduct;
    erros = [];
    message = [];


    createProduct(product)
    {  
        try
        {
            const productSave = new products(product);
            productSave.save();
            this.message.push('Produto Cadastrado com sucesso!');
            return true;
        }
        catch(error)
        {   
            this.erros.push('Erro ao cadastrar produto');
            return false
        }
    }

    async listProducts()
    {   
        let list =  await products.find()
        return list;
    }
}


module.exports = Product;