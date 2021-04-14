var express = require('express');
var router = express.Router();
const postsController = require('../controllers/postController')

/* GET users listing. */
router.get('/', postsController.index);
router.post('/',postsController.create);
router.put('/:id',postsController.update);
router.delete('/:id',postsController.delete);
router.get('/:id',postsController.show);

module.exports = router;
