     let  mostraresultado = document.querySelector('#resultado');
     let num1 =0;
     let num2 =0;

function num() {
     num1 = window.prompt("Digite o primeiro numero");
     num2 = window.prompt("Digite o segundo num numero");

    
    if(num1>num2){
         mostraresultado.innerHTML += (`<p> O maior numero é: ${num1}</p> `)
    }
    else{
         mostraresultado.innerHTML += (`<p> O maior numero é: ${num2}</p> `)
    }
     }