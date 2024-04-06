const multer = require('multer');
const path = require('path');

const Storage = multer.diskStorage({
    destination: (req, file, callback) =>
    {
        callback(null, "uploads/");
    },
    filename: (req, file, callback) =>
    {
        callback(null, Date.now() + path.extname(file.originalname))
    }
});


const upload = multer({storage});

module.exports = upload;