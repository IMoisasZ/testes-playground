const familia = {
    pai:(req, res)=>{
        res.sendFile(__dirname + "/HTML/pai.html")
    },
    mae:(req, res)=>{
        res.sendFile(__dirname + "/HTML/mae.html")
    },
    filhas:(req, res)=>{
        res.sendFile(__dirname + "/HTML/filhas.html")
    }
}

module.exports = familia;