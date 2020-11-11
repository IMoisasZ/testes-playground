const { application } = require("express")

let pai = ()=>{

    let nome = document.getElementById("txtNome")
    let sobrenome = document.getElementById("txtSobrenome")
    let idade = document.getElementById("txtIdade")
    let dados = nome + " " + sobrenome + " - " + idade + " anos"
    
    document.getElementById("mostrar").innerHTML = "<li>"+dados+"</li>"
}
console.log(pai())