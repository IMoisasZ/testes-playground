var express = require('express');
var router = express.Router();
const ControllerFilmes = require("../Controllers/controlerFilmes")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/filmes',ControllerFilmes.viewFilmes)
router.delete('/filmes/deletar/:id', ControllerFilmes.deletar)

module.exports = router;
