/**
 * Type definitions for the QuizKingdom quiz system
 * Following TypeLand patterns: enums for states, interfaces for data structures
 */
/**
 * Enum for different types of quiz questions
 */
export var QuestionType;
(function (QuestionType) {
    QuestionType["MultipleChoice"] = "MULTIPLE_CHOICE";
    QuestionType["TrueFalse"] = "TRUE_FALSE";
    QuestionType["TextInput"] = "TEXT_INPUT";
    QuestionType["CodeCompletion"] = "CODE_COMPLETION";
})(QuestionType || (QuestionType = {}));
/**
 * Enum for quiz session states
 */
export var QuizState;
(function (QuizState) {
    QuizState["NotStarted"] = "NOT_STARTED";
    QuizState["InProgress"] = "IN_PROGRESS";
    QuizState["Completed"] = "COMPLETED";
})(QuizState || (QuizState = {}));
//# sourceMappingURL=quizDefinitions.js.map