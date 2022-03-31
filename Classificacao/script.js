var jogador1 = {nome:"Hadênia", vitorias: 2, empates: 1, derrotas: 2, pontos: 0}
var jogador2 = {nome:"Tholiver", vitorias: 3, empates:2, derrotas: 4, pontos:1}
var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

jogador1.pontos = calculaPontos(jogador1);
jogador2.pontos = calculaPontos(jogador2);
rafa.pontos = calculaPontos(rafa);

var jogadores = [jogador1, jogador2, rafa]

 function exibeJogadorNaTela(jogadores){
    var elemento = "";
    for (let i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>"+jogadores[i].nome+"</td>"
        elemento += "<td>"+jogadores[i].vitorias+"</td>"
        elemento += "<td>"+jogadores[i].empates+"</td>"
        elemento += "<td>"+jogadores[i].derrotas+"</td>"
        elemento += "<td>"+jogadores[i].pontos+"</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
} 

exibeJogadorNaTela(jogadores);


function adicionarVitoria(i){
    var jog = jogadores[i];
    jog.vitorias++;
    console.log(jog.vitorias);
    jog.pontos = calculaPontos(jog);
    exibeJogadorNaTela(jogadores);
} 

function adicionarEmpate(i){
    var jog = jogadores[i];
    jog.empates++;
    jog.pontos = calculaPontos(jog);
    exibeJogadorNaTela(jogadores)
} 

function adicionarDerrota(i){
    var jog = jogadores[i];
    jog.derrotas++;
    jog.pontos = calculaPontos(jog);
    exibeJogadorNaTela(jogadores)
} 