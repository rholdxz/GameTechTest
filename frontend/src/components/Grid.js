import React, { useState } from 'react';

const Grid = ({ puzzle, timeUp }) => {
  const [grid, setGrid] = useState(puzzle);

  const handleCellClick = (row, col) => {
    if (timeUp) return;
    // Logic for handling cell click and placing elements
  };

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="cell"
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;