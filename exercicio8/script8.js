    let  mostraresultado = document.querySelector('#resultado');
    let estacao;

function mes() {

    estacao = window.prompt("digite o mes").toUpperCase();

    if(estacao == "JANEIRO" || estacao == "FEVEREIRO" || estacao == "DEZEMBRO" ){
        mostraresultado.innerHTML = `<p> Estação:Verão </p>`;
        mostraresultado.body.style.backgroundColor ="red"
    }

    if(estacao == "MARÇO" || estacao == "ABRIL" || estacao == "MAIO" ){
        mostraresultado.innerHTML = `<p> Estação:Outono </p>`;
         mostraresultado.style.backgroundColor ="orange";
    }

    if(estacao == "JUNHO" || estacao == "JULHO" || estacao == "AGOSTO" ){
        mostraresultado.innerHTML = `<p> Estação:Inverno </p>`;
         mostraresultado.style.backgroundColor ="lightblue";
    }
    
    if(estacao == "SETEMBRO" || estacao == "OUTUBRO" || estacao == "NOVEMBRO" ){
        mostraresultado.innerHTML = `<p> Estação:Primaveira </p>`;
         mostraresultado.style.backgroundColor ="pink";
    }

}