var express = require('express');
var router = express.Router();
var knex = require('../knex')
var comments = require('./comments')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('comments')
  .then(function(comments){
    res.render('comments', {
      comments: comments
    })

  })
});

module.exports = router;
