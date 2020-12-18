const { json } = require("express")
let celulares = require("../Data/celulares")
let ControllerCelular = {
    deletar:(req,res) => {
        let {id} = req.params
        celulares = celulares.filter((celular) => celular.id != id)            
            res.send(celulares)
    }
}
module.exports = ControllerCelular;