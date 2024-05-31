const contenedor = document.getElementById("contenedor");
let pagina = 1;

async function cambiarPagina(delta) {
    pagina += delta;
    if (pagina < 1) pagina = 1;

    await cargarPeliculas();
}

async function cargarPeliculas() {
    try {
        const apiKey = '5b8696321ef312ba100ef61d2ddb34b3';
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=${pagina}`);
        if (!response.ok) {
            throw new Error('Error al cargar las películas');
        }

        const data = await response.json();
        mostrarPeliculas(data.results);
    } catch (error) {
        console.error(error.message);
    }
};

function mostrarPeliculas(peliculas) {
    contenedor.innerHTML = ''; // Vaciamos el contenedor antes de agregar las nuevas películas

    peliculas.forEach(pelicula => {
        const peliculaElemento = document.createElement('div');
        peliculaElemento.classList.add('pelicula'); // Agregamos la clase "pelicula"

        const imagen = document.createElement('img');
        imagen.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
        imagen.alt = pelicula.title;

        const titulo = document.createElement('h4');
        titulo.textContent = pelicula.title;

        peliculaElemento.appendChild(imagen);
        peliculaElemento.appendChild(titulo);

        contenedor.appendChild(peliculaElemento);
    });
};

document.getElementById("btnAnterior").addEventListener("click", () => cambiarPagina(-1));
document.getElementById("btnSiguiente").addEventListener("click", () => cambiarPagina(1));

cargarPeliculas();
