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
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    {grid.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: "flex", justifyContent: "center" }}>
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
              width: "60px", // Adjust the size of the hexagon
              height: "60px",
              margin: "3px", // Space between hexagons
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
