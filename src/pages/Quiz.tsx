
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/context/QuizContext';
import { questions } from '@/data/quizData';
import QuizOption from '@/components/QuizOption';
import ProgressBar from '@/components/ProgressBar';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const { currentQuestion, answers, setCurrentQuestion, setAnswer, isCompleted } = useQuiz();
  
  const currentQuestionData = questions.find(q => q.id === currentQuestion);
  
  const handleOptionClick = (optionId: string) => {
    if (!currentQuestionData) return;
    
    setAnswer(currentQuestionData.id, optionId);
    
    setTimeout(() => {
      if (currentQuestion < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate('/resultado');
      }
    }, 500);
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  useEffect(() => {
    if (isCompleted) {
      navigate('/resultado');
    }
  }, [isCompleted, navigate]);
  
  if (!currentQuestionData) return null;
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="quiz-container w-full">
        <ProgressBar 
          currentStep={currentQuestion} 
          totalSteps={questions.length}
        />
        
        <div className="question-container">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            {currentQuestionData.question}
          </h2>
          
          <div className="space-y-3 mb-8">
            {currentQuestionData.options.map((option) => (
              <QuizOption
                key={option.id}
                id={option.id}
                text={option.text}
                emoji={option.emoji}
                isSelected={answers[currentQuestionData.id] === option.id}
                onClick={() => handleOptionClick(option.id)}
              />
            ))}
          </div>
          
          {currentQuestion > 1 && (
            <div className="flex justify-start">
              <Button
                variant="ghost"
                onClick={handlePrevQuestion}
                className="text-peregrinos-text hover:text-green-700"
                >
                Voltar para pergunta anterior
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
