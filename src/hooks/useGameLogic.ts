import { useState, useCallback } from 'react';
import { getRandomQuestion, generatePercentages } from '../utils/questionGenerator';
import { Question } from '../data/questions';

export function useGameLogic() {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(getRandomQuestion());
  const [percentages, setPercentages] = useState(generatePercentages());
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);

  const nextQuestion = useCallback(() => {
    setCurrentQuestion(getRandomQuestion());
    setPercentages(generatePercentages());
    setSelectedOption(null);
  }, []);

  const handleOptionSelect = useCallback((option: 'A' | 'B') => {
    setSelectedOption(option);
  }, []);

  return {
    currentQuestion,
    percentages,
    selectedOption,
    nextQuestion,
    handleOptionSelect
  };
} 