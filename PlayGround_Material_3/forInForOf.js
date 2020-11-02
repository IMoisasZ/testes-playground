let carros = [
    {Marca: "Nissan", Modelo:"Sentra", Ano: 2015},
    {Marca: "Nissan", Modelo:"Sentra", Ano: 2012},
    {Marca: "GM", Modelo: "Celta", Ano: 2007},
    {Marca: "VW", Modelo: "Gol", Ano: 1996}
]

for(let carro in carros){
    console.table(carros)
}

let frutas = ["Maça","Laranja","Melancia","Uva"]

for(let fruta of frutas){
    console.log(fruta)
}
    