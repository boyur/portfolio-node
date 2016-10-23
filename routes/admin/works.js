var express = require('express');
var bodyParser = require('body-parser');
var multer	=	require('multer');
var router = express.Router();
// //var upload = require('../../models/upload');
var db = require('../../models/db/model');

var Works = db.Works;

var jsonParser = bodyParser.json();

var storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "../public/uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname);
  }
});

var upload = multer({ storage : storage }).single('userPhoto');

router.post('/admin/works', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      return;
    }

    console.log(req.file);
    console.log(req.body);

    // Everything went fine
  })
});

/* GET db page. */
router.get('/admin/works', function(req, res, next) {

  res.render('admin/works', {
    title: 'Админка'
  });

});

module.exports = router;

//
// router.post('/addSlide', jsonParser, function(req,res){
//
//   upload(req,res,function(err) {
//     if(err) {
//       return res.end("Error uploading file.");
//     } else {
//       res.end();
//     }
//   });
//   //   }
//   // });
// });
//
// router.post('/addWork', jsonParser, function(req,res){
//
//     var data = req.body;
//     data.file = 'uploads/' + res.req.file.filename;
//
//     var work = new Works(data);
//
//     work.save(function(err) {
//       if (err) {
//         res.send('ошибка');
//       } else {
//         console.log('add slide');
//
//         res.send('ok');
//       }
//     });
//
// });