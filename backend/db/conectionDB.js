const mongoose = require('mongoose');

const options = {
    dbName: 'productpro' // Nome do banco de dados que você deseja usar
  };

let conection = async () =>
{
    await mongoose.connect('mongodb+srv://arnaldolima588:puiMkwO0voFh532Y@product.ksq95do.mongodb.net/?retryWrites=true&w=majority&appName=Product', options);
    console.log('Conectado com sucesso');
}

conection().catch(err => console.log('Erro no banco de dados:', err));

