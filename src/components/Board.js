import React from "react";
import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3,1fr)",
};

/**
 * Functional component for rendering the game board.
 *
 * @param {Array} squares - Array of square values for the board
 * @param {function} onClick - Function to handle square click
 * @returns {JSX.Element} - Rendered game board
 */
const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
