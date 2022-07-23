const { Movie,Genre } = require('../database/models');

const moviesController = {

    list: async (req, res) => {
        const movies = await Movie.findAll() 
        return res.render('moviesList', { movies });
    },
    new: async (req, res) => {
        const movies = await Movie.findAll({
            order: [
                ['releaseDate', 'DESC']]
            }) 
        return res.render('newestMovies', { movies });
    },
    recommended: async (req, res) => {
        const movies = await Movie.findAll({
            order: [['rating', 'DESC']], limit: 5
    })
        return res.render('recommendedMovies', { movies });
    },
    detail: async (req, res) => {
        const {id} = req.params;
        const movie = await Movie.findByPk(id) 
        return res.render('moviesDetail', { movie });
    },
    add: async (req, res) => {
        const genres = await Genre.findAll();
        return res.render('moviesAdd', { genres });
    },
    create: async (req, res) => {
        const { title, rating, awards, release_date:releaseDate,length,genre_id:genreId } = req.body;
        await Movie.create({ title, rating, awards, releaseDate,length,genreId });
        return res.redirect('/movies');
    },
    edit: async (req, res) => {
        const { id } = req.params;
        const movie = await Movie.findOne({
            where: { id }
            });
    
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        const genres = await Movie.findAll();
        return res.render('moviesEdit', { movie, genres });
        
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { title, rating, awards, releaseDate,length,genreId } = req.body;
        await Movie.update({ title, rating, awards, releaseDate,length,genreId }, {
            where: { id }
        });
        return res.redirect('/movies');
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const movie = await Movie.findOne({
            where: { id }
        });
        return res.render('moviesDelete', { movie });
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        await Movie.destroy({
            where: { id }
        });
        return res.redirect('/movies');
    }
}

module.exports = moviesController;
