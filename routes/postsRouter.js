var express = require('express');
var router = express.Router();
const postsController = require('../controllers/postController')

/* GET users listing. */
router.get('/', postsController.index);
router.get('/:id',postsController.show);
router.post('/create',postsController.create);
router.put('/update/:id',postsController.update);
router.delete('/delete/:id',postsController.delete);


module.exports = router;
