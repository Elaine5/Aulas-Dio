var jogador1 = 1;
var jogador2 = 0;
var placar;

// if = se / else = senão
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto');
} else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto');
} 
// usando else (senão)
else {
    console.log('Ninguém marcou pono');
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou')
}