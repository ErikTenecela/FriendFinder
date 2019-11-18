const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

const PORT = 8002

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, () => {
    console.log(` server is listening on ${PORT}`)
})