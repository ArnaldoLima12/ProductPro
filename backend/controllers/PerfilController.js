const userSchema = require('../models/UserModel.js');
const uploadAndGetURL = require('../config/imgbb.js');

exports.updatePassword = async (req, res) =>
{
    let user = new userSchema(req.session.user);

    if(req.body.password === req.body.repetPassword && req.body.password)
    {
        let updated = await user.updatePassword(req.body.password);
        validateErro(user, updated, 'perfil', '/home/perfil', req, res);
    }
    else
    {
        res.render('perfil', {erro: 'Senhas não são iguais', user: req.session.user});
    }
}

exports.photoUpdate = async (req, res) =>
{       

    let user = new userSchema(req.session.user);
    let updated;

    if(req.file)
    {   
        if(req.file.mimetype == 'image/jpeg' || req.file.mimetype == 'image/png')
        {
            let {buffer} = req.file;
            let photo = await uploadAndGetURL(buffer.toString('base64'));
            (!photo) ? photo = '/imgs/user.png' : photo;
            
            updated = await user.updatePhoto(photo);
        }
        else
        {
            updated = false;
            user.erros.push('Arquivo invalido');
        }
    }
    else
    {   
        updated = false;
        user.erros.push('Nenhum arquivo selecionado!');
    }
    
    validateErro(user, updated, 'perfil', '/home/perfil', req, res);
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
