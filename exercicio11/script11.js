function contar() {
    let mostraresultado = document.getElementById('resultado');

    mostraresultado.innerHTML = `<p>Contando de 10 até 1</p>`;

    let contador =10;

     while(contador >= 1){
        let resultado = contador % 2;
        if (resultado == 0) {
             mostraresultado.innerHTML +=`${contador}, &#9827`
                            }
            else{
                mostraresultado.innerHTML +=`<mark>${contador}</mark>, &#9827`;
                } 
        contador -=1;
                        }
                        
    mostraresultado.innerHTML += `&#9827`;
}