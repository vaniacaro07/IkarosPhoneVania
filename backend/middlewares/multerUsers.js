const multer = require('multer');
const path = require("path")

//configuracion multer 
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/images/users')
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        let imgName = Date.now() + path.extname(file.originalname);
        callback(null, imgName);
    }
})

// guardamos en una variable la confg
let fileUpload = multer({storage:storage});

module.exports = fileUpload;