const clientes = require('../Data/clientes')
const pecas = require('../Data/tipoPecas')
const fs = require('fs')
const path = require('path')
const { connected } = require('process')

const caminho = path.join('Data','pecasCadastradas.txt')

const pecasPorHora = {

    listaPecas:(req, res) => {
        res.render("index")
    },

    cadastrarPecas: (req, res) => {
        let {pcsHora} = req.body
        let {codigo,cavidade, ciclo} = req.query

        res.render('pecasHoras', {cliente: clientes, peca: pecas})

        let vlPcsHora = 3600 /Number(ciclo) * Number(cavidade)
        pcsHora = vlPcsHora
        let pcs = JSON.stringify({codigo: codigo, numCavidade: cavidade, vlCiclo: ciclo, pcsHora: vlPcsHora})
        console.log(pcsHora)
        fs.appendFileSync(caminho,pcs)
    }
}

module.exports = pecasPorHora