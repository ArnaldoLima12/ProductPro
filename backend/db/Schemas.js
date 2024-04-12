const { name } = require('ejs');
const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    name: String,
    email: String,
    password: String,
    photo: String,
    admin: Boolean
});

const productSchema = new moongose.Schema({
    idProduct: String,
    name: String,
    category: String,
    price: Number,
    photo: String
})


const users = moongose.model('users', userSchema);
const products = moongose.model('products', productSchema)

module.exports = 
{
    users,
    products
}
