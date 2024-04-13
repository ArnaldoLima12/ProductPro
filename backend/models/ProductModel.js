const {products} = require('../db/Schemas.js');


class Product
{   
    
    erros = [];
    sucess = [];


    createProduct(product)
    {  
        try
        {
            const productSave = new products(product);
            productSave.save();

            this.sucess.push('Produto Cadastrado com sucesso!');
            return true;
        }
        catch(error)
        {   
            this.erros.push('Erro ao cadastrar produto');
            return false
        }
    }

    static async listProducts()
    {   
        let list =  await products.find();
        if(list.length < 1) list = ['Nenhum produto cadastrado'];
        return list;
    }
}


module.exports = Product;