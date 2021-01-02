
function totalHoras(){
    let inicio = document.getElementById("ini").value
    let intervalo = document.getElementById("int").value
    let termino = document.getElementById("ter").value
    let total = (termino-inicio-intervalo)
    if(inicio && termino != "" || inicio && termino != 0 && intervalor != ""){
        document.getElementById("tt").value = total
    }
    

    
}
