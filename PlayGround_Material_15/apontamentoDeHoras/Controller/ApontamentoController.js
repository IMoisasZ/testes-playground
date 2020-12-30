const path = require('path')
const fs = require('fs')
const tipos = require("../Data/tipo")

const caminhoFucionarios = path.join("Data","funcionarios.json")
const caminhoSetor = path.join("Data","setor.json")
const caminhoMaquinas = path.join("Data","maquinas.json")
const caminhoClientes = path.join("Data","clientes.json")
const caminhoDi = path.join("Data","di.json")
const caminhoResponsavelDi = path.join("Data","diResponsaveis.json")

let diResp = null
let opResp = null

const ApontamentoController = {
    home:(req,res) => {
        res.render("home")
    },

    setor: (req,res) =>{
        let setorJson = fs.readFileSync(caminhoSetor, {encoding: 'utf-8'})
        setorJson = JSON.parse(setorJson)
        res.render('setor', {setor: setorJson})
    },

    cadastroSetorPost:(req,res) => {
        let setorJson = fs.readFileSync(caminhoSetor,{encoding: 'utf-8'})
        let {setor} = req.body
        setorJson = JSON.parse(setorJson)
        setorJson.push({id:setorJson.length + 1, setor:setor})
        fs.writeFileSync(caminhoSetor,JSON.stringify(setorJson), {encoding: 'utf-8'})
        res.redirect('/setor')
    },

    cadastroSetor:(req,res) => {
        res.render("cadastroSetor")
    },

    funcionarios:(req,res) => {
        let funcionarioJson = fs.readFileSync(caminhoFucionarios,{encoding: 'utf8'})
        funcionarioJson = JSON.parse(funcionarioJson)
        res.render("funcionarios", {funcionario: funcionarioJson})
    },

    cadastroFuncionario: (req,res) => {
        let setorJson = fs.readFileSync(caminhoSetor,{encoding: 'utf8'})
        setorJson = JSON.parse(setorJson)
        res.render("cadastroFuncionario", {setor: setorJson})
    },

    cadastroFuncionarioPost: (req,res) => {
        let funcionarioJson = fs.readFileSync(caminhoFucionarios, {encoding: 'utf-8'})
        let {registro, funcionario, setor} = req.body
        funcionarioJson = JSON.parse(funcionarioJson)
        funcionarioJson.push({registro:registro, funcionario:funcionario, setor:setor})
        fs.writeFileSync(caminhoFucionarios, JSON.stringify(funcionarioJson), {encoding: 'utf-8'})
        res.redirect("funcionarios")
    },

    maquina: (req,res) => {
        let maquinasJson = fs.readFileSync(caminhoMaquinas, {encoding: 'utf-8'})
        maquinasJson = JSON.parse(maquinasJson)
        res.render("maquina", {maquina: maquinasJson})
    },
    cadastroMaquina: (req,res) => {
        let setorJson = fs.readFileSync(caminhoSetor,{encoding: 'utf-8'})
        setorJson = JSON.parse(setorJson)
        res.render("cadastroMaquina", {setor: setorJson, tipo: tipos})
    },

    cadastroMaquinaPost: (req,res) => {
        let maquinasJson = fs.readFileSync(caminhoMaquinas, {encoding: 'utf-8'})
        let {id, maquina, tipo, setor} = req.body
        maquinasJson = JSON.parse(maquinasJson)
        maquinasJson.push({id: maquinasJson.length+1, maquina:maquina, tipo:tipo, setor:setor})
        fs.writeFileSync(caminhoMaquinas,JSON.stringify(maquinasJson),{encoding: 'utf-8'})
        res.redirect("maquina")
    },

    cliente:(req,res) => {
        let clientesJson = fs.readFileSync(caminhoClientes, {encoding: 'utf-8'})
        clientesJson = JSON.parse(clientesJson)
        res.render("clientes", {cliente: clientesJson})
    },

    cadastroCliente:(req,res) => {
        res.render("cadastroCliente")
    },

    cadastroClientePost:(req,res) => {
        let clientesJson = fs.readFileSync(caminhoClientes, {encoding: 'utf-8'})
        let {cliente} = req.body
        clientesJson = JSON.parse(clientesJson)
        clientesJson.push({id: clientesJson.length + 1, cliente: cliente})
        fs.writeFileSync(caminhoClientes,JSON.stringify(clientesJson), {encoding: 'utf-8'})
        res.redirect("cliente")
    },

    di:(req,res) => {
        let {di} = req.params
        diResp = di
        let diJson = fs.readFileSync(caminhoDi,{encoding:'utf-8'})
        diJson = JSON.parse(diJson)

        res.render("di",{di: diJson})
    },

    cadastroDI: (req,res) => {
        let clienteJson = fs.readFileSync(caminhoClientes, {encoding: 'utf-8'})
        clienteJson = JSON.parse(clienteJson)

        let setorJson = fs.readFileSync(caminhoSetor, {encoding: 'utf-8'})
        setorJson = JSON.parse(setorJson)

        let funcionarioJson = fs.readFileSync(caminhoFucionarios, {encoding: 'utf-8'})
        funcionarioJson = JSON.parse(funcionarioJson)
                
        res.render("cadastroDi",{cliente: clienteJson, setor: setorJson, diResp: funcionarioJson})
    },

    cadastroDIPost: (req,res) => {
        let diJson = fs.readFileSync(caminhoDi,{encoding: 'utf-8'})
        let {di,op,descricao,numeroFerramenta,nomePeca,numeroPeca,cliente,dataInicio,dataTermino,status} = req.body
        diJson = JSON.parse(diJson)
        diJson.push({di,op,descricao,numeroFerramenta,nomePeca,numeroPeca,cliente,dataInicio,dataTermino,status})
        fs.writeFileSync(caminhoDi,JSON.stringify(diJson),{encoding:'utf-8'})
        res.redirect("di")
    },

    responsavelDi:(req,res) => {
        let responsavelJson = fs.readFileSync(caminhoFucionarios,{encoding: 'utf-8'})
        responsavelJson = JSON.parse(responsavelJson)

        res.render("cadastroResponsavelDi",{diResp: responsavelJson, di: diResp})
    },

    responsavelDiPost:(req,res)=> {
        let responsavelDiJson = fs.readFileSync(caminhoResponsavelDi,{encoding:'utf-8'})
        let {responsavel, tipo, data, observacao} = req.body
        responsavelDiJson = JSON.parse(responsavelDiJson)
        responsavelDiJson.push({di:diResp,op:opResp,responsavel,tipo,data,observacao})
        fs.writeFileSync(caminhoResponsavelDi,JSON.stringify(responsavelDiJson),{encoding: 'utf-8'})
        res.redirect("cadastroDi")
    }

}

module.exports = ApontamentoController