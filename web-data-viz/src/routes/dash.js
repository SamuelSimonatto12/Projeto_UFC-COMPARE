var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/total/:idUsuario", function (req, res) {
    dashController.totalComparacoes(req, res);
});

router.get("/favorito/:idUsuario", function (req, res) {
    dashController.favorito(req, res);
});

router.get("/top3/:idUsuario", function (req, res) {
    dashController.top3(req, res);
});

router.get("/historico/:idUsuario", function (req, res) {
    dashController.historico(req, res);
});

module.exports = router;