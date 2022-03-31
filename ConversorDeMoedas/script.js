
function CalcularMedia(){
    var valorElemento = document.getElementById("ip_moeda");
    var valor = parseFloat(valorElemento.value);

    var conversao = valor * 5; //Converte em Dolar
    console.log(conversao);

    var elementoMedia = document.getElementById("lb_conversao");
    var resultado = "O valor em dolar é  "+conversao;
    elementoMedia.innerHTML = resultado;

}

function Limpar(){
    var valorElementoN1 = document.getElementById("ip_moeda");
    valorElementoN1.value = '';

    var elementoMedia = document.getElementById("lb_conversao");
    elementoMedia.innerHTML = '';
}