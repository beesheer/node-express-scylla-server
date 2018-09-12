var express = require('express');
var router = express.Router();
var cassandra = require('cassandra-driver')
var client = new cassandra.Client({ contactPoints: ['192.168.99.100'] })

router.get('/', function(req, res, next){
  res.json({a: 'a'})
})

router.get('/comment', function(req, res, next){
  client.execute('select * from audiomack_comments.comments where song_id = 100', function(err, result){
    if (err) throw err
    res.json(result.rows)
  })
})

module.exports = router