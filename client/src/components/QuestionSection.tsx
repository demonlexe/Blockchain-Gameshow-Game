import React from "react";
import { Button, Col, Row } from "react-bootstrap";

interface QuestionSectionProps {
  currentQuestion: { question: string; answer: string } | null;
  showAnswer: boolean;
  handleShowAnswer: () => void;
  handleNewQuestion: () => void;
  newQuestionDisabled: boolean;
  handleTeamSelect: (team: "Red" | "Blue") => void;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({
  currentQuestion,
  showAnswer,
  handleShowAnswer,
  handleNewQuestion,
  newQuestionDisabled,
  handleTeamSelect,
}) => (
  <Row className="mt-4">
    <Col>
      {currentQuestion && (
        <>
          <h5>
            <strong>Question:</strong> {currentQuestion.question}
          </h5>
          {!showAnswer ? (
            <Button variant="primary" onClick={handleShowAnswer}>
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
        </>
      )}
    </Col>
  </Row>
);

export default QuestionSection;
