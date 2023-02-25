const express = require('express');
const app = express.Router();

const Movie = require('../../models/Movies');

// // @route GET api/movies
// // @description tests movies route
// // @access Public
// app.get('/test', (req, res) => {
//   res.send("Movie route is running")
// })

// @route GET api/movies
// @description Get all movies
// @access Public
app.get('/', (req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ noMoviesFound: 'No movies found' }));
})


// @route POST api/movies
// @description add/save movie
// @access Public
app.post('/', (req, res) => {
  Movie.create(req.body)
    .then(movie => res.json({ msg: 'Movie added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this movie' }));
})


module.exports = app;

