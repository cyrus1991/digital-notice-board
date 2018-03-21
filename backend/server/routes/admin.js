const express = require('express');
const router = express.Router();
const Content = require('../models/content');
const moment = require('moment');

const addSlide = (req, res) => {
    if(!req.body) {
        res.send({message: "No content sent!"});
    }

    if(req.body){
      console.log(req.body);
      console.log(req.body.expiryDate);
      console.log(req.body.displayDate);
    }

     newSlide = new Content(req.body);
      newSlide.save(function(err) {
        if(err) {
          return res.send(err);
        }
        
        return res.send({message: "Content created successfully!"})
    });
};

const ensureAuthenticated  = (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  } else {
    res.send({"error": "You are not authenticated."});
  }
};

router.get('/', ensureAuthenticated, (req, res) => {
  res.json({"success": "You are signed into the admin panel."});
});

// Add New Slide
router.post('/add', addSlide);

module.exports = router;