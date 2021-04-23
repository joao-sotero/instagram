var express = require('express');
var router = express.Router();
var postsController = require('../controllers/postController')

/* GET home page. */
router.get('/', postsController.index) 

module.exports = router;
