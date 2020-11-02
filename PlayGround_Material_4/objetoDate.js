let dataHoje = new Date
console.log("0"+dataHoje.getDate() + "/" + (dataHoje.getMonth() + Number(1)) + "/" + dataHoje.getFullYear())

let aniversario = (dia, mes, ano) =>{
    let data = new Date
    console.log(data.getDate(data.setDate(dia)) + "." + data.getMonth(data.setMonth(mes)) + "." + data.getFullYear(data.setFullYear(ano)))
}
aniversario(10,09,1982)