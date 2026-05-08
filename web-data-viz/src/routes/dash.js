var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/top3/:idUsuario", function(req, res){
    dashboardController.top3(req, res);
});

router.get("/favorito/:idUsuario", function(req, res){
    dashboardController.favorito(req, res);
});

router.get("/total/:idUsuario", function(req, res){
    dashboardController.totalComparacoes(req, res);
});

module.exports = router;