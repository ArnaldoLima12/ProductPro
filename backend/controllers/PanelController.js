exports.home = (req, res) =>
{   
    res.render('home', {user: req.session.user});
};

exports.perfil = (req, res) =>
{   
    res.render('perfil', {erro: [], user: req.session.user});
}

exports.produtos = (req, res) =>
{   
    let menssage = req.session.message;
    req.session.message = '';

    res.render('produtos', {erro: [], sucessMessage: menssage, user: req.session.user});
}

exports.logout = (req, res) =>
{   
    req.session.loggedin = false;
    req.session.destroy();
    res.redirect('/');
}
