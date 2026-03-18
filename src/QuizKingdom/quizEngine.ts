/**
 * QuizEngine: Core logic for managing quiz state, navigation, and responses
 * Similar to AdventureEngine pattern in adventure.ts
 */

import {
  QuizQuestion,
  QuizState,
  StudentResponse,
  QuizSession,
  ValidationResult,
} from "./quizDefinitions.js";
import { quizQuestions } from "./quizQuestions.js";

export class QuizEngine {
  private session: QuizSession | null = null;
  private state: QuizState = QuizState.NotStarted;
  private questions: QuizQuestion[] = [];

  constructor() {
    // Initialize with empty questions array
    // Teacher will populate this with actual TypeScript quiz questions
    this.initializeQuestions();
  }

  /**
   * Initialize quiz questions
   * TypeScript Learning Quiz - Variables, Types, Functions, Classes & Interfaces
   */
  private initializeQuestions(): void {
    this.questions = [...quizQuestions];
  }

  /**
   * Start a new quiz session with student name
   */
  public startQuiz(studentName: string): ValidationResult {
    const validation = this.validateStudentName(studentName);
    if (!validation.isValid) {
      return validation;
    }

    if (this.questions.length === 0) {
      return {
        isValid: false,
        message: "No questions available. Please add questions to the quiz.",
      };
    }

    this.session = {
      studentName: studentName.trim(),
      responses: [],
      startTime: new Date(),
      currentQuestionIndex: 0,
    };

    this.state = QuizState.InProgress;

    return { isValid: true };
  }

  /**
   * Validate student name input
   */
  private validateStudentName(name: string): ValidationResult {
    const trimmedName = name.trim();

    if (trimmedName.length === 0) {
      return {
        isValid: false,
        message: "Please enter your name to start the quiz.",
      };
    }

    if (trimmedName.length < 2) {
      return {
        isValid: false,
        message: "Name must be at least 2 characters long.",
      };
    }

    return { isValid: true };
  }

  /**
   * Get the current question
   */
  public getCurrentQuestion(): QuizQuestion | null {
    if (!this.session || this.state !== QuizState.InProgress) {
      return null;
    }

    const index = this.session.currentQuestionIndex;
    return this.questions[index] || null;
  }

  /**
   * Get current question number (1-indexed for display)
   */
  public getCurrentQuestionNumber(): number {
    return this.session ? this.session.currentQuestionIndex + 1 : 0;
  }

  /**
   * Get total number of questions
   */
  public getTotalQuestions(): number {
    return this.questions.length;
  }

  /**
   * Submit an answer for the current question
   */
  public submitAnswer(answer: string): ValidationResult {
    if (!this.session || this.state !== QuizState.InProgress) {
      return {
        isValid: false,
        message: "No active quiz session.",
      };
    }

    const currentQuestion = this.getCurrentQuestion();
    if (!currentQuestion) {
      return {
        isValid: false,
        message: "No current question to answer.",
      };
    }

    // Validate answer is not empty
    const trimmedAnswer = answer.trim();
    if (trimmedAnswer.length === 0) {
      return {
        isValid: false,
        message: "Please provide an answer before continuing.",
      };
    }

    // Create response object
    const response: StudentResponse = {
      questionIndex: this.session.currentQuestionIndex,
      questionText: currentQuestion.question,
      answer: trimmedAnswer,
      timestamp: new Date(),
    };

    // Check if response for this question already exists (updating answer)
    const existingIndex = this.session.responses.findIndex(
      (r) => r.questionIndex === this.session!.currentQuestionIndex,
    );

    if (existingIndex >= 0) {
      // Update existing response
      this.session.responses[existingIndex] = response;
    } else {
      // Add new response
      this.session.responses.push(response);
    }

    return { isValid: true };
  }

  /**
   * Move to the next question
   */
  public nextQuestion(): boolean {
    if (!this.session || this.state !== QuizState.InProgress) {
      return false;
    }

    if (this.session.currentQuestionIndex < this.questions.length - 1) {
      this.session.currentQuestionIndex++;
      return true;
    }

    return false; // Already at last question
  }

  /**
   * Move to the previous question
   */
  public previousQuestion(): boolean {
    if (!this.session || this.state !== QuizState.InProgress) {
      return false;
    }

    if (this.session.currentQuestionIndex > 0) {
      this.session.currentQuestionIndex--;
      return true;
    }

    return false; // Already at first question
  }

  /**
   * Check if we can navigate to the next question
   */
  public canGoNext(): boolean {
    if (!this.session) return false;
    return this.session.currentQuestionIndex < this.questions.length - 1;
  }

  /**
   * Check if we can navigate to the previous question
   */
  public canGoPrevious(): boolean {
    if (!this.session) return false;
    return this.session.currentQuestionIndex > 0;
  }

  /**
   * Check if current question has been answered
   */
  public isCurrentQuestionAnswered(): boolean {
    if (!this.session) return false;

    return this.session.responses.some(
      (r) => r.questionIndex === this.session!.currentQuestionIndex,
    );
  }

  /**
   * Get the answer for the current question (if it exists)
   */
  public getCurrentAnswer(): string | null {
    if (!this.session) return null;

    const response = this.session.responses.find(
      (r) => r.questionIndex === this.session!.currentQuestionIndex,
    );

    return response ? response.answer : null;
  }

  /**
   * Check if all questions have been answered
   */
  public areAllQuestionsAnswered(): boolean {
    if (!this.session) return false;
    return this.session.responses.length === this.questions.length;
  }

  /**
   * Check if the quiz is on the last question
   */
  public isLastQuestion(): boolean {
    if (!this.session) return false;
    return this.session.currentQuestionIndex === this.questions.length - 1;
  }

  /**
   * Complete the quiz
   */
  public completeQuiz(): ValidationResult {
    if (!this.session || this.state !== QuizState.InProgress) {
      return {
        isValid: false,
        message: "No active quiz session.",
      };
    }

    if (!this.areAllQuestionsAnswered()) {
      return {
        isValid: false,
        message: "Please answer all questions before submitting the quiz.",
      };
    }

    this.session.endTime = new Date();
    this.state = QuizState.Completed;

    return { isValid: true };
  }

  /**
   * Get the completed quiz session
   */
  public getSession(): QuizSession | null {
    return this.session;
  }

  /**
   * Get current quiz state
   */
  public getState(): QuizState {
    return this.state;
  }

  /**
   * Reset the quiz (for starting over)
   */
  public reset(): void {
    this.session = null;
    this.state = QuizState.NotStarted;
  }
}
