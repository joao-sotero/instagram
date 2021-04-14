var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosControllers')

/* GET users listing. */
router.get('/', usuariosController.index);
router.post('/',usuariosController.create);
router.put('/:id',usuariosController.update);
router.delete('/:id',usuariosController.delete);
router.get('/:filtro',usuariosController.filtro);

module.exports = router;
