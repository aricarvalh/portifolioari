///Calculadora simples com as 5 operações basicas
///A
let num1
let num2
let resultado
let numero

function sobra() {
    num1 = Number (window.prompt("Digite o primeiro numero"));
    num2 = Number (window.prompt("Digite o segundo numero numero"));

    resultado = num1 % num2;
    numero = resultado % 2;

    alert ("O resultado é " + resultado + ".");
    if (numero == 0) {
    alert ("Par");
     } else {
    alert ("Ímpar");
     }

    
} 


function adicao() {
    num1 = Number (window.prompt("Digite o primeiro numero"));
    num2 = Number (window.prompt("Digite o segundo numero numero"));

    resultado = num1 + num2;
    numero = resultado % 2;

    alert ("O resultado é " + resultado + ".");
    if (numero == 0) {
    alert ("Par");
     } else {
    alert ("Ímpar");
     }
} 


function divisao() {
    num1 = Number (window.prompt("Digite o primeiro numero"));
    num2 = Number (window.prompt("Digite o segundo numero numero"));

    resultado = num1 / num2;
    numero = resultado % 2;

    alert ("O resultado é " + resultado + ".");
    if (numero == 0) {
    alert ("Par");
     } else {
    alert ("Ímpar");
     }

} 


function subtracao() {
    num1 = Number (window.prompt("Digite o primeiro numero"));
    num2 = Number (window.prompt("Digite o segundo numero numero"));

    resultado = num1 - num2;
    numero = resultado % 2;

    alert ("O resultado é " + resultado + ".");
    if (numero == 0) {
    alert ("Par");
     } else {
    alert ("Ímpar");
     }

} 


function multiplicacao() {
    num1 = Number (window.prompt("Digite o primeiro numero"));
    num2 = Number (window.prompt("Digite o segundo numero numero"));

    resultado = num1 * num2;
    numero = resultado % 2;

    alert ("O resultado é " + resultado + ".");
    if (numero == 0) {
    alert ("Par");
     } else {
    alert ("Ímpar");
     }
} 




