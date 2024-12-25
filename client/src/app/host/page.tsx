import { Container, Row, Col, Button } from "react-bootstrap";
import questions from "@/mockdata/triviaQuestions";

export default function HostPage() {
  // Extract unique first letters from answers
  const getUniqueFirstLetters = () => {
    const letters = new Set(
      questions
        .map((q) => q.answer.charAt(0).toUpperCase()) // Get the first letter (uppercase)
        .filter((letter) => /^[A-Z]$/.test(letter)) // Ensure it's a valid uppercase letter
    );
    return Array.from(letters);
  };

  // Generate a 5x5 grid of unique letters
  const generateGrid = () => {
    const letters = getUniqueFirstLetters();
    if (letters.length < 25) {
      console.warn("Not enough unique letters to fill a 5x5 grid!");
      return Array.from({ length: 5 }, () => Array(5).fill("")); // Fallback empty grid
    }

    // Shuffle and select the first 25 letters
    const shuffled = letters.sort(() => Math.random() - 0.5).slice(0, 25);

    // Arrange into a 5x5 grid
    return Array.from({ length: 5 }, (_, rowIndex) =>
      shuffled.slice(rowIndex * 5, rowIndex * 5 + 5)
    );
  };

  const grid = generateGrid();

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Button>Hey!</Button>
        </Col>
      </Row>
      {/* Grid Display */}
      {grid.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-2">
          {row.map((letter, colIndex) => (
            <Col
              key={`${rowIndex}-${colIndex}`}
              xs={2} // 5 columns per row (12 / 5 ≈ 2)
              className="d-flex justify-content-center align-items-center border"
              style={{
                height: "50px",
                backgroundColor: "#f9f9f9",
                textAlign: "center",
              }}
            >
              <strong>{letter}</strong>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}
