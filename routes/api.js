const uuidv4 = require('uuid/v4');
var express = require('express');
var router = express.Router();
var cassandra = require('cassandra-driver')
var client = new cassandra.Client({ contactPoints: ['172.17.0.3'], keyspace: 'audiomack_comments'})

router.get('/', function (req, res, next) {
  res.json({ a: 'a' })
})

router.get('/comment', function (req, res, next) {
  client.execute('select * from comments where song_id = 10', function (err, result) {
    if (err) throw err
    res.json(result.rows)
  })
})

function generateComments(count = 1000) {
  let statement = 'BEGIN BATCH ';
  for ($j = 0; $j < count; $j++) {
    let songId = Math.floor(Math.random() * 100);
    let userId = Math.floor(Math.random() * 100);
    let uuid = uuidv4();
    let now = Math.floor(Date.now() / 1000);
    statement += `INSERT INTO comments (song_id, user_id, timestamp, comment, id) VALUES (${songId}, ${userId}, ${now}, 'test comment', ${uuid});`;
  }
  statement += 'APPLY BATCH;';
  return statement;
}

router.get('/add', function (req, res, next) {
  // Insert a thousand random comments
  let statement = generateComments();
  try {
    client.execute(statement, function(err, result){
      if (err) throw err
      res.json({'msg':'inserted 1000 comemnts'})
    })
  } catch (err) {
    throw err
  }
})

module.exports = router