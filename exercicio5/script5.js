    let aleatorio = parseInt(Math.random () * 101)
    let  mostraresultado = document.querySelector('#resultado');
    let jogador
    let tentativas =0;
    
    function pensar() {
        jogador = Number(window.prompt("Digite um numero entre 1 e 100"));

        if(jogador > 0 && jogador < 101){

        tentativas +=1

        if (jogador !=aleatorio) {

            if(jogador > aleatorio) {
                mostraresultado.innerHTML += `<p><b>TENTATIVAS ${tentativas} : voce tentou o numero ${jogador}, Voce errou tente outro numero MENOR </p>`;
            } else {
                mostraresultado.innerHTML += `<p><b>TENTATIVAS ${tentativas} : voce tentou o numero ${jogador}, Voce errou tente outro numero MAIOR </p>`;
            }
        } else {
             mostraresultado.innerHTML += `<p><b>parabens Voce acertou o numero ${aleatorio}.</b></p>`;
            }
        }
    }