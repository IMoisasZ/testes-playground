const clientes = require('../Data/clientes')
const pecas = require('../Data/tipoPecas')
const fs = require('fs')
const path = require('path')

const caminho = path.join('Data','pecasCadastradas.txt')

const pecasPorHora = {
    cadastrarPecas: (req, res) => {
        let {cod, descr} = req.body
        descr = cod
        if(cod == 'Selecione...'){
            console.log('Escolha um código de produto!')
            
        }else {
            console.log(parseInt(cod).value) 
        }
            
        res.render('index', {cliente: clientes, peca: pecas})
    }
}

module.exports = pecasPorHora