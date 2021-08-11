var Moment=require('moment');
// user input validation 
const { body,validationResult } = require('express-validator');


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
    res.render('message_form');
};

exports.boardMessageNewPost=[
    body('text','The message is required.').trim().isLength({min: 1}).escape(),
    body('user','The user name is required.').trim().isLength({min: 1}).escape()new,
    (req,res,next)=>{
        //extract validaton errors from a request
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            //render de form with errors
            res.render('message_form',{errors: errors.array()});
        }
        else{
            //render the board
            messages.push({text: req.body.text, user: req.body.user, added: new Moment()});
            res.redirect('/');
        }
        
    } 
];



