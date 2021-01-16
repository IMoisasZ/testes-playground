var express = require('express');
var router = express.Router();
const UserController = require("../Controller/UserController")

/* GET users listing. */
router.get('/cadastroUsuario', UserController.cadastroUsuario)
router.post('/addUsuario', UserController.addUsuario)

module.exports = router;
