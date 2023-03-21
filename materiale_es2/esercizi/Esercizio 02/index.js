const express = require('express');
const movieRouter = require('./src/routes/moviesRoutes');
const index = express();
const port = 3000;
index.use(express.json());
index.use('/movies',movieRouter);

index.listen(port,()=>{
    console.log('listening on http://localhost:'+port);
})