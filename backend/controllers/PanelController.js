exports.home = (req, res) =>
{   
    res.render('home', {user: req.session.user});
};

exports.perfil = (req, res) =>
{   
    console.log(req.session.user);
    res.render('perfil', {erro: [], user: req.session.user})
}

exports.logout = (req, res) =>
{   
    req.session.loggedin = false;
    req.session.destroy();
    res.redirect('/');
}
