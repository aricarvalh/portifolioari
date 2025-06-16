function somar(){
    let num1 = 0
    let num2 = 0

    num1 = Number(window.prompt('Digite um Número'));
    num2 = Number (window.prompt('Digite outro Número'));

    
    let soma =num1 + num2;
    if(soma >10) {
        alert("O resultado é maior do que 10")
    } else {
        alert("Nâo é maior do que 10")
    }
    
}




