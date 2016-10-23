var multer	=	require('multer');

var storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "../public/uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname);
  }
});

var upload = multer({ storage : storage }).single('userPhoto');

module.exports = upload;