var express = require('express');
var router = express.Router();
const ApontamentoController = require('../Controller/ApontamentoController')

/* GET home page. */
router.get('/', ApontamentoController.home)

router.get('/setor', ApontamentoController.setor)
router.get('/cadastroSetor', ApontamentoController.cadastroSetor)
router.post('/cadastroSetor', ApontamentoController.cadastroSetorPost)

router.get('/funcionarios', ApontamentoController.funcionarios)
router.get('/cadastroFuncionario', ApontamentoController.cadastroFuncionario)
router.post('/cadastroFuncionario', ApontamentoController.cadastroFuncionarioPost)

router.get('/maquina', ApontamentoController.maquina)
router.get('/cadastroMaquina', ApontamentoController.cadastroMaquina)
router.post('/cadastroMaquina', ApontamentoController.cadastroMaquinaPost)

router.get('/cliente', ApontamentoController.cliente)
router.get('/cadastroCliente', ApontamentoController.cadastroCliente)
router.post('/cadastroCliente', ApontamentoController.cadastroClientePost)

router.get('/operacao', ApontamentoController.operacao)
router.get('/cadastroOperacao', ApontamentoController.cadastroOperacao)
router.post('/cadastroOperacao', ApontamentoController.cadastroOperacaoPost)

router.get('/di', ApontamentoController.di)
router.get('/cadastroDi', ApontamentoController.cadastroDI)
router.post('/cadastroDi', ApontamentoController.cadastroDIPost)
router.get('/responsavelDi/:di/:op', ApontamentoController.responsavelDi)
router.post('/responsavelDi', ApontamentoController.responsavelDiPost)
router.get('/diHoras/:di/:op', ApontamentoController.diHoras)
router.post('/diHoras', ApontamentoController.diHorasPost)

module.exports = router;
