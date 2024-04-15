const {products, categorys} = require('../db/Schemas.js');


class Product
{   
    
    erros = [];
    sucess = [];


    createProduct(product)
    {  
        try
        {   
            product.date = new Date().toLocaleDateString('en', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            });

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

    createCategory(category)
    {
        try
        {   
            const categorySave = new categorys(category);
            categorySave.save();
            this.sucess.push('Categoria criada com sucesso');
            return true;
        }
        catch(erro)
        {
            this.erros.push('Não foi possivel criar a categoria');
            return false;
        }
    }

    static async listProducts(page = 1, limitItens)
    {   
        let skip = parseInt((page - 1) * limitItens);

        let list =  await products.find().skip(skip).limit(limitItens).sort({date: -1});
        let totalItens = await products.countDocuments();
        let totalPages = Math.ceil(totalItens / limitItens);
        
        let response = {
            list,
            totalPages,
            page
        };

        return response;
    }

    static async listCategorys()
    {
        let response = await categorys.find();
        return response;
    }
}


module.exports = Product;