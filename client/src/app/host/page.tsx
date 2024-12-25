"use client";

import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import questions from "@/mockdata/triviaQuestions";

// Create a map of questions and answers for easy lookup
const createQuestionMap = () => {
  const questionMap: Record<string, { question: string; answer: string }[]> =
    {};
  questions.forEach((q) => {
    const letter = q.answer.charAt(0).toUpperCase();
    if (!questionMap[letter]) {
      questionMap[letter] = [];
    }
    questionMap[letter].push({ question: q.question, answer: q.answer });
  });
  return questionMap;
};

export default function HostPage() {
  const [grid, setGrid] = useState<string[][]>([]);
  const [selectedLetter, setSelectedLetter] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [teamColors, setTeamColors] = useState<Record<string, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState<{
    question: string;
    answer: string;
  } | null>(null);
  const [availableQuestions, setAvailableQuestions] = useState<
    { question: string; answer: string }[]
  >([]);
  const [newQuestionDisabled, setNewQuestionDisabled] =
    useState<boolean>(false);

  // Create question map
  const questionMap = useMemo(() => createQuestionMap(), []);

  useEffect(() => {
    // Generate a 5x5 grid of unique letters
    const generateGrid = () => {
      const letters = Object.keys(questionMap);
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
    setGrid(generateGrid());
  }, [questionMap]);

  // Handle letter click
  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setShowAnswer(false); // Reset answer visibility when a new letter is clicked
    setAvailableQuestions(questionMap[letter] || []);
    setNewQuestionDisabled(false); // Enable "New Question" button
    setCurrentQuestion(questionMap[letter]?.[0] || null); // Set the first question for the selected letter
  };

  // Handle team selection
  const handleTeamSelect = (team: "Red" | "Blue") => {
    setTeamColors((prev) => ({
      ...prev,
      [selectedLetter]: team === "Red" ? "#ffcccc" : "#cce5ff", // Light red or blue
    }));
    setSelectedLetter(""); // Deselect the current letter
    setShowAnswer(false); // Reset answer visibility
  };

  // Handle new question selection
  const handleNewQuestion = () => {
    const randomNewQuestion =
      availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    if (availableQuestions.length <= 1) {
      setNewQuestionDisabled(true);
      return;
    }

    setCurrentQuestion(randomNewQuestion);
    setAvailableQuestions(questionMap[selectedLetter] || []);
    setShowAnswer(false); // Hide answer when selecting a new question
  };

  return (
    <Container>
      {/* Top Button */}
      <Row className="mb-3">
        <Col>
          <Button>Hey!</Button>
        </Col>
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

      {/* Display Question and Answer */}
      {currentQuestion && (
        <Row className="mt-4">
          <Col>
            <h5>
              <strong>Question:</strong> {currentQuestion.question}
            </h5>
            {!showAnswer ? (
              <Button variant="primary" onClick={() => setShowAnswer(true)}>
                Show Answer
              </Button>
            ) : (
              <>
                <h5>
                  <strong>Answer:</strong> {currentQuestion.answer}
                </h5>
                <Button
                  variant="danger"
                  className="me-2"
                  onClick={() => handleTeamSelect("Red")}
                >
                  Red Team
                </Button>
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={() => handleTeamSelect("Blue")}
                >
                  Blue Team
                </Button>
                <Button
                  variant="warning"
                  onClick={handleNewQuestion}
                  disabled={newQuestionDisabled}
                >
                  New Question
                </Button>
                {newQuestionDisabled && (
                  <p style={{ color: "red" }}>
                    No other questions available with this letter.
                  </p>
                )}
              </>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
}
