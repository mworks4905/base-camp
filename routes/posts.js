var express = require('express');
var router = express.Router();
var knex = require('../knex')
var cookieSession = require('cookie-session')
var bcrypt = require('bcrypt')

router.get('/', function(req, res, next) {
    knex('users')
        .innerJoin('posts', 'users.id', 'posts.user_id')
        .select('users.id', 'users.first_name as firstName', 'posts.id as postId', 'posts.user_id', 'posts.title', 'posts.body')
        .orderBy('postId', 'desc')
        .then(function(data) {
            for (i = 0; i < data.length; i++) {
                if (req.session.userInfo.id == data[i].user_id) {
                    data[i].edit = 'Edit'
                    data[i].delete = 'Delete'
                }
            }
            res.render('posts', {
                allPosts: data,
                logout: 'Log Out'
            })
        })
});

router.get('/editPost/:id', function(req, res, next) {
    knex('posts')
        .where('id', req.params.id)
        .then(function(data) {
            res.render('editPost', {
                allPosts: data[0],
                logout: 'Log Out'
            })
        })
})

router.post('/editPost/:id', function(req, res, next) {
    knex('posts')
        .where('id', req.params.id)
        .update({
            title: req.body.title,
            body: req.body.body
        }, '*')
        .then(function(post) {
            res.redirect('/posts')
        })
})

router.delete('/delete', function(req, res, next) {
    knex('posts')
        .del()
        .where('posts.id', req.body.value)
        .then(function() {
            res.render('posts')
        })
})

module.exports = router;