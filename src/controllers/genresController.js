const { Genre } = require('../database/models');


const genresController = {
    list: async (req, res) => {    
        const genres = await Genre.findAll()
            res.render('genresList', { genres });
    },
    detail: async (req, res) => {
        const genre = await Genre.findByPk(req.params.id)
        res.render('genresDetail', { genre });
    }
}
module.exports = genresController;