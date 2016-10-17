var express = require('express');
var router = express.Router();
var knex = require('../knex')
var postData

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('posts')
  .then(function(posts){
    postData = posts
    // console.log(postData);
  })
  .then(function(users){
    knex('users')
      .innerJoin('posts', 'users.id', 'posts.user_id')
      .where('users.id', req.session.userInfo.id)
      .then(function(data){
        // console.log(data[0].first_name);
        console.log(data);
        res.render('posts', {
          posts: data,
          logout: 'Log Out'
        })
      })
  })
});

module.exports = router;
