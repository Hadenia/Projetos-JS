
//var nome = "Hadenia"
//var notaDoPrimeiroBimenstre = "9"

//console.log("Bem vindo: "+nome)


function CalcularMedia(){
    var valorElementoN1 = document.getElementById("nota_1");
    var nota1 = parseFloat(valorElementoN1.value);
    var valorElementoN2 = document.getElementById("nota_2");
    var nota2 = parseFloat(valorElementoN2.value);

    var media = ((nota1 + nota2) / 2);
    console.log(nota1);

    var elementoMedia = document.getElementById("nota_media");
    var resultado = "Sua média final foi de "+media;
    elementoMedia.innerHTML = resultado;

}

function Limpar(){
    var valorElementoN1 = document.getElementById("nota_1");
    valorElementoN1.value = '';

    var valorElementoN2 = document.getElementById("nota_2");
    valorElementoN2.value = '';

    var elementoMedia = document.getElementById("nota_media");
    elementoMedia.innerHTML = '';
}