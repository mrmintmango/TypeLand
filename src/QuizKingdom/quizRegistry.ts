/**
 * QuizRegistry: Catalog of all available quizzes in the QuizKingdom
 * Add new quizzes here as they are created
 */

import { QuizQuestion } from "./quizDefinitions.js";
import { quizQuestions } from "./firstQuizQuestions.js";
import { beginnerQuiz1Questions } from "./beginnerQuiz1Questions.js";
import { beginnerQuiz2Questions } from "./beginnerQuiz2Questions.js";
import { beginnerFinalQuizQuestions } from "./beginnerFinalQuizQuestions.js";
import { logPopQuiz1Questions } from "./logPopQuiz1.js";

/**
 * Metadata and questions for a single quiz entry
 */
export interface QuizEntry {
  id: string;
  name: string;
  description: string;
  isActive: boolean; // The current live quiz students should take
  questions: QuizQuestion[];
}

/**
 * All available quizzes, from oldest to most recent.
 * Set isActive: true on the quiz that is currently live.
 */
export const quizRegistry: QuizEntry[] = [
  {
    id: "first-quiz",
    name: "First Quiz",
    description: "TypeScript fundamentals: variables, types, and basic syntax.",
    isActive: false,
    questions: quizQuestions,
  },
  {
    id: "beginner-quiz-1",
    name: "Beginner Quiz 1",
    description: "Variables, primitive types, and type annotations.",
    isActive: false,
    questions: beginnerQuiz1Questions,
  },
  {
    id: "beginner-quiz-2",
    name: "Beginner Quiz 2",
    description: "Objects, interfaces, and optional properties.",
    isActive: false,
    questions: beginnerQuiz2Questions,
  },
  {
    id: "beginner-final",
    name: "Beginner Final Quiz",
    description:
      "Comprehensive review of the full beginner TypeScript course.",
    isActive: false,
    questions: beginnerFinalQuizQuestions,
  },
  {
    id: "log-pop-quiz-1",
    name: "Learning Log Pop Quiz",
    description:
      "MVC, GUI state, JSON, APIs, error handling, and array methods — aligned to recent learning logs.",
    isActive: true,
    questions: logPopQuiz1Questions,
  },
];
