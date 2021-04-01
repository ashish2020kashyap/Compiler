var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {
  res.render('index', { title: 'Compiler' });
});

router.get('/pricing', function(req, res, next) {
  res.render('pricing');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/api',function(req,res){
  res.send("Compiler API  will come soon ..............")
});






module.exports = router;
