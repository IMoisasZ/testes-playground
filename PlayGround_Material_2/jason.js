//json stringfi com array
let familia = ["Moisés","Priscila","Ivy","Zoe"]
let familiaConvertida = JSON.stringify(familia);
console.log(familiaConvertida);

//json stringfi com objeto literal
let familia_ = {Pai:"Moises",Mae:"Prisicla",Filha1:"Ivy",Filha2:"Zoe"}
let Familia_Convertida = JSON.stringify(familia_);
console.log(Familia_Convertida);

//json parse com array
let familiaParse = JSON.parse(familiaConvertida);
console.log(familiaParse);

//json parse com metodo
let familia_parse = JSON.parse(Familia_Convertida);
console.log(familia_parse);
