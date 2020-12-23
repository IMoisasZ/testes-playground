var express = require('express');
var router = express.Router();
let ControllerCarros = require('../Controllers/ControllerCarros')

/* GET home page. */
router.get('/', ControllerCarros.listaCarros)
router.get('/alterar', ControllerCarros.viewAlterar)

module.exports = router;
