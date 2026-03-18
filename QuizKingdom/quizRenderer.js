/**
 * QuizRenderer: Handles all DOM manipulation and user interactions for the quiz
 * Similar to UIRenderer pattern in renderer.ts
 */
import { QuizEngine } from "./quizEngine.js";
import { QuestionType, QuizState } from "./quizDefinitions.js";
import { exportQuizResults } from "./fileExporter.js";
export class QuizRenderer {
    constructor() {
        // DOM Elements
        this.nameEntrySection = null;
        this.quizSection = null;
        this.completionSection = null;
        this.nameInput = null;
        this.startButton = null;
        this.errorMessage = null;
        this.questionText = null;
        this.answerContainer = null;
        this.progressDisplay = null;
        this.hintDisplay = null;
        this.previousButton = null;
        this.nextButton = null;
        this.submitQuizButton = null;
        this.completionMessage = null;
        this.downloadButton = null;
        this.retakeButton = null;
        this.engine = new QuizEngine();
        this.initializeDOMElements();
        this.attachEventListeners();
        this.render();
    }
    /**
     * Initialize references to DOM elements
     */
    initializeDOMElements() {
        // Sections
        this.nameEntrySection = document.getElementById("nameEntrySection");
        this.quizSection = document.getElementById("quizSection");
        this.completionSection = document.getElementById("completionSection");
        // Name entry elements
        this.nameInput = document.getElementById("studentName");
        this.startButton = document.getElementById("startQuizButton");
        this.errorMessage = document.getElementById("errorMessage");
        // Quiz elements
        this.questionText = document.getElementById("questionText");
        this.answerContainer = document.getElementById("answerContainer");
        this.progressDisplay = document.getElementById("progressDisplay");
        this.hintDisplay = document.getElementById("hintDisplay");
        // Navigation buttons
        this.previousButton = document.getElementById("previousButton");
        this.nextButton = document.getElementById("nextButton");
        this.submitQuizButton = document.getElementById("submitQuizButton");
        // Completion elements
        this.completionMessage = document.getElementById("completionMessage");
        this.downloadButton = document.getElementById("downloadButton");
        this.retakeButton = document.getElementById("retakeButton");
    }
    /**
     * Attach event listeners to interactive elements
     */
    attachEventListeners() {
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
        this.submitQuizButton?.addEventListener("click", () => this.handleSubmitQuiz());
        // Completion buttons
        this.downloadButton?.addEventListener("click", () => this.handleDownload());
        this.retakeButton?.addEventListener("click", () => this.handleRetake());
    }
    /**
     * Handle start quiz button click
     */
    handleStartQuiz() {
        if (!this.nameInput)
            return;
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
    handlePrevious() {
        // Save current answer before navigating
        this.saveCurrentAnswer();
        if (this.engine.previousQuestion()) {
            this.render();
        }
    }
    /**
     * Handle next button click
     */
    handleNext() {
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
    handleSubmitQuiz() {
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
    saveCurrentAnswer() {
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
    getCurrentAnswerFromUI() {
        if (!this.answerContainer)
            return null;
        // Check for text input or textarea
        const textInput = this.answerContainer.querySelector('input[type="text"], textarea');
        if (textInput) {
            return textInput.value;
        }
        // Check for selected radio button
        const radioButton = this.answerContainer.querySelector('input[type="radio"]:checked');
        if (radioButton) {
            return radioButton.value;
        }
        return null;
    }
    /**
     * Handle download button click
     */
    handleDownload() {
        const session = this.engine.getSession();
        if (session) {
            exportQuizResults(session);
        }
    }
    /**
     * Handle retake button click
     */
    handleRetake() {
        this.engine.reset();
        if (this.nameInput) {
            this.nameInput.value = "";
        }
        this.clearError();
        this.render();
    }
    /**
     * Show error message in name entry section
     */
    showError(message) {
        if (this.errorMessage) {
            this.errorMessage.textContent = message;
            this.errorMessage.style.display = "block";
        }
    }
    /**
     * Clear error message in name entry section
     */
    clearError() {
        if (this.errorMessage) {
            this.errorMessage.textContent = "";
            this.errorMessage.style.display = "none";
        }
    }
    /**
     * Show error message in quiz section (creates temporary alert)
     */
    showQuizError(message) {
        alert(message);
    }
    /**
     * Main render method - displays appropriate section based on quiz state
     */
    render() {
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
     * Render the name entry section
     */
    renderNameEntry() {
        this.showSection(this.nameEntrySection);
        this.hideSection(this.quizSection);
        this.hideSection(this.completionSection);
    }
    /**
     * Render the current question
     */
    renderQuestion() {
        this.hideSection(this.nameEntrySection);
        this.showSection(this.quizSection);
        this.hideSection(this.completionSection);
        const question = this.engine.getCurrentQuestion();
        if (!question)
            return;
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
            }
            else {
                this.hintDisplay.style.display = "none";
            }
        }
        // Render answer input based on question type
        this.renderAnswerInput(question.type, question.options);
        // Update navigation buttons
        this.updateNavigationButtons();
    }
    /**
     * Render appropriate answer input based on question type
     */
    renderAnswerInput(type, options) {
        if (!this.answerContainer)
            return;
        // Clear previous input
        this.answerContainer.innerHTML = "";
        // Get existing answer if any
        const existingAnswer = this.engine.getCurrentAnswer();
        switch (type) {
            case QuestionType.MultipleChoice:
            case QuestionType.TrueFalse:
                this.renderRadioButtons(options || [], existingAnswer);
                break;
            case QuestionType.TextInput:
                this.renderTextInput(existingAnswer);
                break;
            case QuestionType.CodeCompletion:
                this.renderCodeInput(existingAnswer);
                break;
        }
    }
    /**
     * Render radio buttons for multiple choice / true-false questions
     */
    renderRadioButtons(options, selectedValue) {
        if (!this.answerContainer)
            return;
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
            this.answerContainer.appendChild(label);
        });
    }
    /**
     * Render text input for short answer questions
     */
    renderTextInput(existingValue) {
        if (!this.answerContainer)
            return;
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
    renderCodeInput(existingValue) {
        if (!this.answerContainer)
            return;
        const textarea = document.createElement("textarea");
        textarea.className = "code-answer";
        textarea.placeholder = "Type your code answer here...";
        textarea.rows = 5;
        if (existingValue) {
            textarea.value = existingValue;
        }
        this.answerContainer.appendChild(textarea);
    }
    /**
     * Update state of navigation buttons
     */
    updateNavigationButtons() {
        // Previous button
        if (this.previousButton) {
            this.previousButton.disabled = !this.engine.canGoPrevious();
        }
        // Next button
        if (this.nextButton) {
            if (this.engine.isLastQuestion()) {
                this.nextButton.style.display = "none";
            }
            else {
                this.nextButton.style.display = "inline-block";
                this.nextButton.disabled = false;
            }
        }
        // Submit button
        if (this.submitQuizButton) {
            if (this.engine.isLastQuestion()) {
                this.submitQuizButton.style.display = "inline-block";
                this.submitQuizButton.disabled = false;
            }
            else {
                this.submitQuizButton.style.display = "none";
            }
        }
    }
    /**
     * Render the completion section
     */
    renderCompletion() {
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
    showSection(section) {
        if (section) {
            section.style.display = "block";
        }
    }
    /**
     * Hide a section
     */
    hideSection(section) {
        if (section) {
            section.style.display = "none";
        }
    }
}
// Initialize the quiz when the page loads
window.addEventListener("DOMContentLoaded", () => {
    new QuizRenderer();
});
//# sourceMappingURL=quizRenderer.js.map