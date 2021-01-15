let paradas = [{"id":"0","tipo":"NORMAL","descricao":"TRABALHO NORMAL"},{"id":"1","tipo":"PARADA","descricao":"FALTA DE ENERGIA ELETRICA"},{"id":"2","tipo":"RETRABALHO","descricao":"RETRABALHO OPERACIONAL"},{"id":"3","tipo":"PARADA","descricao":"FALTA DE AGUA"},{"id":5,"tipo":"PARADA","descricao":"AGUARDANDO PONTE ROLANTE"}]


function addTipo(){
   var descricao = document.getElementById('descrTipo').selectedIndex
    for(let i in paradas){
        if(descricao == [i]){
         document.getElementById('tp').value = paradas[i].tipo
     }
   }
}