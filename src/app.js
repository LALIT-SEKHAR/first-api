const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

// const port = 3000;

app.use('/static', express.static('public'));

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

app.use('/app', router);
//.netlify/functions/app

module.exports.handler = serverless(app);

// app.listen(port, () => console.log(`http://localhost:${port}/`)
// );


//https://pensive-neumann-14a804.netlify.app/.netlify/functions/app/user
//pensive-neumann-14a804