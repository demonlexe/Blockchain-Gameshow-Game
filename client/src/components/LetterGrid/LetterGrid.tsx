import React from "react";
import styles from "./styles.module.css";

interface LetterGridProps {
  grid: string[][];
  teamColors: Record<string, string>;
  handleLetterClick: (letter: string) => void;
}

const LetterGrid: React.FC<LetterGridProps> = ({
  grid,
  teamColors,
  handleLetterClick,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "4rem",
    }}
  >
    {grid.map((row, rowIndex) => (
      <div
        key={rowIndex}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-20px", // Reduce vertical gap
          marginLeft: rowIndex % 2 === 0 ? "80px" : "0px", // Stagger rows
        }}
      >
        {row.map((letter, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={styles.hexagon}
            style={{
              backgroundColor: teamColors[letter] || "#f9f9f9",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80px",
              height: "80px",
              margin: "0px",
            }}
            onClick={() => handleLetterClick(letter)}
          >
            <strong>{letter}</strong>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default LetterGrid;
