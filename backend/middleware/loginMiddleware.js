AuthLogin =  (req, res, next) =>
{
    if (req.session && req.session.loggedin) 
    {
        return next();
    } 
    else 
    {   
        console.log('Sessão não existe');
        res.redirect('/');
    }
}

module.exports = AuthLogin;
