import { useRef } from 'react';

import type { AnswerState } from '../types';

type AnswersProps = {
  answers: string[];
  selectedAnswer: string;
  answerState: AnswerState;
  onSelect: (answer: string) => void;
};

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}: AnswersProps) {
  const shuffledAnswers = useRef<string[] | undefined>(undefined);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = '';

        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}