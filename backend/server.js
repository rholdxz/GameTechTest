

// const express = require('express');

// // express app
// const app = express()

// // routes
// app.get('/', (req, res) => {
//     res.json({ mssg: 'Welcome to the Elemental Grid Game App.' })
// })

// // listen to request
// app.listen(process.env.PORT, () => {
//     console.log('listening on port [default]', process.env.PORT);
// })
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const puzzleRoutes = require('./routes/puzzleRoutes');

const app = express()

mongoose.connect('mongodb://localhost:27017/elemental-grid', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api/puzzles', puzzleRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

