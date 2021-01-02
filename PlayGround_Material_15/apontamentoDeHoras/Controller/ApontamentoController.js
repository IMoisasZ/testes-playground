//requires
const path = require('path')
const fs = require('fs')
const tipos = require("../Data/tipo")
const tiposParadas = require("../Data/tipoParada")

//caminhos de arquivos
const caminhoFucionarios = path.join("Data","funcionarios.json")
const caminhoSetor = path.join("Data","setor.json")
const caminhoMaquinas = path.join("Data","maquinas.json")
const caminhoClientes = path.join("Data","clientes.json")
const caminhoDi = path.join("Data","di.json")
const caminhoResponsavelDi = path.join("Data","diResponsaveis.json")
const caminhoOperacao = path.join("Data","operacao.json")
const caminhoDiHoras = path.join("Data","diHoras.json")
const caminhoParadas = path.join("Data","parada.json")
const caminhoApontamento = path.join("Data","apontamento.json")
const caminhoComentarioDi = path.join("Data","diComentario.json")

//funções
function read(caminho){
    return JSON.parse(fs.readFileSync(caminho,{encoding:'utf-8'}))
}

function write(caminho, incluir){
    return fs.writeFileSync(caminho,JSON.stringify(incluir),{encoding:'utf-8'})
}

function append(caminho, incluir){
    return fs.appendFileSync(caminho,JSON.stringify(incluir),{encoding:'utf-8'})
}

