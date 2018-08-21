const http = require('http');
const express = require('express');
const app = express();
const PORT = 8081;
const path = require('path');
const service = require('./service');
const cors = require('cors');

app.use(cors());

app.use((req, res, next) => {
    res.set({
        'Cache-Control': 'no-cache, no-store',
        'Pragma': 'no-cache',
        'Expires': '-1'
    }); 
    next();
});

/**
 * Routes
 */
app.get('/body/:id', (req, res, next) => {
    const directory = path.resolve(__dirname, 'images/bodies');
    const { id } = req.params;

    service.readFile(`${directory}/body-${id}.png`, (err, image) => {
        res.set('Content-type', 'image/png');
        res.end(image);
    });
});

app.get('/eye/:id', (req, res, next) => {
    const directory = path.resolve(__dirname, 'images/eyes');
    const { id } = req.params;

    service.readFile(`${directory}/eye-${id}.png`, (err, image) => {
        res.set('Content-type', 'image/png');
        res.end(image);
    });
});

app.get('/mouth/:id', (req, res, next) => {
    const directory = path.resolve(__dirname, 'images/mouths');
    const { id } = req.params;

    service.readFile(`${directory}/mouth-${id}.png`, (err, image) => {
        res.set('Content-type', 'image/png');
        res.end(image);
    });
});

/**
 * Server Setup
 */
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});