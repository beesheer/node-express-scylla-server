var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({a: 'hello world!'})
});

router.get('/abc', function(req, res, next) {
  res.json({a: 'hello world abc!'})
});

module.exports = router;
