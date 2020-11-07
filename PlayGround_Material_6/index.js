const express = require("express")
const app = express()

let series = [
    {id:1, name:"Supernatural"},
    {id:2, name:"Anatomia de Grey"},
    {id:3, name:"Lucifer"},
    {id:4, name:"O Rancho"}
]

app.get('/serie/:id',(req,res)=>{
    let {id} = req.params     
    res.send(series[id-1].name)
})
app.listen(3000,()=> console.log("Servidor rodando na porta 3000"))