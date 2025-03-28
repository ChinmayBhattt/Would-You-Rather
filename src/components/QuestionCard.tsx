import React, { useEffect } from 'react';
import Button from './Button';
import PercentageDisplay from './PercentageDisplay';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  percentages: {
    optionAPercentage: number;
    optionBPercentage: number;
  };
  selectedOption: 'A' | 'B' | null;
  onSelectOption: (option: 'A' | 'B') => void;
  onNextQuestion: () => void;
  isClient?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  percentages,
  selectedOption,
  onSelectOption,
  onNextQuestion,
  isClient = false
}) => {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (selectedOption && isClient) {
      timer = setTimeout(() => {
        onNextQuestion();
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [selectedOption, onNextQuestion, isClient]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto animate-fade-in transform hover:scale-[1.02] transition-all duration-300">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 animate-scale-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
       Pick Your Poison...
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          className={`transform transition-all duration-300 ${
            selectedOption === 'A' ? 'scale-105' : selectedOption === 'B' ? 'scale-95 opacity-50' : ''
          }`}
        >
          <Button
            onClick={() => isClient && !selectedOption && onSelectOption('A')}
            isSelected={selectedOption === 'A'}
            className="h-full w-full min-h-[150px] text-xl"
            disabled={!isClient || selectedOption !== null}
          >
            {question.optionA}
          </Button>
        </div>
        
        <div 
          className={`transform transition-all duration-300 ${
            selectedOption === 'B' ? 'scale-105' : selectedOption === 'A' ? 'scale-95 opacity-50' : ''
          }`}
        >
          <Button
            onClick={() => isClient && !selectedOption && onSelectOption('B')}
            isSelected={selectedOption === 'B'}
            className="h-full w-full min-h-[150px] text-xl"
            disabled={!isClient || selectedOption !== null}
          >
            {question.optionB}
          </Button>
        </div>
      </div>

      {selectedOption && isClient && (
        <div className="mt-12 animate-fade-in">
          <PercentageDisplay
            optionAPercentage={percentages.optionAPercentage}
            optionBPercentage={percentages.optionBPercentage}
          />
          <div className="w-full bg-gray-200 h-2 mt-8 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-full"
              style={{ 
                width: '100%',
                animation: 'countdown 4s linear forwards'
              }}
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4 font-medium">
            Next question in 4 seconds...
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard; 