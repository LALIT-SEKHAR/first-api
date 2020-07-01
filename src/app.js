const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

// const port = 3000;

router.get('/', (req, res) => {
    res.send(`<h1>Home page</h1>`)
});

router.get('/user', (req, res) => {
    res.json({
        "name":"lalit sekhar behera",
        "age":"21",
        "email":"lalitsekhar1999@gmail.com",
    });
});

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);

// app.listen(port, () => console.log(`http://localhost:${port}/`)
// );