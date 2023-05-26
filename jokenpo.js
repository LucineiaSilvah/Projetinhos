/* jogo jokenpô */

function jogar(){
  /* logica que verifica se foi selecionada uma opção */ if(document.getElementById("pedra").checked == false &&document.getElementById("papel").checked == false && 
document.getElementById("tesoura").checked == false) {
    alert('selecione uma opcao')   
   }else {
    /* logica principal */
var sorteio = Math.floor(Math.random() *3)
/* maquina sortei um número e trata nos cases */
switch (sorteio) {
    case 0: document.getElementById('pc').src="pcpedra.png"
    break;
    case 1: document.getElementById('pc').src="pcpapel.png"
    break;
    case 2: document.getElementById('pc').src="pctesoura.png"
    break;
    
    }
    if((document.getElementById('pedra').checked === true &&  sorteio ===0) ||  (document.getElementById('papel').checked === true &&  sorteio ===1) || (document.getElementById('tesoura').checked === true &&  sorteio ===2)) {
      document.getElementById('placar').innerHTML ="Empate";
 document.getElementById('placar').style.color="gray";      /* lógica do empate */
    }else if((document.getElementById('pedra').checked === true &&  sorteio ===2) ||  (document.getElementById('papel').checked === true &&  sorteio ===0) || (document.getElementById('tesoura').checked === true &&  sorteio ===1)) {
       document.getElementById('placar').innerHTML ="Você ganhou!";
       document.getElementById('placar').style.color="green"; 
       /* lógica vitória */
    }else if((document.getElementById('pedra').checked === true &&  sorteio ===1) ||  (document.getElementById('papel').checked === true &&  sorteio ===2) || (document.getElementById('tesoura').checked === true &&  sorteio ===0)) {
       document.getElementById('placar').innerHTML ="Você perdeu!";
       document.getElementById('placar').style.color="red"; /* logica derrota */
    }
      
   } 
}
function resetar() {
  document.getElementById('pc').src="pc.png ";
  document.getElementById('placar').innerHTML ="";/* limpa os campos  */
}
