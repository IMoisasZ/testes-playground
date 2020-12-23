let carros = require('../Data/carros')

let ControllerCarros = {
    listaCarros: (req,res) =>{
        res.render('index',{listaCarros: carros})
    },

    viewAlterar: (req, res) => {
        res.redirect('alterar')
    }
}

module.exports = ControllerCarros;