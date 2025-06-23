function contar() {
    let mostraresultado = document.getElementById('resultado');

    mostraresultado.innerHTML = `<p>Contando de 1 até 10</p>`;

    let contador =1;
    
    while(contador <= 10) {
        let resultado = contador % 2;
        if (resultado == 0) {
             mostraresultado.innerHTML +=`<mark>${contador}</mark>, &#9827`
        }
            else{
                mostraresultado.innerHTML +=`${contador}, &#9827`
            } ;
        contador +=1;
    }

    mostraresultado.innerHTML += `&#9827`;



    
}