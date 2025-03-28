import { questions, Question } from '../data/questions';

export function getRandomQuestion(): Question {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

export function generatePercentages(): { optionAPercentage: number; optionBPercentage: number } {
  // Generate a random percentage between 30 and 70 for option A
  const optionAPercentage = Math.floor(Math.random() * 41) + 30;
  return {
    optionAPercentage,
    optionBPercentage: 100 - optionAPercentage
  };
} 