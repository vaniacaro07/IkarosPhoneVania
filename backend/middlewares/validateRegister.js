const { body } = require('express-validator')

const validateRegister = [
    body('fullName').notEmpty().withMessage('Debe completar este campo'),

    body('email').notEmpty().withMessage('Debe completar este campo').bail()
    .isEmail().withMessage('Debe ingresar una dirección de correo válido'),

    body('password').notEmpty().withMessage('Debe completar este campo').bail()
    .isLength({min:8}).withMessage('La contraseña debe tener 8 caracteres como minimo'),
]

module.exports = validateRegister;