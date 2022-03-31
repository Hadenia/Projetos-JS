var carta1 = {
    nome: "Bulbasauro",
    atributos:{
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    atributos:{
        ataque: 8,
        defesa: 5,
        magia: 10
    }
};

var carta3 = {
    nome: "Goku",
    atributos:{
        ataque: 10,
        defesa: 8,
        magia: 4
    }
};

var cartas = [carta1, carta2, carta3]

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
    
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random() * cartas.length);   
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
}

function exibirOpcoes(){
    document.getElementById("opcoes").style.display = 'block';
    opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";

   for (var atributo in cartaJogador.atributos){
       opcoesTexto += "<input type='radio' name='atributo' value='"+atributo+"'>"+ atributo;
   }
   
   opcoes.innerHTML = opcoesTexto;
}

function obterAtributosSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
 
    for (var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
        
    }
    
}

function jogar() {
   var atributoSelecionado = obterAtributosSelecionado();
    console.log(atributoSelecionado);

    valorJogador = cartaJogador.atributos[atributoSelecionado];
    valorMaquina = cartaMaquina.atributos[atributoSelecionado];

    resultado = document.getElementById("resultado");

    if(valorJogador > valorMaquina ){
        resultado.innerHTML = "Você venceu";
        resultado.style.display = "block";

    } else if(valorJogador < valorMaquina ){
        resultado.innerHTML = "Você perdeu";
        resultado.style.display = "block";
    } else {
        resultado.innerHTML = "Empatou";        
        resultado.style.display = "block";
    }

    jogarDenovo = document.getElementById("btnJogarNovamente");
    jogarDenovo.style.display = 'block';
}

function jogarNovamente(){
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("resultado").style.display = 'none';
    document.getElementById("opcoes").style.display = 'none';

  document.getElementById("btnJogarNovamente").style.display = 'none';

}