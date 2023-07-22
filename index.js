const express = require('express');
const rateLimit = require("express-rate-limit");
const app = express();
const indexRoute = require('./routes');

const port= 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.use(
    rateLimit({
        windowMs: 12 * 60 * 60 * 1000, // 12 hour duration in milliseconds
        max: 5,
        message: 'You exeeded 100 requests in 12 hour limit!',
        standardHeaders: true
    })
)

app.post('/posts', indexRoute)

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`)
})

