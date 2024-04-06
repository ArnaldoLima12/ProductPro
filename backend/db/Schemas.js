const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    name: String,
    email: String,
    password: String,
    admin: Boolean
});




const users = moongose.model('users', userSchema);

module.exports = 
{
    users
}
