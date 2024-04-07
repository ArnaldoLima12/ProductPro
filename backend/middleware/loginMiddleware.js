AuthLogin =  (req, res, next) =>
{
    if (req.session && req.session.loggedin) 
    {
        return next();
    } 
    else 
    {   console.log(req.session);
        res.redirect('/');
    }
}

module.exports = AuthLogin;
