exports.hello_world = (req, res)=> {
    res.send('Hello World!');
};

const data = require('../../movies.json');

exports.readAllMovies = (req,res) => {
    res.json(data);
}