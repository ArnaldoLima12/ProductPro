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

    static async listProducts(page = 1, limitItens)
    {   
        let skip = parseInt((page - 1) * limitItens);

        let list =  await products.find().skip(skip).limit(limitItens);
        let totalItens = await products.countDocuments();
        let totalPages = Math.ceil(totalItens / limitItens);
        
        let response = {
            list,
            totalPages,
            page
        };

        return response;
    }
}


module.exports = Product;