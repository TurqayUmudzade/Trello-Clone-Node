const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../Public/images/UserProfiles'))
    },
    filename: function(req, file, cb) {
        if (file.mimetype.split('/')[0] === 'image')
            cb(null, req.userID + "." + file.mimetype.split('/')[1])
    }
})

const upload = multer({ storage: storage }).single('inpFile');

module.exports = upload;