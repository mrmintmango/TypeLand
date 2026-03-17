/**
 * QuizEngine: Core logic for managing quiz state, navigation, and responses
 * Similar to AdventureEngine pattern in adventure.ts
 */

import {
  QuizQuestion,
  QuestionType,
  QuizState,
  StudentResponse,
  QuizSession,
  ValidationResult,
} from "./quizDefinitions.js";

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
    this.questions = [
      // Question 1 - Variables and Primitive Types (1 point)
      {
        type: QuestionType.MultipleChoice,
        question:
          "Which declaration allows reassignment but not redeclaration in the same scope?",
        options: ["var", "let", "const", "type"],
      },

      // Question 2 - Variables and Primitive Types (2 points)
      {
        type: QuestionType.TextInput,
        question:
          "List the TypeScript primitive types that are distinct from JavaScript runtime types and briefly state one purpose of TypeScript primitives.",
        hint: "Think about types like 'any', 'unknown', 'never', etc.",
      },

      // Question 3 - Variables and Primitive Types (3 points)
      {
        type: QuestionType.CodeCompletion,
        question:
          "Fill in types so the code compiles without 'any' and noImplicitAny errors:\n\nlet id = 42;\nlet name = \"Widget\";\nlet active = true;\n\nfunction format(item) {\n  return `${item.id}: ${item.name} (${item.active})`;\n}\n\nProvide the corrected code.",
        hint: "Add type annotations to the function parameter",
      },

      // Question 4 - Variables and Primitive Types (1 point)
      {
        type: QuestionType.MultipleChoice,
        question:
          "What is the result type of 'typeof null' at runtime in JavaScript and how does TypeScript treat null by default under --strictNullChecks?",
        options: [
          '"object" and null is allowed only if type includes null',
          '"null" and null is allowed in all types',
          '"object" and null is allowed in all types',
          '"null" and null is never allowed',
        ],
      },

      // Question 5 - Type Aliases and Unions (1 point)
      {
        type: QuestionType.MultipleChoice,
        question:
          "Which syntax defines a type alias for a union of string literals?",
        options: [
          "type Size = 'S' | 'M' | 'L'",
          "interface Size = 'S' | 'M' | 'L'",
          "enum Size = 'S' | 'M' | 'L'",
          "const Size = 'S' | 'M' | 'L'",
        ],
      },

      // Question 6 - Type Aliases and Unions (2 points)
      {
        type: QuestionType.TextInput,
        question:
          "Explain the difference between a type alias and an interface in TypeScript in one sentence.",
        hint: "Think about extensibility and how they can be used",
      },

      // Question 7 - Type Aliases and Unions (3 points)
      {
        type: QuestionType.CodeCompletion,
        question:
          "Create a type alias 'ID' that accepts either a string or a number and write a function 'getById' signature that accepts id: ID and returns Promise<object | null>.",
        hint: "Use a union type for ID and async function or Promise return type",
      },

      // Question 8 - Functions and Generics (1 point)
      {
        type: QuestionType.MultipleChoice,
        question:
          "Which function signature correctly types a function that takes a number and returns a number?",
        options: [
          "function f(x: number): number {}",
          "function f(x): number {}",
          "function f(x: number) { return x }",
          "const f: (x) => number = x => x",
        ],
      },

      // Question 9 - Functions and Generics (4 points)
      {
        type: QuestionType.CodeCompletion,
        question:
          'Add TypeScript types and a generic so identity preserves the input type:\n\nfunction identity(x) {\n  return x;\n}\n\nconst a = identity(5);\nconst b = identity("hello");\n\nProvide the corrected code.',
        hint: "Use a generic type parameter like <T>",
      },

      // Question 10 - Functions and Generics (2 points)
      {
        type: QuestionType.TextInput,
        question:
          "What does the 'void' return type indicate and when would you use 'never' instead?",
        hint: "Think about functions that don't return vs functions that can't return",
      },

      // Question 11 - Arrays Tuples and Objects (1 point)
      {
        type: QuestionType.MultipleChoice,
        question: "Which type annotation declares an array of strings?",
        options: ["string[]", "Array<string>", "Both A and B", "[]string"],
      },

      // Question 12 - Arrays Tuples and Objects (3 points)
      {
        type: QuestionType.CodeCompletion,
        question:
          "Define a tuple type 'ProductTuple' for [id: number, name: string, inStock: boolean] and create a variable 'p' of that type.",
        hint: "Use type ProductTuple = [number, string, boolean]",
      },

      // Question 13 - Arrays Tuples and Objects (3 points)
      {
        type: QuestionType.CodeCompletion,
        question:
          'The following code fails type checking. Fix the types only:\n\nconst product = {\n  id: "100",\n  name: "Socks",\n  price: 9.99\n};\n\nfunction printPrice(p: { id: number; price: number }) {\n  console.log(p.price);\n}\n\nprintPrice(product);',
        hint: "The id property should be a number, not a string",
      },

      // Question 14 - Arrays Tuples and Objects (2 points)
      {
        type: QuestionType.TextInput,
        question:
          "Explain the difference between an index signature and mapped types in one sentence.",
        hint: "Index signatures define flexible property access, mapped types transform existing types",
      },

      // Question 15 - Classes and Interfaces (1 point)
      {
        type: QuestionType.MultipleChoice,
        question:
          "Which keyword enforces that a class implements a contract shape?",
        options: ["extends", "implements", "satisfies", "conforms"],
      },

      // Question 16 - Classes and Interfaces (4 points)
      {
        type: QuestionType.CodeCompletion,
        question:
          "Write a class 'User' that implements this interface and includes a constructor:\n\ninterface IUser {\n  id: number;\n  name: string;\n  isActive?: boolean;\n  greet(): string;\n}\n\nProvide the class code.",
        hint: "Use 'implements IUser' and define all required properties and methods",
      },

      // Question 17 - Classes and Interfaces (2 points)
      {
        type: QuestionType.TextInput,
        question:
          "What is the difference between public, private, and protected class members in TypeScript?",
        hint: "Think about accessibility from outside the class, derived classes, etc.",
      },

      // Question 18 - Classes and Interfaces (3 points)
      {
        type: QuestionType.CodeCompletion,
        question:
          'Fix the interface usage so the function accepts any object that has id: number and name: string:\n\ninterface Product {\n  id: number;\n  name: string;\n}\n\nfunction logProduct(p: Product) {\n  console.log(p.id, p.name);\n}\n\nconst x = { id: 1, name: "Hat", color: "red" };\nlogProduct(x);',
        hint: "TypeScript structural typing should already allow this - what might be the issue?",
      },

      // Question 19 - Classes and Interfaces (1 point)
      {
        type: QuestionType.MultipleChoice,
        question:
          "Which of the following allows adding new properties to an existing interface declaration across multiple files?",
        options: [
          "Type alias merging",
          "Interface declaration merging",
          "Class augmentation",
          "Module augmentation only",
        ],
      },

      // Question 20 - Classes and Interfaces (4 points)
      {
        type: QuestionType.CodeCompletion,
        question:
          "Create an interface 'CartItem' with productId: number, quantity: number, and optional notes: string. Then write a function 'totalItems(items: CartItem[]): number' that returns the sum of quantities. Provide the code.",
        hint: "Use array methods like reduce() or a loop to sum quantities",
      },
    ];
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
