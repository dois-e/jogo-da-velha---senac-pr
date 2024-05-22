var jogador = "x";
function jogar(celula) {
// verificar se a ccoluna esta vazia
if(celula.innerHTML === ""){
    //   escreva na celula
    celula.innerHTML = jogador;
    // alternar jogada
    if(jogador === "x"){
        jogador = "o";
        celula.style.backgroundcolor="rel"

    } else {
        // se jogada for f "o"
;        jogador = "x";

    }
}
} 
function reiniciar() {
    window.location.reload();
}