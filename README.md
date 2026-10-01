# ReactQuiz

A quiz app about React fundamentals, built with React and TypeScript. Answer seven questions against the clock and see a detailed summary at the end.

## Features

- Seven multiple-choice questions about React
- A 10-second timer for every question, shown as a progress bar
- A question is skipped automatically when the time runs out
- Answer options are shuffled for every question
- Step-by-step feedback after choosing an answer: the answer is first marked as selected, then as correct or wrong
- The quiz moves to the next question automatically
- Summary screen with the share of skipped, correct and incorrect answers
- Review of every question with the answer you gave

## Tech Stack

- React
- TypeScript
- Vite
- Plain CSS

## React Concepts Used

- `useState` with functional updates for storing user answers
- `useEffect` for timers and intervals with cleanup
- `useCallback` to keep handlers stable so the timer effect does not restart on every render
- `useRef` to keep the shuffled order of answers between renders
- The `key` prop to reset a component and its timer for every new question
- Values derived from state, such as the active question index and the quiz completion flag
- Component composition: quiz, question, answers, timer and summary
- Typed props, state and shared types, including union types for answer states

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository with `git clone https://github.com/dianakovtoniuk/react_quiz.git`
2. Go to the project folder with `cd react_quiz`
3. Install dependencies with `npm install`
4. Start the development server with `npm run dev`

The app will be available at http://localhost:5173.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build in the `dist` folder
- `npm run preview` serves the production build locally

## Project Structure

- `public/` static files
- `src/`
  - `assets/` logo and trophy images
  - `components/`
    - `Header.tsx` page header with the logo
    - `Quiz.tsx` quiz state and switching between questions and the summary
    - `Question.tsx` single question with answer feedback logic
    - `Answers.tsx` shuffled list of answer buttons
    - `QuestionTimer.tsx` progress bar and timeout handling
    - `Summary.tsx` final statistics and answer review
  - `App.tsx` root component
  - `questions.ts` quiz questions, where the first answer of each question is the correct one
  - `types.ts` shared types
  - `main.tsx` application entry point
  - `index.css` global styles
- `index.html` HTML template

## Limitations

There is no restart button, so the page has to be reloaded to take the quiz again.
