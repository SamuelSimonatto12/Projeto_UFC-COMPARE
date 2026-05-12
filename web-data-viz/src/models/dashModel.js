var database = require("../database/config");

function buscarTop3(idUsuario) {

    var instrucaoSql = `
        select 
            l.nome,
            count(*) as escolhas
        from comparacoes_lutadores cl
        join lutadores l
            on cl.id_lutador = l.id
        where cl.fk_usuario = ${idUsuario}
        group by l.nome
        order by escolhas desc
        limit 3;`;

    return database.executar(instrucaoSql);
}

function buscarFavorito(idUsuario) {

    var instrucaoSql = `
        select 
            l.nome,
            count(*) as escolhas
        from comparacoes_lutadores cl
        join lutadores l
            on cl.id_lutador = l.id
        where cl.fk_usuario = ${idUsuario}
        group by l.nome
        order by escolhas desc
        limit 1;`;

    return database.executar(instrucaoSql);
}

function buscarTotalComparacoes(idUsuario) {

    var instrucaoSql = `
        select count(*) as total
        from comparacoes
        where fk_usuario = ${idUsuario};`;

    return database.executar(instrucaoSql);
}

function buscarHistorico(idUsuario) {

    var instrucaoSql = `
        select 
            l1.nome as lutador1,
            l2.nome as lutador2,
            data
        from comparacoes
        join lutadores l1
            on id_lutador1 = l1.id
        join lutadores l2
            on id_lutador2 = l2.id
        where fk_usuario = ${idUsuario}
        order by data desc
        limit 5;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTop3,
    buscarFavorito,
    buscarTotalComparacoes,
    buscarHistorico
}