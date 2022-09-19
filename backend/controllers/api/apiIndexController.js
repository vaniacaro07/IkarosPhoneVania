const db = require('../../database/models/index')

module.exports = {

index: (req, res) => {

    let smartphone = db.Phones.findAll({
        where: {
            category: 'smartphone'
        },
        include: ['brand']
    });
    
    let inSale = db.Phones.findAll({
        where: {
            category: 'inSale'
        },
        include: ['brand']
    });

    Promise.all([smartphone, inSale])
    .then(function([smartphone, inSale]) {
        res.render('index', {smartphone,inSale})
    })

},


}

