'use strict';
const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./src/routes');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

app.use(cors());
app.options('*', cors());

app.use('/api', routes);

app.listen(PORT, () => {
    console.log("### Running at port 5000 ###");
});