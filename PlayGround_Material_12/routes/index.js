var express = require('express');
var router = express.Router();
const ControllerCelular = require("../Controllers/ControllerCelular")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/celular/:id', ControllerCelular.celular)
router.get('/celular/:id', ControllerCelular.deletar)



module.exports = router;
