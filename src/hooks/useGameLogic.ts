import { useState, useCallback, useEffect } from 'react';
import { getRandomQuestion, generatePercentages } from '../utils/questionGenerator';
import { questions } from '../data/questions';

export function useGameLogic() {
  // Always start with the first question for consistent server/client rendering
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [percentages, setPercentages] = useState({ optionAPercentage: 50, optionBPercentage: 50 });
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextQuestion = useCallback(() => {
    if (isClient) {
      setCurrentQuestion(getRandomQuestion());
      setPercentages(generatePercentages());
      setSelectedOption(null);
    }
  }, [isClient]);

  const handleOptionSelect = useCallback((option: 'A' | 'B') => {
    if (isClient) {
      setSelectedOption(option);
    }
  }, [isClient]);

  return {
    currentQuestion,
    percentages,
    selectedOption,
    nextQuestion,
    handleOptionSelect,
    isClient
  };
} 