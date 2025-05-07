
import React from "react";
import { cn } from "@/lib/utils";

interface QuizOptionProps {
  id: string;
  text: string;
  emoji: string;
  isSelected: boolean;
  onClick: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  id,
  text,
  emoji,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "quiz-option",
        isSelected && "selected"
      )}
      onClick={onClick}
      data-testid={`option-${id}`}
    >
      <span className="text-2xl mr-2">{emoji}</span>
      <span>{text}</span>
      {isSelected && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-peregrinos-accent"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default QuizOption;
