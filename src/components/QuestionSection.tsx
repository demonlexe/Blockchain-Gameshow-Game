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
  <Row style={{ marginTop: "8rem" }}>
    <Col
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {currentQuestion && (
        <>
          <h5>
            <strong>Question:</strong> {currentQuestion.question}
          </h5>
          {!showAnswer ? (
            <Button variant="primary" onClick={handleShowAnswer} size="lg">
              Show Answer
            </Button>
          ) : (
            <>
              <h5>
                <strong>Answer:</strong> {currentQuestion.answer}
              </h5>
              <div style={{ marginTop: "20px" }}>
                <Button
                  variant="danger"
                  className="me-4"
                  size="lg"
                  onClick={() => handleTeamSelect("Red")}
                >
                  Red Team
                </Button>
                <Button
                  variant="primary"
                  className="me-4"
                  size="lg"
                  onClick={() => handleTeamSelect("Blue")}
                >
                  Blue Team
                </Button>
                <Button
                  variant="warning"
                  size="lg"
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
              </div>
            </>
          )}
        </>
      )}
    </Col>
  </Row>
);

export default QuestionSection;
