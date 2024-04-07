const userSchema = require('../models/UserModel.js');

exports.photoUpdate = async (req, res) =>
{   
    const user = new userSchema(req.session.user);
    let userUpdate = await user.updatePhoto(req.file);

    if(!userUpdate)
    {   
        console.log('falso');
        res.render('perfil', {erro : user.erros, user: req.session.user});
    }
    else
    {   
        req.session.user = userUpdate;
        res.redirect('/home/perfil');
    }
}