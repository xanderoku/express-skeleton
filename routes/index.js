const express = require('express');
const router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res) {
  res.render('hello', {name: 'world!'});
})

router.get('/feedback', function(req, res) {
  console.log(req.query);
  const options = {
    name: req.query.name,
    height: req.query.height
  }
  res.render('feedback.hbs', options);
});

router.post('/feedback', function(req,res) {
  // res.redirect('/');
  console.log(req.body);
  fs.writeFile('db.json', JSON.stringify(req.body));
  res.json({status: "Success"});
})

module.exports = router;
