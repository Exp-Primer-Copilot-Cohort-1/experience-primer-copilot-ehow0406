// Create web server

var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET comments listing. */
router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM comments';
  db.query(query, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});

/* GET comments by id. */
router.get('/:id', function(req, res, next) {
  var query = 'SELECT * FROM comments WHERE id = ' + req.params.id;
  db.query(query, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});

/* POST comments. */
router.post('/', function(req, res, next) {
  var query = 'INSERT INTO comments (comment, user_id, post_id) VALUES ("' + req.body.comment + '", "' + req.body.user_id + '", "' + req.body.post_id + '")';
  db.query(query, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});

/* PUT comments by id. */
router.put('/:id', function(req, res, next) {
  var query = 'UPDATE comments SET comment = "' + req.body.comment + '" WHERE id = ' + req.params.id;
  db.query(query, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});

/* DELETE comments by id. */
router.delete('/:id', function(req, res, next) {
  var query = 'DELETE FROM comments WHERE id = ' + req.params.id;
  db.query(query, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;