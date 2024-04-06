const mongoose = require('mongoose');

const options = {
    dbName: 'productpro' // Nome do banco de dados que você deseja usar
  };

let conection = async () =>
{
    await mongoose.connect("mongodb+srv://arnaldolima588:LeH0OrjJEKGTrcgA@productpro.ziduzyn.mongodb.net/?retryWrites=true&w=majority&appName=productpro", options);
    console.log('Conectado com sucesso');
}
conection();

