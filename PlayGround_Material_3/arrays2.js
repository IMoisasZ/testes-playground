//tabuada com .map
let numeros = [1,2,3,4,5,6,7,8,9,10]
let dobroNumeros = numeros.map(function(num){
    let tabuada = 6;
    console.log(tabuada + " x " + num + " = " + tabuada * num)
})

//encontrando um valor dentro de um array
let carros = ["Sorento","Santa Fe","Gran Santa Fe","Journey"]
let carrosFind = carros.find(function(carro){
    return carro == "Sorento"
})
console.log(carrosFind)


//filtrar um falor de um array
let series = ["Grays anotomy","Lucifer","Supernatural","Suits"]
let pesquisaSerie  = series.filter(function(serie) {
    return serie == "Lucifer"
})
console.log(pesquisaSerie)

//realiza uma funcao que utiliza um acumulador e outro o executados da função
let extrato = [100.00,130.00,-200.00,900.00,-560.00,876.00]
let saldoInicial = -1246
let saldo = extrato.reduce(function(acumulador,valor){
    let resultado = acumulador + valor
    return resultado
})
console.log(saldo + saldoInicial)

//percorre os intes de um array inteiro
let tabuada = [1,2,3,4,5,6,7,8,9,10]
tabuada.forEach(function(num){
    console.log(num * 2)
})
