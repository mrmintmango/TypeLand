/**
 * QuizRenderer: Handles all DOM manipulation and user interactions for the quiz
 * Similar to UIRenderer pattern in renderer.ts
 */

import { QuizEngine } from "./quizEngine.js";
import { QuestionType, QuizQuestion, QuizState } from "./quizDefinitions.js";
import { exportQuizResults } from "./fileExporter.js";
import { quizRegistry, QuizEntry } from "./quizRegistry.js";

export class QuizRenderer {
  private engine: QuizEngine;
  private selectedQuiz: QuizEntry | null = null;

  // DOM Elements
  private quizSelectionSection: HTMLElement | null = null;
  private nameEntrySection: HTMLElement | null = null;
  private quizSection: HTMLElement | null = null;
  private completionSection: HTMLElement | null = null;

  private nameInput: HTMLInputElement | null = null;
  private startButton: HTMLButtonElement | null = null;
  private errorMessage: HTMLElement | null = null;

  private questionText: HTMLElement | null = null;
  private answerContainer: HTMLElement | null = null;
  private progressDisplay: HTMLElement | null = null;
  private hintDisplay: HTMLElement | null = null;

  private previousButton: HTMLButtonElement | null = null;
  private nextButton: HTMLButtonElement | null = null;
  private submitQuizButton: HTMLButtonElement | null = null;

  private completionMessage: HTMLElement | null = null;
  private downloadButton: HTMLButtonElement | null = null;
  private retakeButton: HTMLButtonElement | null = null;

  constructor() {
    this.engine = new QuizEngine();
    this.initializeDOMElements();
    this.attachEventListeners();
    this.render();
  }

  /**
   * Initialize references to DOM elements
   */
  private initializeDOMElements(): void {
    // Sections
    this.quizSelectionSection = document.getElementById("quizSelectionSection");
    this.nameEntrySection = document.getElementById("nameEntrySection");
    this.quizSection = document.getElementById("quizSection");
    this.completionSection = document.getElementById("completionSection");

    // Name entry elements
    this.nameInput = document.getElementById("studentName") as HTMLInputElement;
    this.startButton = document.getElementById(
      "startQuizButton",
    ) as HTMLButtonElement;
    this.errorMessage = document.getElementById("errorMessage");

    // Quiz elements
    this.questionText = document.getElementById("questionText");
    this.answerContainer = document.getElementById("answerContainer");
    this.progressDisplay = document.getElementById("progressDisplay");
    this.hintDisplay = document.getElementById("hintDisplay");

    // Navigation buttons
    this.previousButton = document.getElementById(
      "previousButton",
    ) as HTMLButtonElement;
    this.nextButton = document.getElementById(
      "nextButton",
    ) as HTMLButtonElement;
    this.submitQuizButton = document.getElementById(
      "submitQuizButton",
    ) as HTMLButtonElement;

    // Completion elements
    this.completionMessage = document.getElementById("completionMessage");
    this.downloadButton = document.getElementById(
      "downloadButton",
    ) as HTMLButtonElement;
    this.retakeButton = document.getElementById(
      "retakeButton",
    ) as HTMLButtonElement;
  }

