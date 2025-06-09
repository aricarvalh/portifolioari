     let  mostraresultado = document.querySelector('#resultado');
     let inscritos =0;
     let equipe =0;

function inscrever() {

     inscritos++;
     equipe = parseInt(inscritos/3);
    
     mostraresultado.innerHTML = `<p> numero de inscritos: ${inscritos}</p><p>equipes: ${equipe}</p>`;

     if(equipe >=4){
          alert("é possivel iniciar o campeonato")
     }

}
