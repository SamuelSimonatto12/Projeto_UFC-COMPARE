var database = require("../database/config")

function escolhas(id_lutador1, id_lutador2) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function escolhas(): ", id_lutador1, id_lutador2)
    var instrucaoSql = `
        SELECT id_lutador1, id_lutador2 FROM comparacoes WHERE  id_lutador1= '${id_lutador1}' AND id_lutador2 = '${id_lutador2}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}



module.exports = {
    escolhas,
};