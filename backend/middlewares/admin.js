const locals = (req, res, next) => {
    if (req.session && req.session.userLogged && req.session.userLogged.admin.true) {
        next()  
    }       
        res.redirect("/")    
    }
    
module.exports = locals