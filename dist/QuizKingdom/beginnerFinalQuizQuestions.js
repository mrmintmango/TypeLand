import { QuestionType } from "./quizDefinitions.js";
export const beginnerFinalQuizQuestions = [
    // Variables & Basic Types
    // Question 1 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which declaration causes TypeScript to miss the chance to infer a safer type immediately?",
        options: [
            "let score = 0;",
            'const playerName = "Nova";',
            "let isReady = true;",
            "let data;",
        ],
    },
    // Question 2 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which return type should be used for a function that performs an action but does not return a value?",
        options: ["void", "undefined", "never", "any"],
    },
    // Question 3 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "Explain the difference between a const variable binding and a readonly object property.",
    },
    // Question 4 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "Why is an explicit type annotation usually better than writing 'let data;' when you already know what the variable should store?",
    },
    // Question 5 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Add type annotations so this code stays type-safe without relying on implicit any:",
        starterCode: 'let heroName = "Nova";\nlet health = 100;\nlet isAlive = true;\n\nfunction takeDamage(amount) {\n  health -= amount;\n\n  if (health <= 0) {\n    isAlive = false;\n  }\n}',
    },
    // Question 6 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Fix the declarations so each variable has an intentional, clear type and no value can silently change to the wrong type later:",
        starterCode: 'let level;\nlevel = 1;\n\nlet title = "Apprentice";\n\nlet isLoggedIn;\nisLoggedIn = false;',
    },
    // Functions & Type Annotations
    // Question 7 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which statement about optional parameters in TypeScript is correct?",
        options: [
            "Optional parameters must come after required parameters.",
            "Optional parameters must come before required parameters.",
            "Optional parameters automatically become number types.",
            "Optional parameters can only be used in arrow functions.",
        ],
    },
    // Question 8 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which function signature correctly uses a rest parameter?",
        options: [
            "function sum(...numbers: number[]): number {}",
            "function sum(numbers...: number[]): number {}",
            "function sum(...numbers: Array): number {}",
            "function sum(numbers: ...number[]): number {}",
        ],
    },
    // Question 9 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "Why should function parameters always be annotated even when TypeScript can infer many other types?",
    },
    // Question 10 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "What is the practical difference between an optional parameter and a default parameter?",
    },
    // Question 11 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Write a function 'formatPlayer' that takes name (string), level (number), and title (optional string) and returns a string.",
        starterCode: "",
    },
    // Question 12 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Create a type alias 'NumberOperation' for a function that takes two numbers and returns a number. Then write a variable 'multiply' using that type.",
        starterCode: "",
    },
    // Arrays & Tuples
    // Question 13 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "What type does Array.find return for a number[] array?",
        options: ["number | undefined", "number[]", "boolean", "number"],
    },
    // Question 14 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which type annotation correctly represents a two-dimensional string grid?",
        options: [
            "string[][]",
            "[string, string][]",
            "Array<string>",
            "string[] | string[]",
        ],
    },
    // Question 15 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "What is the key difference between an array and a tuple in TypeScript?",
    },
    // Question 16 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "Why is a tuple usually a better choice than a plain array for storing a coordinate like [row, column]?",
    },
    // Question 17 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Create a tuple type 'Coordinate' for [row: number, column: number] and declare a variable 'startPosition' with the value [2, 5].",
        starterCode: "",
    },
    // Question 18 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Write a function 'getEvenScores' that takes a number[] and returns a new array containing only the even numbers.",
        starterCode: "",
    },
    // Objects & Interfaces
    // Question 19 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "What is the correct syntax for an optional property in an interface?",
        options: [
            "propertyName?: type;",
            "optional propertyName: type;",
            "propertyName: type?;",
            "propertyName: type | undefined;",
        ],
    },
    // Question 20 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "How can you define a method signature inside an interface?",
        options: [
            "Only methodName(param: type): returnType;",
            "Only methodName: (param: type) => returnType;",
            "Both methodName(param: type): returnType; and methodName: (param: type) => returnType;",
            "function methodName(param: type): returnType;",
        ],
    },
    // Question 21 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which keyword is used when one interface inherits properties from another interface?",
        options: ["extends", "implements", "inherits", "readonly"],
    },
    // Question 22 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "When should you prefer an interface over a type alias for defining an object shape?",
    },
    // Question 23 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "What does it mean when an interface extends another interface?",
    },
    // Question 24 - Code Completion (3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Create an interface 'Quest' with readonly id (number), title (string), and optional reward (string). Then create an interface 'TimedQuest' that extends Quest and adds timeLimitMinutes (number). Finally, create a variable 'dailyQuest' of type TimedQuest.",
        starterCode: "",
    },
    // Type Inference & Basic Generics
    // Question 25 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: 'What type does TypeScript infer for: let mixed = [1, "two", true];',
        options: [
            "(string | number | boolean)[]",
            "any[]",
            "[number, string, boolean]",
            "object[]",
        ],
    },
    // Question 26 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which function declaration correctly defines a generic identity function?",
        options: [
            "function identity<T>(value: T): T {}",
            "function identity(value: <T>): T {}",
            "function identity<T: value>(): T {}",
            "function identity(T value): T {}",
        ],
    },
    // Question 27 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which built-in TypeScript types commonly use generics?",
        options: [
            "Array<T>, Promise<T>, Map<K, V>",
            "string, number, boolean",
            "let, const, var",
            "interface, class, enum",
        ],
    },
    // Question 28 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "What problem do generics solve in TypeScript?",
    },
    // Question 29 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "Why is 'T' a common generic type parameter name, and when should you choose a more descriptive generic name instead?",
    },
    // Question 30 - Code Completion (3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Create a generic class 'Inventory<T>' with a property 'items: T[]', an 'add(item: T): void' method, and a 'getFirst(): T | undefined' method.",
        starterCode: "",
    },
];
//# sourceMappingURL=beginnerFinalQuizQuestions.js.map