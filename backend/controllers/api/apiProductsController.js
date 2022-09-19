const db = require('../../database/models/index')

module.exports = {

    store: (req, res) => {
    db.Phones
        .findAll({
            include:['brand']
        })
            .then(products => {
                res.json({
                    status: 200,
                    count: products.length,
                    url: '/api/products',
                    data: products,
                })
            })
   },

   detail: (req, res) => {
    db.Phones
        .findByPk(req.params.id, {
            include: [
                'brand',
                'system',
                'specification'
            ]
        })
            .then(product => {
                res.json({
                    status: 200,
                    url: '/api/detail/' + req.params.id,
                    product: product,
                })
            })

   },

//    create: (req, res) => {
//     db.Phones
//         .findAll({
//             include: [
//                 'brand',
//                 'system',
//                 'specification'
//             ]
//         })
//             .then(product => {
//                 res.json(product)
//             })

//    },

   created: (req, res) => {
    let image; 
        if(req.files[0] != undefined){
            image = req.files[0].filename
        }else{
            image = "default-image.png" 
            }
            db.Phones.create({
                ...req.body,
                image: image
                })
                .then(confirm => {
                    let response;
                    if(confirm){
                        response ={
                        status: 200,
                        url: '/api/create',
                        total: confirm.length,
                        data:confirm
                    }
                    }else{
                        response = {
                            status: 204,
                            total:confirm.length,
                            url: '/api/create',
                        }
                    }
                    res.json(response)
                })
            .catch(error => res.send(error))
   },

//    edit: (req, res) => {
//     db.Phones
//         .findByPk(req.params.id,{
//             include:[
//                 'brand',
//                 'system',
//                 'specification'
//             ]
//         })
//             .then(product => {
//                 res.render('productEdit', {product})
//             })

//    },

   edited: (req, res) => {
    let image
        if(req.files[0] != undefined){
            image = req.files[0].filename
        }
            else{
                image = productToEdit.image
            }
                db.Phones
                .update({
                    ...req.body,
                    image: image
                },{
                    where: {id: req.params.id}
                })
                .then(confirm => {
                    let response;
                    if(confirm){
                        response = {
                            status: 200,
                            url: '/api/products/:id',
                            total: confirm.length,
                            data: confirm
                        }
                    }else{
                        response = {
                            status: 204,
                            url: '/api/products/edited/:id',
                            total: confirm.length,
                            data: confirm
                        }
                    }
                    res.json(response);
                })
        .catch(error => res.send(error))
    },

   delete: (req, res) => {
    db.Phones
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(confirm => {
            let respuesta;
            console.log('confirm', confirm)
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/products/delete/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })
    .catch(error => res.send(error))
   },
 
}