// //json stringfi com array
// let familia = ["Moisés","Priscila","Ivy","Zoe"]
// let familiaConvertida = JSON.stringify(familia);
// console.log(familiaConvertida);

// //json stringfi com objeto literal
// let familia_ = {Pai:"Moises",Mae:"Prisicla",Filha1:"Ivy",Filha2:"Zoe"}
// let Familia_Convertida = JSON.stringify(familia_);
// console.log(Familia_Convertida);

// //json parse com array
// let familiaParse = JSON.parse(familiaConvertida);
// console.log(familiaParse);

// //json parse com metodo
// let familia_parse = JSON.parse(Familia_Convertida);
// console.log(familia_parse);

let familiaParse = '{"Pai":"João Francisco dos Santos", "Mae":"Maria de Lourdes dos Santos", "Filho":"Moisés Barbosa dos Santos", "Filha":"Mydian Aparecid dos Santos", "Neta1":"Ivy Barbosa dos Santos","Neta2":"Zoe Barbosa dos Santos"}'
let familiaJsonParse = JSON.parse(familiaParse)
console.log(familiaJsonParse)

let familiaStringFy = {Pai:"João Francisco dos Santos", Mae:"Maria de Lourdes dos Santos", Filho: "Moisés Barbosa dos Santos", Filha:"Mydian Aparecid dos Santos", Neta1:"Ivy Barbosa dos Santos",Neta2:"Zoe Barbosa dos Santos"}
let familiaJsonStringFy = JSON.stringify(familiaStringFy)
console.log(familiaJsonStringFy)