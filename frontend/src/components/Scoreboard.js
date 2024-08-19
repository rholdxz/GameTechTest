import React, { useState, useEffect } from 'react';

const Scoreboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('/api/puzzles/scores')
      .then(response => response.json())
      .then(data => setScores(data));
  }, []);

  return (
    <div className="scoreboard">
      <h2>Leaderboard</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>{score.username}: {score.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;