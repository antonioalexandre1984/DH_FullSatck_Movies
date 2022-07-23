const { Movie } = require('../src/database/models');
const {Op} = require('sequelize');

async function getMovies() {
    const movies = await Movie.findAll();
    movies.forEach(movie => console.log('Movie: ' +  movie.title));
}

//getMovies();


async function getMovies() {
    const movies = await Movie.findAll({
        where: {
          /*   //title: {
            //[Op.like]: '%Harry%'
            },
             */genreId: [1, 3, 8]
        },
        order: [
            ['releaseDate', 'ASC']],
        
        
    });
    movies.forEach(movie => console.log('Movie: ' +  movie.genreId + ' - ' + movie.releaseDate.toLocaleDateString('pt-BR') + ' - ' + movie.title));
}
getMovies()