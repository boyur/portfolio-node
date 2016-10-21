var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Артем Боюр' });
});

/* GET works page. */
router.get('/works.html', function(req, res, next) {
  res.render('pages/works', { title: 'Артем Боюр' });
});



module.exports = router;
