function calculo(){
    let ano = 0
    let idade = 0
       

    ano = Number(window.prompt('Digite seu ano de nascimento'));
    idade = 2025 - ano; 

   alert ("sua idade é " + idade );


    if(idade > 18){
        alert("Você já pode tirar a carteira de motorista");
    } else {
        let dif = 18 - idade;
        alert("Você ainda não pode tirar a carteira pois ainda faltam " + dif + " anos para completar 18 anos " + " ");
       
    }
    
}