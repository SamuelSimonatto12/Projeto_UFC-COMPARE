var comparacoesModel = require("../models/comparacoesModel");

function historico(req, res) {

    var idUsuario = req.params.idUsuario;

    comparacoesModel.buscarHistorico(idUsuario)
        .then(function(resultado){

            res.json(resultado);

        })
        .catch(function(erro){

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });
}

module.exports = {
    historico
}