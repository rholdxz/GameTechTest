require('dotenv').config()

const express = require('express');

// express app
const app = express()

// routes
app.get('/', (req, res) => {
    res.json({ mssg: 'Welcome to the Elemental Grid Game App.' })
})

// listen to request
app.listen(process.env.PORT, () => {
    console.log('listening on port [default]', process.env.PORT);
})

