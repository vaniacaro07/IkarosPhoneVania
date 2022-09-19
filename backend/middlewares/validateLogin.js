const { body } = require('express-validator');

const validateLogin = [
    body('email').notEmpty().withMessage('Debe completar este campo').isEmail().withMessage('Ingrese una direccón de correo valida'), 
    body('password').notEmpty().withMessage('Debe completar este campo')
]

module.exports = validateLogin;