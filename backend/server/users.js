var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


router.get('/register', function(req, res){
	
});


router.get('/login', function(req, res){

});

router.post('/register', function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();

    var errors = req.validationErrors();

    if(errors){
		res.render('register',{
			errors:errors
		});
	} else {
		var newUser = new User({
            email:email,
            password: password
        });
            User.createUser(newUser, function(err, user){
                if(err) throw err;
                console.log(user);
            });
    
            req.flash('success_msg', 'You are registered and can now login');
    
            res.redirect('/users/login');
        }
    
    });
    passport.use(new LocalStrategy(
        function(email, password, done) {
         User.getUserByUsername(email, function(err, user){
             if(err) throw err;
             if(!user){
                 return done(null, false, {message: 'Unknown User'});
             }
      
             User.comparePassword(password, user.password, function(err, isMatch){
                 if(err) throw err;
                 if(isMatch){
                     return done(null, user);
                 } else {
                     return done(null, false, {message: 'Invalid password'});
                 }
             });
         });
        }));

        passport.serializeUser(function(user, done) {
            done(null, user.id);
          });
          
          passport.deserializeUser(function(id, done) {
            User.getUserById(id, function(err, user) {
              done(err, user);
            });
          });

          router.post('/login',
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

module.exports = router;

