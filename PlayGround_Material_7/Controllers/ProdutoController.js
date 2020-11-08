const produtos = require("../produtos")

const ProdutoController = {
    paginaInicial:(req, res)=>{
        res.send("Pagina inicial!")
    },
    produtos:(req, res)=>{
        res.send(produtos)
    },
    calculoPecasHora:(req, res)=>{
        res.send(String(3600 * 4 / 35))
    }
}

module.exports = ProdutoController