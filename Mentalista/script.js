var numeroSecreto = parseInt(Math.random() * 11);

function Chutar(){
    var chute = parseInt(document.getElementById("ip_valor").value)
    console.log(numeroSecreto);

    var h2_result = document.getElementById("resultado");

    if(chute == numeroSecreto){        
        h2_result.innerHTML =  "Você acertou";
    }else if(chute > 10 || chute < 0){
        h2_result.innerHTML = "Você precisa digitar um numero entre 0 e 10"
    }else {
        h2_result.innerHTML = "Tente novamente";
    }
}