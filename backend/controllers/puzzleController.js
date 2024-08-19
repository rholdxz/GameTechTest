const generatePuzzle = (req, res) => {
    // Logic to generate a unique puzzle
    const puzzle = generateUniquePuzzle();
    res.json(puzzle);
  };
  
  const submitScore = (req, res) => {
    // Logic to submit and save the user's score
    const { username, score } = req.body;
    const newScore = new Score({ username, score });
    newScore.save();
    res.status(201).json(newScore);
  };
  
  module.exports = { generatePuzzle, submitScore };