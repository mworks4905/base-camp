var express = require('express');
var router = express.Router();
var knex = require('../knex')
var users = require('./users')
var posts = require('./posts')
var bcrypt = require('bcrypt')
var cookieSession = require('cookie-session')

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/logout', function(req, res, next) {
    req.session = null
    res.redirect('/')
})

router.post('/', function(req, res, next) {
    knex('users')
        .where('email', req.body.email)
        .then(function(user1) {
            if (user1.length >= 1) {
                res.render('error', {
                    message: 'email already taken'
                })
            } else {
                var user = req.body
                var hash = bcrypt.hashSync(req.body.password, 12)
                knex('users')
                    .returning('*')
                    .insert({
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        hash: hash
                    })
                    .then(function(user2) {
                        console.log(user2[0]);
                        delete user2[0].hash;
                        req.session.userInfo = user2[0];
                        res.redirect('/posts')
                    })
            }
        })
})

module.exports = router;