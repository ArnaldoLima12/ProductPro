exports.home = (req, res) =>
{   
    res.render('home', {user: req.session.user});
};

exports.perfil = (req, res) =>
{   
    res.render('perfil', {user: req.session.user})
}

exports.photoSave = (req, res) =>
{
    
}

exports.logout = (req, res) =>
{   
    req.session.loggedin = false;
    req.session.destroy();
    res.redirect('/');
}
