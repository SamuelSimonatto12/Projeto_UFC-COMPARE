function atualizarBarra(id1, id2, valor1, valor2) {
    const valorMaximoDoSistema = 10; 

    let p1 = (valor1 / valorMaximoDoSistema) * 100;
    let p2 = (valor2 / valorMaximoDoSistema) * 100;

    document.getElementById(id1).style.width = p1 + "%";
    document.getElementById(id2).style.width = p2 + "%";
}