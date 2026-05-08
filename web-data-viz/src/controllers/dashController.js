var dashboardModel = require("../models/dashboardModel");

function top3(req, res) {

    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarTop3(idUsuario)
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

    dashboardModel.buscarFavorito(idUsuario)
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

    dashboardModel.buscarTotalComparacoes(idUsuario)
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
    totalComparacoes
}