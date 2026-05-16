var database = require("../database/config");

function buscarHistorico(idUsuario) {

    var instrucaoSql = `
         SELECT 
            l1.nome AS lutador1,
            l2.nome AS lutador2,
            DATE_FORMAT(c.data, '%d/%m/%Y') AS data
        FROM comparacoes c
        JOIN lutadores l1
            ON c.id_lutador1 = l1.id
        JOIN lutadores l2
            ON c.id_lutador2 = l2.id
        WHERE c.fk_usuario = ${idUsuario}
        ORDER BY c.data DESC
        LIMIT 10;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarHistorico
}