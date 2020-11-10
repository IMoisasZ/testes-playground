
const CarrosController = {
    home:(req, res)=>{
        res.send("Página inicial")
    },
    listaCarros:(req, res)=>{
        res.sendFile(__dirname + "/carros.html")
    }
}

module.exports = CarrosController;