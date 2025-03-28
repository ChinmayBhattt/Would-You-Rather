import { useGameLogic } from '../hooks/useGameLogic';
import QuestionCard from '../components/QuestionCard';
import Button from '../components/Button';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Ad from '../components/Ad';

export default function Home() {
  const {
    currentQuestion,
    percentages,
    selectedOption,
    nextQuestion,
    handleOptionSelect,
    isClient,
    isLoading
  } = useGameLogic();

  return (
    <>
      <Head>
        <title>Would You Rather?</title>
        <meta name="description" content="A fun would you rather game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
            Would You Rather?
          </h1>
          
          <QuestionCard
            question={currentQuestion}
            percentages={percentages}
            selectedOption={selectedOption}
            onSelectOption={handleOptionSelect}
            onNextQuestion={nextQuestion}
            isClient={isClient}
            isLoading={isLoading}
          />

          <div className="mt-8">
            <Ad slot="your-ad-slot-id" format="auto" />
          </div>

          <div className="flex justify-center mt-8">
            <Button
              label="Next Question"
              onClick={nextQuestion}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>
    </>
  );
} 