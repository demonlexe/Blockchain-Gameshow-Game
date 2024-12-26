import React, { useEffect, useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";

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
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const handleCheckAnswer = () => {
    if (!currentQuestion) return;
    // check for substring match at start
    const isCorrect = currentQuestion.answer
      .trim()
      .toLowerCase()
      .search(userAnswer.trim().toLowerCase());
    setIsAnswerCorrect(
      isCorrect == 0 &&
        (currentQuestion.answer.trim().length > 1
          ? userAnswer.trim().length > 1
          : true)
    );

    setTimeout(() => {
      setIsAnswerCorrect(null);
    }, 3000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCheckAnswer();
    }
  };

  useEffect(() => {
    setUserAnswer("");
    setIsAnswerCorrect(null);
  }, [currentQuestion]);

  return (
    <Row
      style={{
        marginTop: "8rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "50%",
          position: "relative",
        }}
      >
        {currentQuestion && (
          <>
            <h5>
              <strong>Question:</strong> {currentQuestion.question}
            </h5>

            {!showAnswer && !isAnswerCorrect ? (
              <div className="d-flex flex-column align-items-center mt-5">
                {isAnswerCorrect !== null && (
                  <p
                    style={{
                      color: "red",
                      position: "absolute",
                      top: "-2rem",
                    }}
                  >
                    {!isAnswerCorrect &&
                      "Incorrect. Try again or show the answer."}
                  </p>
                )}

                <div
                  className="d-flex flex-row gap-3 align-items-center
                "
                >
                  <Form.Group controlId="userAnswer">
                    <Form.Control
                      type="text"
                      placeholder="Type your answer here"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      onKeyDown={handleKeyDown} // Added keydown event
                      autoComplete="off" // Prevents browser from saving the input
                    />
                  </Form.Group>
                  <Button
                    size="lg"
                    variant="success"
                    onClick={handleCheckAnswer}
                  >
                    Check Answer
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleShowAnswer}
                    size="lg"
                  >
                    Show Answer
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {isAnswerCorrect && (
                  <p
                    style={{
                      color: "green",
                      position: "absolute",
                      top: "-2rem",
                    }}
                  >
                    Correct!
                  </p>
                )}
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
};

export default QuestionSection;
