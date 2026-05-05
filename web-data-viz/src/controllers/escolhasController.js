var usuarioModel = require("../models/usuarioModel");

function escolhas(req, res) {
    var id_lutador1 = req.body.emailServer;
    var id_lutador2 = req.body.senhaServer;

    if (id_lutador1 == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (id_lutador2 == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.escolhas(id_lutador1, id_lutador2)
            .then(function (resultadoAutenticar) {

                if (resultadoAutenticar.length == 1) {

                    res.json({
                        id: resultadoAutenticar[0].id,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome
                    });

                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }

            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    autenticar,
    cadastrar
}