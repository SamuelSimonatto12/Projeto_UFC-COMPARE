var dashModel = require("../models/dashModel");

function top3(req, res) {

    var idUsuario = req.params.idUsuario;

    dashModel.buscarTop3(idUsuario)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function favorito(req, res) {

    var idUsuario = req.params.idUsuario;

    dashModel.buscarFavorito(idUsuario)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function totalComparacoes(req, res) {

    var idUsuario = req.params.idUsuario;

    dashModel.buscarTotalComparacoes(idUsuario)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function historico(req, res) {

    var idUsuario = req.params.idUsuario;

    dashModel.buscarHistorico(idUsuario)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    top3,
    favorito,
    totalComparacoes,
    historico
}