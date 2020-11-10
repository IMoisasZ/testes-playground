const express = require("express")
const router = express.Router()
const CarrosController = require("../Controllers/CarrosController")

router.get("/", CarrosController.home)

router.get("/listaCarros", CarrosController.listaCarros)

module.exports = router