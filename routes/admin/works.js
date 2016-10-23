var express = require('express');
var router = express.Router();
var upload = require('../../models/upload');

router.post('/api/photo',function(req,res){
  upload(req,res,function(err) {
    if(err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
});

/* GET db page. */
router.get('/admin/works', function(req, res, next) {

  res.render('admin/works', {
    title: 'Админка'
  });

});

module.exports = router;