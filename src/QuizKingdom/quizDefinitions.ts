/**
 * Type definitions for the QuizKingdom quiz system
 * Following TypeLand patterns: enums for states, interfaces for data structures
 */

/**
 * Enum for different types of quiz questions
 */
export enum QuestionType {
  MultipleChoice = "MULTIPLE_CHOICE",
  TrueFalse = "TRUE_FALSE",
  TextInput = "TEXT_INPUT",
  CodeCompletion = "CODE_COMPLETION",
}

/**
 * Enum for quiz session states
 */
export enum QuizState {
  NotStarted = "NOT_STARTED",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
}

/**
 * Interface for a single quiz question
 */
export interface QuizQuestion {
  type: QuestionType;
  question: string;
  options?: string[]; // For MultipleChoice and TrueFalse
  correctAnswer?: string; // Optional: for self-grading later
  hint?: string; // Optional: helpful hint for students
  starterCode?: string; // Optional: prefilled code template for code completion
  exampleCode?: string; // Optional: code example to display under question text
}

/**
 * Interface for a student's response to a question
 */
export interface StudentResponse {
  questionIndex: number;
  questionText: string;
  answer: string;
  timestamp: Date;
}

/**
 * Interface for a complete quiz session
 */
export interface QuizSession {
  studentName: string;
  responses: StudentResponse[];
  startTime: Date;
  endTime?: Date;
  currentQuestionIndex: number;
}

/**
 * Type alias for validation result
 */
export type ValidationResult = {
  isValid: boolean;
  message?: string;
};
