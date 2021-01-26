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

router.get('/parada', ApontamentoController.parada)
router.get('/cadastroParada', ApontamentoController.cadastroParada)
router.post('/cadastroParada', ApontamentoController.cadastroParadaPost)

router.get('/di', ApontamentoController.di)
router.get('/cadastroDi', ApontamentoController.cadastroDI)
router.post('/cadastroDi', ApontamentoController.cadastroDIPost)
router.get('/responsavelDi/:di/:op', ApontamentoController.responsavelDi)
router.post('/responsavelDi', ApontamentoController.responsavelDiPost)
router.get('/diHoras/:di/:op', ApontamentoController.diHoras)
router.post('/diHoras', ApontamentoController.diHorasPost)
router.get('/diComentario/:di/:op', ApontamentoController.diComentario)
router.post('/diComentario', ApontamentoController.diComentarioPost)

router.get('/apontamento', ApontamentoController.apontamento)
router.get('/cadastroApontamento', ApontamentoController.cadastroApontamento)
router.post('/cadastroApontamento', ApontamentoController.cadastroApontamentoPost)
router.get('/editar_excluirApontamento/:id', ApontamentoController.editarApontamento)
router.post('/editar_excluirApontamento', ApontamentoController.editarApontamentoEditar)
router.post('/editar_excluirApontamentoDeletar', ApontamentoController.editar_excluirApontamentoDeletar)

module.exports = router;
