const MovieModel = require("../models/Movie.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require("../models/Movie.model");

// all your routes here


router.get('/movies/create', (req, res, next) => {
    res.render('movies/new-movie.hbs')
})

router.post('/movies/create', (req, res, next) => {

    const { title, genre, plot, cast } = req.body;

    Movie.create({
        title,
        genre,
        plot,
        cast
    })
    .then(newMovie => {
        console.log(newMovie);
        res.redirect('/movies')
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(moviesArray => {
        console.log(moviesArray);
        res.render('movies/movies', { film: moviesArray })
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;
