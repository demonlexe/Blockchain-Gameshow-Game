import React from "react";
import styles from "./styles.module.css";
import Arrow from "../Arrow";
// LetterGrid component with arrows around the grid
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
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "4rem",
    }}
  >
    {/* Arrows around the grid */}
    <Arrow
      color="red"
      direction="up"
      style={{
        position: "absolute",
        top: "-30px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    />
    <Arrow
      color="red"
      direction="down"
      style={{
        position: "absolute",
        bottom: "-30px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    />
    <Arrow
      color="blue"
      direction="left"
      style={{
        position: "absolute",
        top: "50%",
        left: "-30px",
        transform: "translateY(-50%)",
      }}
    />
    <Arrow
      color="blue"
      direction="right"
      style={{
        position: "absolute",
        top: "50%",
        right: "-30px",
        transform: "translateY(-50%)",
      }}
    />

    {/* Grid layout */}
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
