function media() {
    let nota1 = Number(window.prompt("Digite a primeira nota: "));
    let nota2 = Number(window.prompt("Digite a segunda nota: "));
    let nota3 = Number(window.prompt("Digite a terceira nota: "));

    let media = (nota1 + nota2 + nota3) / 3;

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>O resultado é ${media}</p>`;

    console.log(resultado);

    if(media > 60) {
        reprovadoaprovado.innerHTML = `<p>Aprovado ${media}</p>`;
    } else {
        dif = 60 - media
        reprovadoaprovado.innerHTML = `<p>Reprovado! ${dif} pontos para atingir a media 60.</p>`;
        
        
       
    }

}