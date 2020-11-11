const express = require("express")
const router = express.Router()
const ControllerFamilia = require("../Controllers/familiaController")

router.get("/pai",ControllerFamilia.pai)

router.get("/mae",ControllerFamilia.mae)

router.get("/filhas",ControllerFamilia.filhas)

module.exports = router