/**var listFilmes = ["Star Wars", "Lord of the Rings", "Batman"]

//escrever na tela
document.write("<p>" + listFilmes[0] + "</p>")
document.write("<p>" + listFilmes[1]  + "</p>")
document.write("<p>" + listFilmes[2]  + "</p>") 

listFilmes.push("Piratas do Caribe")
listFilmes.push("Piratas do Caribe1")**/


var listFilmes = ["https://i.ytimg.com/vi/yYNSSNJ0z_U/movieposter.jpg",
 "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", 
 "https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg"]


for(i=0; i < listFilmes.length; i++){
    document.write("<img src=" + listFilmes[i] + ">")
}