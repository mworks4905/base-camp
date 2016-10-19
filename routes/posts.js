var express = require('express');
var router = express.Router();
var knex = require('../knex')
var cookieSession = require('cookie-session')

router.get('/', function(req, res, next) {
  knex('users')
    .innerJoin('posts', 'users.id', 'posts.user_id')
    .select('users.id', 'users.first_name as firstName', 'posts.id as postId', 'posts.user_id', 'posts.title', 'posts.body')
    .orderBy('postId', 'desc')
    .then(function(data){
      // console.log(data);
      for(i = 0; i < data.length; i++){
        if(req.session.userInfo.id == data[i].user_id){
          // console.log();
          data[i].edit = 'Edit'
          data[i].delete = 'Delete'
          // data[i].logout = 'Log Out'
        }
      }
        res.render('posts', {
          allPosts: data,
          logout: 'Log Out'
          // edit: 'Edit',
          // delete: 'Delete',
        })
    })
});

router.delete('/:id', function(req, res, next) {
  knex('posts')
  .del()
  .where('posts.id', req.params.id)
  .then(function(){
    res.render('posts')
  })
})

module.exports = router;
