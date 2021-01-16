const fs = require("fs")
const path = require("path")

const caminhoCidadeEstados = path.join("Data","estados-cidades.json")

const UserController = {
    cadastroUsuario:(req, res) =>{
        let estadosJson = JSON.parse(fs.readFileSync(caminhoCidadeEstados, {encoding:'utf-8'}))
        let siglasEstados = []
        let cidades = []
        for(let i in estadosJson){
            siglasEstados.push(estadosJson[i].sigla)
            cidades.push(estadosJson[i].cidades[i])
        }
        console.log(siglasEstados)
        res.render("cadastroUsuario",{estado: siglasEstados})
    },

    addUsuario:(req, res) =>{
        res.redirect("/")
    },

}

module.exports = UserController