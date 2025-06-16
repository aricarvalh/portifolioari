    
    let  mostraresultado = document.querySelector('#resultado');
    let estacao;

function mes() {

    estacao = window.prompt("digite o mes").toUpperCase()

    if(estacao == "JANEIRO" || estacao == "FEVEREIRO" || estacao == "DEZEMBRO" ){
        mostraresultado.innerHTML = `<p> Estação:Verão </p>`;

    }

    if(estacao == "MARÇO" || estacao == "ABRIL" || estacao == "MAIO" ){
        mostraresultado.innerHTML = `<p> Estação:Outono </p>`;

    }

    if(estacao == "JUNHO" || estacao == "JULHO" || estacao == "AGOSTO" ){
        mostraresultado.innerHTML = `<p> Estação:Inverno </p>`;

    }
    
    if(estacao == "SETEMBRO" || estacao == "OUTUBRO" || estacao == "NOVEMBRO" ){
        mostraresultado.innerHTML = `<p> Estação:Primaveira </p>`;

    }
    
     
}



