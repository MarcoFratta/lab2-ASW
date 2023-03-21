
exports.hello_world = (req, res)=> {
    res.send('Hello World!');
};

const data = require('../../movies.json');

exports.readAllMovies = (req,res) => {
    res.json(data);
}

exports.readMovie = (req, res) => {
    let i = data.findIndex(x => x.id == req.params.id);
    console.log("Reading movie: ", i);
    if (i >= 0){
        return res.json(data[i]);
    } else {
        return res.send("Not found");
    }
}

exports.createMovie = (req,res) => {
    const movies = req.body;
    const n_items = movies.length;
    data.push(movies);
    if (data.length > n_items){
        res.status(201).join({description: "New  movie added"});
    } else {
        res.status(500).json({description: "error occurs adding a new movie"})
    }
}

exports.updateMovie = (req, res) => {
    const movie = req.body;
    let i = data.findIndex(x => x.id == req.params.id);
    if(i >= 0){
        data.splice(i,1,movie);
        res.status(201).json({description: "Movie updated"})
    } else {
        res.status(404).json({description: "Not found"})
    }
}