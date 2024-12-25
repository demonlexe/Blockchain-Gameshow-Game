import React from "react";
import { Row, Col } from "react-bootstrap";

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
  <div>
    {grid.map((row, rowIndex) => (
      <Row key={rowIndex} className="mb-2">
        {row.map((letter, colIndex) => (
          <Col
            key={`${rowIndex}-${colIndex}`}
            xs={2}
            className="d-flex justify-content-center align-items-center border"
            style={{
              height: "50px",
              backgroundColor: teamColors[letter] || "#f9f9f9",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleLetterClick(letter)}
          >
            <strong>{letter}</strong>
          </Col>
        ))}
      </Row>
    ))}
  </div>
);

export default LetterGrid;
