var express = require('express');
var Moment=require('moment');
var router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Moment()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Moment()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});
/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new');
});
router.post('/new',function(req,res,next){
    messages.push({text: req.body.text, user: req.body.user, added: new Moment()});
    res.redirect('/')
  });
module.exports = router;
