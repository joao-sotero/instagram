var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosControllers');
const validarCadastro = require('../middlewares/validarCadastro');

/* GET users listing. */

router.get('/', usuariosController.index);
 router.get('/registro', usuariosController.registro);
router.post('/',validarCadastro,usuariosController.create);
router.put('/:id',validarCadastro,usuariosController.update);
router.delete('/:id',usuariosController.delete);
 router.get('/:filtro',usuariosController.filtro);

module.exports = router;
