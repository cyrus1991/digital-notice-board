const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const waterfall = require('async-waterfall');
const async = require('async');
const crypto = require('crypto');
const mailnotifier = require('./mailnotifier');



router.post('/register', (req, res)  => {
  const email = req.body.email;
  const password = req.body.password;
  
  if(!email) {
    return res.send({"error": "Must provide an email adress"});
  } else if(!password) {
    return res.send({"error": "Must provide an password"});
  } else {
    const newUser = new User({
      email: email,
      password: password
    });

    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(newUser.password, salt, function(err, hash){
        if(err){
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function(err){
          if(err){
            res.send(err);
            return;
          } else {
            res.json({'success': 'You are registered and can now login'});
          }
        });
      });
    });
  }
});

// Post to Login Page 
router.post('/login', (req, res, next) => {
  if (req.body.password && req.body.email) {
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (info["error"]) { return res.send(info)}

      req.logIn(user, (err) => {
        if (err) { return next(err); }
        return res.send({"success": "Login Success"});
      });
    })(req, res, next);
  } else {
      return res.send({"error": "Email and Password must be provided"});
  }
});

// Forget Password 
router.post('/forget', (req, res)  => {   
  let token; 
  async.waterfall([ 
    function(done) {     
      crypto.randomBytes(20, (err, buf) => { 
         token = buf.toString('hex'); 
        done(err, token);         
      }); 
    }, 
    function(done) {       
      User.findOne({ email: req.body.email }, (err, user) =>{ 
        console.log(user,'here first') 
        if (!user) { 
          req.flash('error', 'No account with that email address exists.'); 
          return res.redirect('/'); 
        } 
        user.resetPasswordToken = token; 
        user.save(function(err, user) { 
          console.log(err, 'error here'); 
          mailnotifier.sendMail(user.email,`Password Reset`,`You are receiving this because you (or someone else) have requested the reset of the password for your account. 
          'Please click on the following link: http://localhost:3000/resetpassword/${token}  
           or paste this into your browser to complete the process:`) 
          res.send('it is working') 
        }); 
      }); 
    }, 
  ], function(err) { 
    if (err) throw (err); 
    res.redirect('/forgot'); 
  }); 
}); 
// Reset Password 
router.post('/resets', (req, res)  => {
  //
});
router.post('/forgot', (req, res)  => {  
  async.waterfall([
    function(done) {    
      crypto.randomBytes(20, (err, buf) => {
        const token = buf.toString('hex');
        done(err, token);        
      });
    },
    function(token, done) {      
      User.findOne({ email: req.body.email }, (err, user) =>{
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }
        user.resetPasswordToken = token;
        user.save(function(err) {
          console.log(user);
          done(err, token, user);
        });
      });
    },
  
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

// Reset Password 
router.get('/reset/:token', function(req, res) {
 
})

router.get('/email', function(req, res) {
  
  mailnotifier.sendMail(req.body.email,'Password Reset','You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
  'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
  'http://localhost/reset/'+ token + '\n\n' +
  'If you did not request this, please ignore this email and your password will remain unchanged.\n')
})

// Lougout 
router.get('/logout', (req, res)  => {
  req.logout();
  res.json({'success': 'You are logged out'});
});

module.exports = router;
