import { useState } from 'react';

export const useQuiz = (questionsData) => {
  const [gameState, setGameState] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ A: 0, B: 0 });
  const [userChoices, setUserChoices] = useState([]);

  const handleAnswer = (type, text) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    const choice = {
      question: questionsData[currentQuestion].question,
      answerType: type,
      answerText: text
    };
    setUserChoices([...userChoices, choice]);

    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState('result');
    }
  };

  const resetQuiz = () => {
    setScores({ A: 0, B: 0 });
    setUserChoices([]);
    setCurrentQuestion(0);
    setGameState('start');
  };

  return {
    gameState,
    setGameState,
    currentQuestion,
    scores,
    userChoices,
    handleAnswer,
    resetQuiz
  };
};
