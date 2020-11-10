const express = require("express")
const router = express.Router()
const ProdutoController = require("../Controllers/ProdutoController")

router.get("/", ProdutoController.paginaInicial)

router.get("/produtos", ProdutoController.produtos)

router.get("/produtos/calculoPecas", ProdutoController.calculoPecasHora)

module.exports = router