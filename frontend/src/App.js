import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import Timer from './components/Timer';
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [puzzle, setPuzzle] = useState([]);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    fetch('/api/puzzles/generate')
      .then(response => response.json())
      .then(data => setPuzzle(data));
  }, []);

  const handleTimeUp = () => {
    setTimeUp(true);
  };

  return (
    <div className="app">
      <h1>Elemental Grid</h1>
      <Timer initialTime={300} onTimeUp={handleTimeUp} />
      <Grid puzzle={puzzle} timeUp={timeUp} />
      <Scoreboard />
    </div>
  );
};

export default App;