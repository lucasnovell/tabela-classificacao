//           chave;  valor;               chave; valor;
var jogador1 = {
  nome: "Jogador(a) 1",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var jogador2 = {
  nome: "Jogador(a) 2",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var jogador3 = {
  nome: "Jogador(a) 3",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var jogador4 = {
  nome: "Jogador(a) 4",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(jogador) {
  var matematicaDosPontos = jogador.vitorias * 3 + jogador.empates;
  return matematicaDosPontos;
}

jogador1.pontos = calculaPontos(jogador1);
jogador2.pontos = calculaPontos(jogador2);
jogador3.pontos = calculaPontos(jogador3);
jogador4.pontos = calculaPontos(jogador4);

var jogadores = [jogador1, jogador2, jogador3, jogador4];

function exibirJogadoresNaTela(jogadores) {
  var dadosDosJogadores = "";
  for (var i = 0; i < jogadores.length; i++) {
    dadosDosJogadores =
      dadosDosJogadores + "<tr><td>" + jogadores[i].nome + "</td>";
    //elemento = elemento +    ou   elemento +=, tanto faz
    dadosDosJogadores += "<td>" + jogadores[i].vitorias + "</td>";
    dadosDosJogadores += "<td>" + jogadores[i].empates + "</td>";
    dadosDosJogadores += "<td>" + jogadores[i].derrotas + "</td>";
    dadosDosJogadores += "<td>" + jogadores[i].pontos + "</td>";
    dadosDosJogadores +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    dadosDosJogadores +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    dadosDosJogadores +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = dadosDosJogadores;
}

exibirJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores);
}