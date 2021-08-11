var Moment=require('moment');

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
  
exports.boardMessagesGet= function(req, res, next) {
    res.render('index', { messages: messages });
  }

exports.boardMessageNewGet= function(req, res, next) {
    res.render('new');
};

exports.boardMessageNewPost=function(req,res,next){
    messages.push({text: req.body.text, user: req.body.user, added: new Moment()});
    res.redirect('/')
};