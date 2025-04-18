import React from "react";
import styles from "./styles.module.css";
import Arrow from "../Arrow";
// LetterGrid component with arrows around the grid
interface LetterGridProps {
  grid: string[][];
  teamColors: Record<string, string>;
  handleLetterClick: (letter: string) => void;
  selectedLetter: string;
}

const LetterGrid: React.FC<LetterGridProps> = ({
  grid,
  teamColors,
  handleLetterClick,
  selectedLetter,
}) => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "8rem",
        marginRight: "50px",
        maxWidth: "50%",
        alignSelf: "center",
      }}
    >
      {/* Arrows around the grid */}
      <Arrow
        color="red"
        direction="up"
        style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <Arrow
        color="red"
        direction="down"
        style={{
          position: "absolute",
          bottom: "-80px",
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
          left: "-170px",
          transform: "translateY(-50%)",
        }}
      />
      <Arrow
        color="blue"
        direction="right"
        style={{
          position: "absolute",
          top: "50%",
          right: "-200px",
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
                backgroundColor: teamColors[letter]
                  ? teamColors[letter]
                  : selectedLetter === letter
                  ? "#dedede"
                  : "#f9f9f9",
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
  </div>
);

export default LetterGrid;
