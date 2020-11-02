let carros = ["Santa Fe","Gran Santa Fe","Sorento","Journey"]
console.log(carros + " - mostrando array criado")

carros.push("Meriva","Zafira","Freemont") //incluir no array, na ultima posição
console.log(carros + " - incluido meriva, zafira e freemont")

carros.pop() //retirar itens do array na ultima posição
console.log(carros + " - retirado o utimo item da lista - freemont")

carros.shift()//retirar o primeiro l=item da lista
console.log(carros + " - retirado o primiero item da lista - Santa FE")

carros.unshift("Santa Fe")//adiciona item no incio do array
console.log(carros + " - adicionado um item no inicio do array - Santa Fe")

let carrosSeparadosPorTraco = carros.join(" - ")//sepapar os itens por caracteres diferente da virgula
console.log(carrosSeparadosPorTraco + " - itens separados por traço -")

console.log(carros.indexOf("Zafira"))//procurar o indice dentro de um array

console.log(carros.lastIndexOf("Journey"))//procurar o indice dentro de um arrya, mas de tras para frente

console.log(carros.includes("Peugeot 3008"))//procurar um item dentro de um array, mas retorna bolleano
