const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) =>
    {
        callback(null, "frontend/uploads/");
    },
    filename: (req, file, callback) =>
    {
        callback(null, Date.now() + path.extname(file.originalname))
    }
});


const upload = multer({storage});

module.exports = upload;