const env = require('dotenv').config();
const mongoose = require('mongoose');

const options = {
  dbName: process.env.NAME_DATABASE// Nome do banco de dados que você deseja usar
};

exports.conection = async () =>
{     
  try
  {
    await mongoose.connect(process.env.URI_DATABASE, options)
    console.log('Conectado com sucesso');
    
  }
  catch(err)
  {
    console.log('Falha na conexão', err);
  }
}



