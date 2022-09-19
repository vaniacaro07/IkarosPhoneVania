const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/api/apiUsersController")
const registerValidate = require('../../middlewares/validateRegister')//validaciones form register
const fileUpload = require('../../middlewares/multerUsers')
const loginValidate = require('../../middlewares/validateLogin')//validaciones form login

//api todos los usuarios
router.get('/users', usersController.allUsers)

//api un usuario
router.get('/user/:id', usersController.user)

//formulario de registro
router.get('/register', usersController.register)
router.post('/register',fileUpload.any(), registerValidate, usersController.saveUser)

//formulario de login
router.get('/login',usersController.login)
router.post('/login', loginValidate, usersController.logged)

//cerrar sesion
router.get('/logout', usersController.logout)

module.exports = router