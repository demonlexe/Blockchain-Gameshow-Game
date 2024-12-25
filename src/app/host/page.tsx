"use client";

import { useState, useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import questions from "@/mockdata/triviaQuestions";
import LetterGrid from "@/components/LetterGrid";
import QuestionSection from "@/components/QuestionSection";

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

// Function to check if a team has won by looking for a connected path
const checkForWin = (
  grid: string[][],
  teamColors: Record<string, string>,
  teamColor: string
): boolean => {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  // Define directions for odd and even rows
  const baseDirections = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  const evenRowDirections = [
    ...baseDirections,
    [-1, 1], // top-right
    [1, 1], // bottom-right
  ];

  const oddRowDirections = [
    ...baseDirections,
    [-1, -1], // top-left,
    [1, -1], // bottom-left
  ];

  const dfs = (r: number, c: number): boolean => {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return false;
    if (visited[r][c] || teamColors[grid[r][c]] !== teamColor) return false;

    visited[r][c] = true;

    // Check if we reach the opposite side of the grid for a win condition
    if (
      (teamColor === "#ffcccc" && r === rows - 1) || // Red reaches bottom row
      (teamColor === "#cce5ff" && c === cols - 1) // Blue reaches right column
    ) {
      return true;
    }

    const directions = r % 2 === 0 ? evenRowDirections : oddRowDirections;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (dfs(nr, nc)) {
        return true;
      }
    }

    return false;
  };

  // Check for a starting point for DFS on each side
  if (teamColor === "#ffcccc") {
    // Red team: Start DFS from the top row
    for (let c = 0; c < cols; c++) {
      if (teamColors[grid[0][c]] === teamColor && dfs(0, c)) {
        return true;
      }
    }
  } else if (teamColor === "#cce5ff") {
    // Blue team: Start DFS from the leftmost column
    for (let r = 0; r < rows; r++) {
      if (teamColors[grid[r][0]] === teamColor && dfs(r, 0)) {
        return true;
      }
    }
  }

  return false;
};

export default function HostPage() {
  const [grid, setGrid] = useState<string[][]>([]);
  const [selectedLetter, setSelectedLetter] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [teamColors, setTeamColors] = useState<Record<string, string>>({});
  const [lastUpdatedTeam, setLastUpdatedTeam] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<{
    question: string;
    answer: string;
  } | null>(null);
  const [availableQuestions, setAvailableQuestions] = useState<
    { question: string; answer: string }[]
  >([]);
  const [newQuestionDisabled, setNewQuestionDisabled] =
    useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);

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
    const teamColor = team === "Red" ? "#ffcccc" : "#cce5ff";

    // Update teamColors and track the last updated team
    setTeamColors((prev) => ({
      ...prev,
      [selectedLetter]: teamColor,
    }));
    setLastUpdatedTeam(teamColor); // Track the last team that made a move
    setSelectedLetter(""); // Deselect the current letter
    setShowAnswer(false); // Reset answer visibility
    setCurrentQuestion(null); // Reset current question
  };

  // Check for a win after teamColors updates
  useEffect(() => {
    if (lastUpdatedTeam) {
      if (checkForWin(grid, teamColors, lastUpdatedTeam)) {
        setWinner(
          lastUpdatedTeam === "#ffcccc" ? "Red Team Wins!" : "Blue Team Wins!"
        );
      }
    }
  }, [teamColors, grid, lastUpdatedTeam]); // Trigger whenever teamColors, grid, or lastUpdatedTeam changes

  // Handle new question selection
  const handleNewQuestion = () => {
    if (!availableQuestions.length) return; // No available questions

    const randomNewQuestion =
      availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    // Check if the selected question is the same as the current one
    if (
      currentQuestion &&
      randomNewQuestion.question === currentQuestion.question
    ) {
      // If it's the same, recursively call handleNewQuestion until we get a different question
      handleNewQuestion();
      return;
    }

    setCurrentQuestion(randomNewQuestion);
    setAvailableQuestions(questionMap[selectedLetter] || []);
    setShowAnswer(false); // Hide answer when selecting a new question

    if (availableQuestions.length <= 1) {
      setNewQuestionDisabled(true);
    }
  };

  const currentQuestionAlreadyAnswered =
    teamColors[selectedLetter] !== undefined;
  return (
    <Container>
      <LetterGrid
        grid={grid}
        teamColors={teamColors}
        handleLetterClick={handleLetterClick}
      />

      {/* Display Question and Answer */}
      {!winner && !currentQuestionAlreadyAnswered && (
        <QuestionSection
          currentQuestion={currentQuestion}
          showAnswer={showAnswer}
          handleShowAnswer={() => setShowAnswer(true)}
          handleNewQuestion={handleNewQuestion}
          newQuestionDisabled={newQuestionDisabled}
          handleTeamSelect={handleTeamSelect}
        />
      )}

      {/* Display Winner */}
      {winner && (
        <div
          style={{
            textAlign: "center",
            marginTop: "6rem",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {winner}
        </div>
      )}
    </Container>
  );
}
