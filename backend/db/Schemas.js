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
    name: String,
    category: 
    {
        type: moongose.Schema.Types.ObjectId, 
        ref: 'categories',
    },
    categoryName: String,
    price: Number,
    date: Date,
    photo: String
});

const categorySchema = new moongose.Schema({
    name: String
});

const users = moongose.model('users', userSchema);
const products = moongose.model('products', productSchema);
const categorys = moongose.model('categories', categorySchema);

module.exports = 
{
    users,
    products,
    categorys
}
