var express = require('express');
var router = express.Router();

const ControllerPecasPorHora = require('../Controllers/ControllerPecas')

/* GET home page. */
router.get('/',ControllerPecasPorHora.listaPecas)
router.get('/pecas',ControllerPecasPorHora.cadastrarPecas)

module.exports = router;
