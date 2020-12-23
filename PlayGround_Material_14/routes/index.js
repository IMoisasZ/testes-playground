var express = require('express');
var router = express.Router();

const ControllerPecasPorHora = require('../Controllers/ControllerPecas')

/* GET home page. */
router.get('/',ControllerPecasPorHora.cadastrarPecas)

module.exports = router;
