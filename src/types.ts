export type Question = {
  id: string;
  text: string;
  answers: string[];
};

export type UserAnswer = string | null;

export type AnswerState = '' | 'answered' | 'correct' | 'wrong';