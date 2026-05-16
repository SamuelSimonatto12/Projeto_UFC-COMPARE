var express = require("express");
var router = express.Router();

var comparacoesController = require("../controllers/comparacoesController");

router.get("/historico/:idUsuario", function (req, res) {

    comparacoesController.historico(req, res);
    
});


module.exports = router;