const userLogin = require('../models/UserModel.js');

exports.index = (req, res) =>
{   
    req.session.loggedin = false;
    res.render('login', {data : null});
}

exports.loginVerify = async (req, res) =>
{
   const login = new userLogin(req.body);
   let result = await login.verifyUser();

   if(result)
   {
     setSession(req, true, login.User);
     res.redirect('/home');
   }
   else
   {
     setSession(req, false, {});
     res.render('login', {data: login.erros})
   }

}

function setSession(req, loggedIn, user)
{
     req.session.loggedin = loggedIn;
     req.session.user = user;
}