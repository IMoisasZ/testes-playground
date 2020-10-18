// função declarada
//function exemplo(){
    //return "Oi eu sou uma função!"
//}
//console.log(exemplo());

//função expressa
let exemplo = function(){
    return "Oi eu sou uma função!"
}
console.log(exemplo());

//função com parametros
var resultado = 0;
function calculadora(a,b,operacao){
    
    switch(operacao){
        case "+":
            resultado = a + b;
            break;
        case "-":
            resultado = a - b;
            break;
        case "*":
            resultado = a * b;
            break;
        case "/":
            resultado = a / b;
            break;
        default:
            resultado = null;
    }
    return resultado;
}
var r = calculadora(30,18,"/");
console.log(r);