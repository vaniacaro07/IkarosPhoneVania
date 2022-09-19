const express = require("express");
const router = express.Router();
const apiProductsControllers = require('../../controllers/api/apiProductsController')
const fileUpload = require('../../middlewares/multerProducts')

//todos los productos
router.get('/products', apiProductsControllers.store)

//detalle de product
router.get('/product/:id/', apiProductsControllers.detail);

//Creacion de producto
// router.get('/create',apiProductsControllers.create);// admin
router.post('/create', fileUpload.any() , apiProductsControllers.created);

// //editar un producto
// router.get('/edit/:id/', apiProductsControllers.edit);// admin
router.patch('/edit/:id/', fileUpload.any(), apiProductsControllers.edited);

//borrar un producto
router.delete('/delete/:id/', apiProductsControllers.delete);// admin

module.exports = router;