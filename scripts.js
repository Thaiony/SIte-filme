document.addEventListener('DOMContentLoaded', function() {
    const movies = document.querySelectorAll('.movie');
    
    movies.forEach(movie => {
        movie.addEventListener('click', function() {
            alert(`Você clicou em: ${movie.querySelector('h2').innerText}`);
        });
    });
});

function saibaMais(titulo) {
    alert('Mais informações sobre: ' + titulo);
}

function filterMovies(classe) {
    var movies = document.querySelectorAll('.movie');
    movies.forEach(function(movie) {
        if (classe === 'todos') {
            movie.style.display = 'block';
        } else {
            if (movie.classList.contains(classe)) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        }
    });
}
