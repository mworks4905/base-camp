var express = require('express');
var router = express.Router();
var knex = require('../knex')

router.get('/', function(req, res, next) {
    res.render('makePost')
})

router.post('/', function(req, res, next) {
    knex('posts')
        .insert({
            user_id: req.session.userInfo.id,
            title: req.body.title,
            body: req.body.body
        }, '*')
        .then(function(post) {
            console.log(post);
            res.redirect('/posts')
        })
})
module.exports = router;