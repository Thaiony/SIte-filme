document.addEventListener('DOMContentLoaded', function() {
    const movies = document.querySelectorAll('.movie');
    
    movies.forEach(movie => {
        movie.addEventListener('click', function() {
            alert(`Você clicou em: ${movie.querySelector('h2').innerText}`);
        });
    });
});
