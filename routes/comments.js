var express = require('express');
var router = express.Router();
var knex = require('../knex')
var comments = require('./comments')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('posts')
    .innerJoin('comments', 'posts.id', 'comments.post_id')
    .select('comments.id', 'posts.id as postId', 'comments.post_id', 'comments.body')
    .orderBy('comments.id', 'desc')
    .then(function(data){
      console.log(data);
      res.render('comments', {
        comments: data,
        logout: 'Log Out'
      })
    })
});

module.exports = router;
