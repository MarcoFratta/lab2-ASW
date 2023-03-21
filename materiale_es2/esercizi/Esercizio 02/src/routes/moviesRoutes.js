const express = require('express');
const movieControllers = require('../controller/moviesController')
const router = express.Router();
router.get('/',(req,res,next)=>{
    movieControllers.readAllMovies(req,res);
})
router.route('/:id')
    .get((req,res)=>{
        movieControllers.readMovie(req,res);})
    .post((req,res)=>{
        movieControllers.createMovie(req,res);})
    .delete((req,res)=>{
        movieControllers.deleteMovie(req,res);})
    .put((req,res)=>{
        movieControllers.updateMovie(req,res);})
module.exports = router;