const express = require('express');
const { generatePuzzle, submitScore } = require('../controllers/puzzleController');

const router = express.Router();

router.get('/generate', generatePuzzle);
router.post('/submit', submitScore);

module.exports = router;