AuthLogin =  (req, res, next) =>
{
    if (req.session && req.session.loggedin) 
    {
        return next();
    } 
    else 
    {
        res.redirect('/');
    }
}

module.exports = AuthLogin;
