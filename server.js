const express = require('express');
const path = require('path');


const app = express();

const PORT = 8002

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(` server is listening on ${PORT}`)
})