  /**
   * Attach event listeners to interactive elements
   */
  private attachEventListeners(): void {
    // Start quiz button
    this.startButton?.addEventListener("click", () => this.handleStartQuiz());

    // Allow Enter key to start quiz
    this.nameInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleStartQuiz();
      }
    });

    // Navigation buttons
    this.previousButton?.addEventListener("click", () => this.handlePrevious());
    this.nextButton?.addEventListener("click", () => this.handleNext());
    this.submitQuizButton?.addEventListener("click", () =>
      this.handleSubmitQuiz(),
    );

    // Completion buttons
    this.downloadButton?.addEventListener("click", () => this.handleDownload());
    this.retakeButton?.addEventListener("click", () => this.handleRetake());
  }

  /**
   * Handle start quiz button click
   */
  private handleStartQuiz(): void {
    if (!this.nameInput) return;

    const studentName = this.nameInput.value;
    const result = this.engine.startQuiz(studentName);

    if (!result.isValid) {
      this.showError(result.message || "Error starting quiz");
      return;
    }

    this.clearError();
    this.render();
  }

  /**
   * Handle previous button click
   */
  private handlePrevious(): void {
    // Save current answer before navigating
    this.saveCurrentAnswer();

    if (this.engine.previousQuestion()) {
      this.render();
    }
  }

  /**
   * Handle next button click
   */
  private handleNext(): void {
    // Save current answer before navigating
    const saved = this.saveCurrentAnswer();

    if (!saved) {
      return; // Error message already shown by saveCurrentAnswer
    }

    if (this.engine.nextQuestion()) {
      this.render();
    }
  }

  /**
   * Handle submit quiz button click
   */
  private handleSubmitQuiz(): void {
    // Save current answer first
    const saved = this.saveCurrentAnswer();

    if (!saved) {
      return;
    }

    const result = this.engine.completeQuiz();

    if (!result.isValid) {
      this.showQuizError(result.message || "Error completing quiz");
      return;
    }

    this.render();
  }

  /**
   * Save the current answer from the input fields
   */
  private saveCurrentAnswer(): boolean {
    const answer = this.getCurrentAnswerFromUI();

    if (answer === null) {
      return false; // No answer input found
    }

    const result = this.engine.submitAnswer(answer);

    if (!result.isValid) {
      this.showQuizError(result.message || "Please provide an answer");
      return false;
    }

    return true;
  }

  /**
   * Get the current answer from UI input elements
   */
  private getCurrentAnswerFromUI(): string | null {
    if (!this.answerContainer) return null;

    // Check for text input or textarea
    const textInput = this.answerContainer.querySelector(
      'input[type="text"], textarea',
    ) as HTMLInputElement | HTMLTextAreaElement;
    if (textInput) {
      return textInput.value;
    }

    // Check for selected radio button
    const radioButton = this.answerContainer.querySelector(
      'input[type="radio"]:checked',
    ) as HTMLInputElement;
    if (radioButton) {
      return radioButton.value;
    }

    return null;
  }

  /**
   * Handle download button click
   */
  private handleDownload(): void {
    const session = this.engine.getSession();
    if (session) {
      exportQuizResults(session);
    }
  }

  /**
   * Handle retake button click
   */
  private handleRetake(): void {
    this.engine.reset();
    this.selectedQuiz = null;
    if (this.nameInput) {
      this.nameInput.value = "";
    }
    this.clearError();
    this.render();
  }

  /**
   * Show error message in name entry section
   */
  private showError(message: string): void {
    if (this.errorMessage) {
      this.errorMessage.textContent = message;
      this.errorMessage.style.display = "block";
    }
  }

  /**
   * Clear error message in name entry section
   */
  private clearError(): void {
    if (this.errorMessage) {
      this.errorMessage.textContent = "";
      this.errorMessage.style.display = "none";
    }
  }

  /**
   * Show error message in quiz section (creates temporary alert)
   */
  private showQuizError(message: string): void {
    alert(message);
  }

  /**
   * Main render method - displays appropriate section based on quiz state
   */
  private render(): void {
    // Show quiz selection first if no quiz has been chosen yet
    if (!this.selectedQuiz) {
      this.renderQuizSelection();
      return;
    }

    const state = this.engine.getState();

    switch (state) {
      case QuizState.NotStarted:
        this.renderNameEntry();
        break;
      case QuizState.InProgress:
        this.renderQuestion();
        break;
      case QuizState.Completed:
        this.renderCompletion();
        break;
    }
  }

  /**
   * Render the quiz selection section
   */
  private renderQuizSelection(): void {
    this.showSection(this.quizSelectionSection);
    this.hideSection(this.nameEntrySection);
    this.hideSection(this.quizSection);
    this.hideSection(this.completionSection);

    const listEl = document.getElementById("quizList");
    if (!listEl) return;

    listEl.innerHTML = "";

    quizRegistry.forEach((quiz) => {
      const card = document.createElement("div");
      card.className = "quiz-card";
      if (quiz.isActive) {
        card.classList.add("quiz-card--active");
      }

      const header = document.createElement("div");
      header.className = "quiz-card__header";

      const title = document.createElement("h3");
      title.textContent = quiz.name;

      if (quiz.isActive) {
        const badge = document.createElement("span");
        badge.className = "quiz-card__badge";
        badge.textContent = "Active";
        header.appendChild(badge);
      }

      header.appendChild(title);

      const desc = document.createElement("p");
      desc.className = "quiz-card__desc";
      desc.textContent = quiz.description;

      const meta = document.createElement("p");
      meta.className = "quiz-card__meta";
      meta.textContent = `${quiz.questions.length} question${quiz.questions.length !== 1 ? "s" : ""}`;

      const btn = document.createElement("button");
      btn.className = "quiz-card__btn";
      btn.textContent = quiz.isActive ? "Take Quiz" : "Take Quiz";
      btn.addEventListener("click", () => this.handleSelectQuiz(quiz));

      card.appendChild(header);
      card.appendChild(desc);
      card.appendChild(meta);
      card.appendChild(btn);
      listEl.appendChild(card);
    });
  }

  /**
   * Handle a quiz card selection
   */
  private handleSelectQuiz(quiz: QuizEntry): void {
    this.selectedQuiz = quiz;
    this.engine.setQuestions(quiz.questions);
    this.render();
  }

  /**
   * Render the name entry section
   */
  private renderNameEntry(): void {
    this.hideSection(this.quizSelectionSection);
    this.showSection(this.nameEntrySection);
    this.hideSection(this.quizSection);
    this.hideSection(this.completionSection);

    // Show the selected quiz name in the welcome header
    const quizTitle = document.getElementById("selectedQuizTitle");
    if (quizTitle && this.selectedQuiz) {
      quizTitle.textContent = this.selectedQuiz.name;
    }
  }

  /**
   * Render the current question
   */
  private renderQuestion(): void {
    this.hideSection(this.nameEntrySection);
    this.showSection(this.quizSection);
    this.hideSection(this.completionSection);

    const question = this.engine.getCurrentQuestion();
    if (!question) return;

    // Update question text
    if (this.questionText) {
      this.questionText.textContent = question.question;
    }

    // Update progress
    if (this.progressDisplay) {
      this.progressDisplay.textContent = `Question ${this.engine.getCurrentQuestionNumber()} of ${this.engine.getTotalQuestions()}`;
    }

    // Update hint
    if (this.hintDisplay) {
      if (question.hint) {
        this.hintDisplay.textContent = `💡 Hint: ${question.hint}`;
        this.hintDisplay.style.display = "block";
      } else {
        this.hintDisplay.style.display = "none";
      }
    }

    // Render answer input based on question type
    this.renderAnswerInput(question);

    // Update navigation buttons
    this.updateNavigationButtons();
  }

  /**
   * Render appropriate answer input based on question type
   */
  private renderAnswerInput(question: QuizQuestion): void {
    if (!this.answerContainer) return;

    // Clear previous input
    this.answerContainer.innerHTML = "";

    // Get existing answer if any
    const existingAnswer = this.engine.getCurrentAnswer();

    switch (question.type) {
      case QuestionType.MultipleChoice:
      case QuestionType.TrueFalse:
        this.renderRadioButtons(question.options || [], existingAnswer);
        break;

      case QuestionType.TextInput:
        this.renderTextInput(existingAnswer, question.exampleCode);
        break;

      case QuestionType.CodeCompletion:
        this.renderCodeInput(existingAnswer, question.starterCode);
        break;
    }
  }

  /**
   * Render radio buttons for multiple choice / true-false questions
   */
  private renderRadioButtons(
    options: string[],
    selectedValue: string | null,
  ): void {
    if (!this.answerContainer) return;

    options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "answer-option";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.value = option;
      radio.id = `option-${index}`;

      if (selectedValue === option) {
        radio.checked = true;
      }

      const span = document.createElement("span");
      span.textContent = option;

      label.appendChild(radio);
      label.appendChild(span);
      this.answerContainer!.appendChild(label);
    });
  }

  /**
   * Render text input for short answer questions
   */
  private renderTextInput(
    existingValue: string | null,
    exampleCode?: string,
  ): void {
    if (!this.answerContainer) return;

    // Display example code if provided
    if (exampleCode) {
      const codeBlock = document.createElement("pre");
      codeBlock.className = "question-example-code";
      const codeContent = document.createElement("code");
      codeContent.textContent = exampleCode;
      codeBlock.appendChild(codeContent);
      this.answerContainer.appendChild(codeBlock);
    }

    const input = document.createElement("input");
    input.type = "text";
    input.className = "text-answer";
    input.placeholder = "Type your answer here...";

    if (existingValue) {
      input.value = existingValue;
    }

    this.answerContainer.appendChild(input);
  }

  /**
   * Render textarea for code completion questions
   */
  private renderCodeInput(
    existingValue: string | null,
    starterCode?: string,
  ): void {
    if (!this.answerContainer) return;

    const textarea = document.createElement("textarea");
    textarea.className = "code-answer";
    textarea.placeholder = "Type your code answer here...";
    textarea.rows = 5;

    if (existingValue) {
      textarea.value = existingValue;
    } else if (starterCode) {
      textarea.value = starterCode;
    }

    this.answerContainer.appendChild(textarea);
  }

  /**
   * Update state of navigation buttons
   */
  private updateNavigationButtons(): void {
    // Previous button
    if (this.previousButton) {
      this.previousButton.disabled = !this.engine.canGoPrevious();
    }

    // Next button
    if (this.nextButton) {
      if (this.engine.isLastQuestion()) {
        this.nextButton.style.display = "none";
      } else {
        this.nextButton.style.display = "inline-block";
        this.nextButton.disabled = false;
      }
    }

    // Submit button
    if (this.submitQuizButton) {
      if (this.engine.isLastQuestion()) {
        this.submitQuizButton.style.display = "inline-block";
        this.submitQuizButton.disabled = false;
      } else {
        this.submitQuizButton.style.display = "none";
      }
    }
  }

  /**
   * Render the completion section
   */
  private renderCompletion(): void {
    this.hideSection(this.nameEntrySection);
    this.hideSection(this.quizSection);
    this.showSection(this.completionSection);

    const session = this.engine.getSession();
    if (this.completionMessage && session) {
      this.completionMessage.innerHTML = `
        <p>Thank you, <strong>${session.studentName}</strong>!</p>
        <p>You have completed all ${this.engine.getTotalQuestions()} questions.</p>
        <p>Click the button below to download your responses.</p>
      `;
    }
  }

  /**
   * Show a section
   */
  private showSection(section: HTMLElement | null): void {
    if (section) {
      section.style.display = "block";
    }
  }

  /**
   * Hide a section
   */
  private hideSection(section: HTMLElement | null): void {
    if (section) {
      section.style.display = "none";
    }
  }
}

// Initialize the quiz when the page loads
window.addEventListener("DOMContentLoaded", () => {
  new QuizRenderer();
});
