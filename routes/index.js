var express = require('express');

var router = express.Router();
var boardController = require('../controllers/boardController')


/* GET home page. */
router.get('/',boardController.boardMessagesGet);
/* GET new page. */
router.get('/new',boardController.boardMessageNewGet);
router.post('/new',boardController.boardMessageNewPost);
module.exports = router;
