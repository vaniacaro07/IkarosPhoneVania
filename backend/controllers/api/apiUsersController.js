const db = require('../../database/models/index')

const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator');

module.exports = {

    allUsers:(req, res) => { //api todos los usuarios
    db.Users
        .findAll()
            .then(users => {
                res.json({
                    status: 200,
                    count: users.length,
                    users:users
                })
            })
        .catch(error => res.send(error))
    },
    user: (req,res) => { //api un usuario
        db.Users 
        .findByPk(req.params.id)
            .then(user => {
                res.json({
                    status:200,
                    url: '/api/user/' + req.params.id,
                    user: user,
                })
        });
    },

    register: (req, res) => {
        res.render('register')
    },
    

    saveUser: (req, res) => {
        let valiResult = validationResult(req);

        if(valiResult.errors.length > 0){
            return res.render('register', {
                errors: valiResult.mapped(), //mapped convierte en un obj lit 
                oldData: req.body
            });
        }

        //si el email del usuario existe
        db.Users
        .findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if(user){
                return res.render('register', {
                    errors:{
                        email:{
                            msg: 'Este email ya se ecuentra registrado'
                        }
                    },
                    oldData: req.body
                });
            }
        });

        let avatar; 
        if(req.files[0] != undefined){
            avatar = req.files[0].filename
        }else{
            avatar = "default-image.png" 
        }

        //encryptar contraseña
        db.Users
        .create({
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: avatar
        })
        .then(function(){
            res.redirect('/products')
        })
    },

    login: (req, res) => {
        res.render('login');
    },

    logged: (req, res) => {

        let valiResult = validationResult(req);

        //si el usuario existe
        db.Users
        .findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if(!valiResult.errors.length > 0){
                if(user){
                    let password = bcryptjs.compareSync(req.body.password, user.password)
                    if(password){
                        userData = user
                        delete user.password;
                        req.session.userLogged = userData
    
                        if(req.body.remenber){
                            res.cookie('userEmail', req.body.email, {maxAge: (1000 * 1000)*90})
                        }
    
                        return res.redirect('/');
                    }
    
                    return res.render ('login',{
                        errors: {
                            password:{
                                msg: 'los datos ingresados son incorrectos'
                            }
                        }
                    });
                } else {
                    return res.render('login', {
                        errors: {
                            email: {
                                msg: 'Este correo no se encuentra registrado'
                            }
                        }
                    })
                }
            }else{
                return res.render ('login',{
                    errors: valiResult.mapped(),
                })
            }
        })


    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}