const userSchema = require('../models/UserModel.js');
const env = require('dotenv').config();
const axios = require('axios');
const fetch = require('node-fetch');



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
    let {mimetype, buffer} = req.file;
    let imagemBase64 = buffer.toString('base64');

    try
    {   
        const response = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.IMGBB_KEY}`, {
            method: 'POST',
            body: new URLSearchParams({
              image: imagemBase64
            })
          });
        
          const responseData = await response.json();
          console.log(responseData);
    }
    catch(err)
    {
       console.log('Deu erro', err);
    }


    let userUpdate = await user.updatePhoto(buffer.toString('base64'), mimetype);
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
