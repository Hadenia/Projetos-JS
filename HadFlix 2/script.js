function addFilmes(){
    var filmeFavorito = document.getElementById("ip_filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito)
    } else {
        console.error("Endereço do filme inválido");
    }
    document.getElementById("ip_filme").value = ""; /*Limpa o input*/
}


function listarFilmesNaTela(filme){
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito; 
}

/*
 ["https://i.ytimg.com/vi/yYNSSNJ0z_U/movieposter.jpg",
 "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", 
 "https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg"]

*/