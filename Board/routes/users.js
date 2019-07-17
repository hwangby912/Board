// Routing File
var express = require('express');
var User = require('../schemas/user');

var router = express.Router();

/* GET users select. */
router.get('/', function(req, res, next) {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

/* GET users insert. */
router.post('/', (req, res, next) => {
  // console.log(req.body.name, req.body.age, req.body.married);
  // res.json({});
  const user = new User({
    name : req.body.name,
    age : req.body.age,
    married : req.body.married,
  });
  user.save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
