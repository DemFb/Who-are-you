var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pageTwo', function(req, res, next) {
  res.render('you', { title: 'Express' });
});

router.get('/pageTree', function(req, res, next) {
  res.render('youagain', { title: 'Express' });
});

module.exports = router;
