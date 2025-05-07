
import React, { createContext, useState, useContext, ReactNode } from "react";
import { QuizQuestion, PeregrinoType, peregrinoProfiles } from "../data/quizData";

interface QuizContextProps {
  currentQuestion: number;
  answers: Record<number, string>;
  setCurrentQuestion: (question: number) => void;
  setAnswer: (questionId: number, optionId: string) => void;
  getResult: () => PeregrinoType;
  isCompleted: boolean;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const setAnswer = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const getResult = (): PeregrinoType => {
    const typeCounts: Record<PeregrinoType, number> = {
      raiz: 0,
      urbano: 0,
      nomade: 0,
      contemplativo: 0,
    };

    // Count the occurrences of each type in the answers
    Object.values(answers).forEach(optionId => {
      const questionNumber = parseInt(optionId.charAt(0));
      const optionLetter = optionId.charAt(1);
      
      switch(optionLetter) {
        case 'a':
          typeCounts.raiz += 1;
          break;
        case 'b':
          typeCounts.urbano += 1;
          break;
        case 'c':
          typeCounts.nomade += 1;
          break;
        case 'd':
          typeCounts.contemplativo += 1;
          break;
        default:
          break;
      }
    });

    // Find the type with the highest count
    let maxCount = 0;
    let resultType: PeregrinoType = 'raiz';

    Object.entries(typeCounts).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        resultType = type as PeregrinoType;
      }
    });

    return resultType;
  };

  const isCompleted = Object.keys(answers).length >= 5;

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        answers,
        setCurrentQuestion,
        setAnswer,
        getResult,
        isCompleted
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
