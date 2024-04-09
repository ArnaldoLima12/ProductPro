const userSchema = require('../models/UserModel.js');
const uploadAndGetURL = require('../config/imgbb.js');

exports.updatePassword = async (req, res) =>
{
    let user = new userSchema(req.session.user);

    if(req.body.password === req.body.repetPassword && req.body.password)
    {
        let userUpadate = await user.updatePassword(req.body.password);
        validateErro(user, userUpadate, 'perfil', '/home/perfil', req, res);
    }
    else
    {
        res.render('perfil', {erro: 'Senhas não são iguais', user: req.session.user});
    }
}


exports.photoUpdate = async (req, res) =>
{       

    let user = new userSchema(req.session.user);
    let {buffer} = req.file;

    let photo = await uploadAndGetURL(buffer.toString('base64'));

    let userUpdate = await user.updatePhoto(photo);
    validateErro(user, userUpdate, 'perfil', '/home/perfil', req, res);
}


function validateErro(user, bool, view, url, req, res)
{
    if(!bool)
    {   
        res.render(view, {erro: user.erros, user: req.session.user});
    }
    else
    {
        req.session.user = user.User;
        res.redirect(url);
    }
}
