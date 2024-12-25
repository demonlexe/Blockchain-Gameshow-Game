"use client";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import questions from "@/mockdata/triviaQuestions";

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

export default function HostPage() {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  // Get the question and answer for the selected letter
  const getQuestionAndAnswer = (letter: string) => {
    return questions.find((q) => q.answer.charAt(0).toUpperCase() === letter);
  };

  // Handle letter click
  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setShowAnswer(false); // Reset showAnswer state when a new letter is clicked
  };

  const selectedQA =
    selectedLetter && selectedLetter !== ""
      ? getQuestionAndAnswer(selectedLetter)
      : null;

  return (
    <Container>
      {/* Top Button */}
      <Row className="mb-3">
        <Col> </Col>
      </Row>

      {/* Letter Grid */}
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
                cursor: "pointer",
              }}
              onClick={() => handleLetterClick(letter)}
            >
              <strong>{letter}</strong>
            </Col>
          ))}
        </Row>
      ))}

      {/* Display Question and Answer */}
      {selectedQA && (
        <Row className="mt-4">
          <Col>
            <h5>
              <strong>Question:</strong> {selectedQA.question}
            </h5>
            {!showAnswer ? (
              <Button variant="primary" onClick={() => setShowAnswer(true)}>
                Show Answer
              </Button>
            ) : (
              <h5>
                <strong>Answer:</strong> {selectedQA.answer}
              </h5>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
}
