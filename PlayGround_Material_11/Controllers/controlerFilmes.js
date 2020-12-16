const DataFilmes = require("../Data/listaFilmes")

let filmes = {
    viewFilmes: (req, res) => {
        let {id} = req.params;
        res.render("filmes", {filme: DataFilmes})
    },
    deletar: (req, res) => {
        let {id} = req.params
        res.send("Deletando o filme: " + id)
    }
}

module.exports = filmes;