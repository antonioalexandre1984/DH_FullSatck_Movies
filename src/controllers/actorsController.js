const actorsController = {
    getAllActors: (req, res) => {
        Actor.find({}, (err, actors) => {
            if (err) {
                console.log(err);
            } else {
                res.render('actors/index', { actors: actors });
            }
        });
    }
}
module.exports = actorsController;