//Luis Alexander Hernandez Martinez//


console.log("Sistema de recomendación de películas \n");

let biblioteca = [
    { pelicula: "Inception", genero: "Ciencia Ficción" },
    { pelicula: "The Godfather", genero: "Drama" },
    { pelicula: "Toy Story", genero: "Animación" },
    { pelicula: "The Dark Knight", genero: "Acción" },
    { pelicula: "Finding Nemo", genero: "Aventura" }
];

console.log("Búsqueda de película por género \n");

let generoBuscado = "Acción";

if (biblioteca[0].genero == generoBuscado) {
    console.log("La película recomendada es: " + biblioteca[0].pelicula);

} else if (biblioteca[1].genero == generoBuscado) {
    console.log("La película recomendada es: " + biblioteca[1].pelicula);

} else if (biblioteca[2].genero == generoBuscado) {
    console.log("La película recomendada es: " + biblioteca[2].pelicula);

} else if (biblioteca[3].genero == generoBuscado) {
    console.log("La película recomendada es: " + biblioteca[3].pelicula);

} else if (biblioteca[4].genero == generoBuscado) {
    console.log("La película recomendada es: " + biblioteca[4].pelicula);

} else {
    console.log("Ingrese un género correcto");
}