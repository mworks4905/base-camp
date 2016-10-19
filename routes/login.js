var express = require('express');
var router = express.Router();
var knex = require('../knex')
var users = require('./users')
var posts = require('./posts')
var login = require('./login')
var cookieSession = require('cookie-session')

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next){
  // console.log(req.body);
  knex('users')
  .where('email', req.body.email)
  .then(function(user){
    //console.log(user);
    if(user.length == 0){
      res.render('error', {message: "username or password is f'ed up"})
    }
    else{
      var pswdMatch = bcrypt.compareSync(req.body.password, user[0].hash)
      delete user[0].hash

      if(pswdMatch === false){
        res.render('error', {message: "username or password is f'ed up"})
      }
      else{
        req.session.userInfo = user[0]
        res.redirect('/posts')
      }
    }
  })
})

module.exports = router;