//controllers
const ApontamentoController = {
    home:(req,res) => {
        res.render("home")
    },

    setor: (req,res) =>{
        let setorJson = read(caminhoSetor)
        res.render('setor', {setor: setorJson})
    },

    cadastroSetor:(req,res) => {
        res.render("cadastroSetor")
    },

    cadastroSetorPost:(req,res) => {
        let {setor} = req.body
        let setorJson = read(caminhoSetor)
        setorJson.push({id:setorJson.length + 1, setor:setor})
        write(caminhoSetor,setorJson)
        res.redirect('/setor')
    },

    funcionarios:(req,res) => {
        let funcionarioJson = read(caminhoFucionarios)
        res.render("funcionarios", {funcionario: funcionarioJson})
    },

    cadastroFuncionario: (req,res) => {
        let setorJson = read(caminhoSetor)
        res.render("cadastroFuncionario", {setor: setorJson})
    },

    cadastroFuncionarioPost: (req,res) => {
        let {registro, funcionario, setor} = req.body
        let funcionarioJson = read(caminhoFucionarios)    
        funcionarioJson.push({registro:registro, funcionario:funcionario, setor:setor})
        write(caminhoFucionarios,funcionarioJson)
        res.redirect("funcionarios")
    },

    maquina: (req,res) => {
        let maquinasJson = read(caminhoMaquinas)
        res.render("maquina", {maquina: maquinasJson})
    },
    cadastroMaquina: (req,res) => {
        let setorJson = read(caminhoSetor)
        res.render("cadastroMaquina", {setor: setorJson, tipo: tipos})
    },

    cadastroMaquinaPost: (req,res) => {
        let {id, maquina, tipo, setor} = req.body
        let maquinasJson = read(caminhoMaquinas)
        maquinasJson.push({id: maquinasJson.length+1, maquina:maquina, tipo:tipo, setor:setor})
        write(caminhoMaquinas,maquinasJson)
        res.redirect("maquina")
    },

    cliente:(req,res) => {
        let clientesJson = read(caminhoClientes)
        res.render("clientes", {cliente: clientesJson})
    },

    cadastroCliente:(req,res) => {
        res.render("cadastroCliente")
    },

    cadastroClientePost:(req,res) => {
        let {cliente} = req.body
        let clientesJson = read(caminhoClientes)
        clientesJson.push({id: clientesJson.length + 1, cliente: cliente})
        write(caminhoClientes,clientesJson)
        res.redirect("cliente")
    },

    di:(req,res) => {
        let {di} = req.params
        diResp = di
        let diJson = read(caminhoDi)
        res.render("di",{di: diJson})
    },

    cadastroDI: (req,res) => {
        let clienteJson = read(caminhoClientes)     
        res.render("cadastroDi",{cliente: clienteJson})
    },

    cadastroDIPost: (req,res) => {
        let {di,op,descricao,numeroFerramenta,nomePeca,numeroPeca,cliente,dataInicio,dataTermino,status} = req.body
        let diJson = read(caminhoDi)
        diJson.push({di,op,descricao,numeroFerramenta,nomePeca,numeroPeca,cliente,dataInicio,dataTermino,status})
        write(caminhoDi,diJson)
        res.redirect("di")
    },

    responsavelDi:(req,res) => {  
        let {di, op} = req.params
        let dadosDi = []
        let responsavelDi = read(caminhoResponsavelDi)
        for(let i in responsavelDi){
            if(responsavelDi[i].di === di){
                dadosDi.push(responsavelDi[i])
            }
        }   
        let responsavelJson = read(caminhoFucionarios)
        res.render("cadastroResponsavelDi",{diResp: responsavelJson, di: di, op: op, dadosDi: dadosDi})
    },

    responsavelDiPost:(req,res)=> {
        let {di, op, responsavel, tipo, data, observacao} = req.body
        let responsavelDiJson = read(caminhoResponsavelDi)
        responsavelDiJson.push({di, op, responsavel,tipo,data,observacao})
        write(caminhoResponsavelDi,responsavelDiJson)
        res.redirect("cadastroDi")
    },

    diHoras: (req, res) => {
        let {di,op} = req.params
        let dadosDi = []
        let somaHoras = 0
        let diHorasJson = read(caminhoDiHoras)
        let operacaoJson = read(caminhoOperacao)
        for(let i in diHorasJson){
            if(diHorasJson[i].di === di){
                dadosDi.push(diHorasJson[i])
                somaHoras += parseFloat(diHorasJson[i].horas)
            }
        }
        res.render("cadastroDiHoras",{operacao: operacaoJson, di: di, op: op, dadosDi: dadosDi, somaHoras: parseFloat(somaHoras)})
    },

    diHorasPost: (req,res) => {
        let {di,op,operacao,horas} = req.body
        let diHorasJson = read(caminhoDiHoras)
        diHorasJson.push({di,op,operacao,horas})
        write(caminhoDiHoras,diHorasJson)
        res.redirect("di")
    },

    operacao: (req, res) => {
        let operacaoJson = read(caminhoOperacao)
        res.render("operacao",{operacao: operacaoJson})
    },

    cadastroOperacao: (req, res) => {
        let setorJson = read(caminhoSetor)
        res.render("cadastroOperacao",{setor: setorJson})
    },

    cadastroOperacaoPost: (req, res) => {
        let {operacao, setor} = req.body
        let operacaoJson = read(caminhoOperacao)
        operacaoJson.push({id: operacaoJson.length+1, operacao: operacao, setor: setor})
        write(caminhoOperacao,operacaoJson)
        res.redirect("operacao")
    },

    parada:(req,res) => {
        let paradaJson = read(caminhoParadas)
        res.render("paradas",{paradas: paradaJson})
    },

    cadastroParada: (req,res) => {
        res.render("cadastroParadas",{tipo: tiposParadas})
    },

    cadastroParadaPost: (req,res) => {
        let {id, tipo, descricao} = req.body
        let paradaJson = read(caminhoParadas)
        paradaJson.push({id, tipo, descricao})
        write(caminhoParadas,paradaJson)
        res.redirect("parada")
    },

    apontamento:(req,res) => {
        let apontamentoJson = read(caminhoApontamento)
        res.render("apontamento", {apontamento: apontamentoJson})
    },

    cadastroApontamento:(req,res) =>{
        let funcionarioJson = read(caminhoFucionarios)
        let maquinaJson = read(caminhoMaquinas)
        let diJson = read(caminhoDi)
        let paradaJson = read(caminhoParadas)
        res.render("cadastroApontamento",{funcionario: funcionarioJson, maquina: maquinaJson, di: diJson, parada: paradaJson})
    },

    cadastroApontamentoPost:(req,res) => {
        let {data, funcionario, maquina, di, posicao, inicio, intervalo, termino, total, descricaoTipo} = req.body
        let apontamentoJson = read(caminhoApontamento)
        let totalHoras = parseFloat(termino) - parseFloat(inicio) - parseFloat(intervalo)
        total = String(totalHoras)
        let max = 0
        for(let i in apontamentoJson){
            max = Math.max(apontamentoJson[i].id) + 1
        }
        apontamentoJson.push({id: max, data, funcionario, maquina, di, posicao, inicio, intervalo, termino, total: totalHoras,descricaoTipo})
        write(caminhoApontamento,apontamentoJson)
        res.redirect("apontamento")
    },

    editar_excluirApontamento:(req,res) => {
        let {id} = req.params
        let apontamentoJson = read(caminhoApontamento)
        let funcionarioJson = read(caminhoFucionarios)
        let maquinaJson = read(caminhoMaquinas)
        let diJson = read(caminhoDi)
        let paradaJson = read(caminhoParadas)
        let apontamentoSelecionado =[]
        for(let i in apontamentoJson){
            if(apontamentoJson[i].id == id){
                apontamentoSelecionado.push(apontamentoJson[i])
            }
        }
        res.render("editar_excluirApontamento",{dados: apontamentoSelecionado, funcionario: funcionarioJson, maquina: maquinaJson, di: diJson, parada: paradaJson, id: id})
    },

    editar_excluirApontamentoEditar:(req,res) => {
        let {id, data, funcionario, funcionarioAtual, maquina, maquinaAtual, di, diAtual, posicao, inicio, intervalo, termino, total, descricaoTipo, descricaoTipoAtual} = req.body
        let apontamentoJson = read(caminhoApontamento)
        let apontamentoSelecionado = {}
        let apontamentoNaoSelecionado = []
        let func = ""
        let maq = ""
        let dis = ""
        let descr = ""
        for(let i in apontamentoJson){
            if(apontamentoJson[i].id == id){
                apontamentoSelecionado = apontamentoJson[i]
            }else{
                apontamentoNaoSelecionado.push(apontamentoJson[i])
            }
        }

        if(funcionario == 0){
                func = funcionarioAtual
            }else{
                func = funcionario
        }

        if(maquina == 0){
            maq = maquinaAtual
        }else{
            maq = maquina
        }
        
        if(di == 0){
            dis = diAtual
        }else{
            dis = di
        }  

        if(descricaoTipo == 0){
            descr = descricaoTipoAtual
        }else{
            descr = descricaoTipo
        }

        apontamentoNaoSelecionado.push({id,data, funcionario: func, maquina: maq, di: dis,posicao, inicio, intervalo, termino, total, descricaoTipo: descr})
        function ordenar (a,b){
            if(a.id < b.id){
                return -1
            }
            if(a.id > b.id){
                return 1
            }
            return 0
        }
        apontamentoNaoSelecionado.sort(ordenar)
        write(caminhoApontamento,apontamentoNaoSelecionado)
        res.redirect("apontamento")
    },

    editar_excluirApontamentoDeletar:(req,res) => {
        let {id} = req.body
        let apontamentoJson = read(caminhoApontamento)

        for(let i in apontamentoJson){
            if(!apontamentoJson[i].id == id){
                apontamentoJson.push(apontamentoJson[i])
            }
        }
        console.log(apontamentoJson)

        function ordenar (a,b){
            if(a.id < b.id){
                return -1
            }
            if(a.id > b.id){
                return 1
            }
            return 0
        }
        apontamentoJson.sort(ordenar)
        write(caminhoApontamento,apontamentoJson)
        res.redirect("apontamento")
    },

    diComentario:(req,res) => {
        let {di,op} = req.params
        let responsavelJson = read(caminhoFucionarios)
        let comentarioDiJson = read(caminhoComentarioDi)
        let dadosDi = []

        for(let i in comentarioDiJson){
            if(comentarioDiJson[i].di === di){
                dadosDi.push(comentarioDiJson[i])
            }
        }
        res.render("cadastroComentarioDi",{di: di, op: op, responsavel: responsavelJson, dadosDi: dadosDi})
    },

    diComentarioPost:(req,res) => {
        let {di, op, data, responsavel, comentario} = req.body
        let diComentarioJson = read(caminhoComentarioDi)
        diComentarioJson.push({di, op, data, responsavel, comentario})
        write(caminhoComentarioDi,diComentarioJson)
        res.redirect("di")
    }
}

module.exports = ApontamentoController