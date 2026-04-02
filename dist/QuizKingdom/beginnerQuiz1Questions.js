import { QuestionType } from "./quizDefinitions.js";
export const beginnerQuiz1Questions = [
    // Question 1 - Variables and Basic Types (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which of the following is NOT a primitive type in TypeScript?",
        options: ["string", "number", "boolean", "array"],
    },
    // Question 2 - Variables and Basic Types (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "What is the correct syntax for declaring a variable with type annotation?",
        options: [
            "let name: string = 'Alice';",
            "let name = string 'Alice';",
            "let name: 'Alice' = string;",
            "let string: name = 'Alice';",
        ],
    },
    // Question 3 - Variables and Basic Types (2 points)
    {
        type: QuestionType.TextInput,
        question: "Explain the difference between 'let' and 'const' in one sentence.",
    },
    // Question 4 - Variables and Basic Types (2 points)
    {
        type: QuestionType.TextInput,
        question: "What is type inference and when does TypeScript use it?",
    },
    // Question 5 - Variables and Basic Types (3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Add proper type annotations to make this code type-safe:",
        starterCode: 'let playerName = "Hero";\nlet playerLevel = 1;\nlet isActive = true;\nlet score;\n\nscore = 100;',
    },
    // Question 6 - Variables and Basic Types (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which type should you avoid using when possible in TypeScript?",
        options: ["any", "string", "number", "boolean"],
    },
    // Question 7 - Variables and Basic Types (2 points)
    {
        type: QuestionType.TextInput,
        question: "What does the 'void' type represent in TypeScript?",
    },
    // Question 8 - Functions (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "What is the correct syntax for a function parameter with a type annotation?",
        options: [
            "function greet(name: string) {}",
            "function greet(string name) {}",
            "function greet(name = string) {}",
            "function greet(:string name) {}",
        ],
    },
    // Question 9 - Functions (3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Write a function 'calculateArea' that takes width and height as numbers and returns a number:",
        starterCode: "",
    },
    // Question 10 - Functions (2 points)
    {
        type: QuestionType.TextInput,
        question: "What is the difference between a required parameter and an optional parameter in TypeScript functions?",
    },
    // Question 11 - Functions (3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Fix the type errors in this function:",
        starterCode: "function greetUser(name, title?) {\n  return `Hello, ${title} ${name}!`;\n}",
    },
    // Question 12 - Functions (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which arrow function syntax is correct for a function that takes two numbers and returns a number?",
        options: [
            "const add = (a: number, b: number): number => a + b;",
            "const add = (a, b): number => a + b;",
            "const add: (a: number, b: number) => a + b;",
            "const add = a: number, b: number => number { return a + b; }",
        ],
    },
    // Question 13 - Functions (2 points)
    {
        type: QuestionType.TextInput,
        question: "What is the purpose of default parameters in functions?",
    },
    // Question 14 - Functions (4 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Create a function 'formatName' that takes firstName (required), lastName (required), and middleName (optional) as strings, and returns a formatted full name:",
        starterCode: "",
    },
    // Question 15 - Arrays and Tuples (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which of the following correctly declares an array of numbers?",
        options: [
            "Both let nums: number[] = [1, 2, 3]; and let nums: Array<number> = [1, 2, 3];",
            "let nums: [number] = [1, 2, 3];",
            "let nums: number = [1, 2, 3];",
            "let nums[] = [1, 2, 3];",
        ],
    },
    // Question 16 - Arrays and Tuples (2 points)
    {
        type: QuestionType.TextInput,
        question: "What is the key difference between an array and a tuple in TypeScript?",
    },
    // Question 17 - Arrays and Tuples (3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Create a tuple type 'PlayerInfo' for [username: string, level: number, isOnline: boolean] and declare a variable of that type:",
        starterCode: "",
    },
    // Question 18 - Arrays and Tuples (2 points)
    {
        type: QuestionType.TextInput,
        question: "Which array method would you use to transform each element in an array to a new value while maintaining type safety?",
    },
    // Question 19 - Arrays and Tuples (3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Write code that filters an array of numbers to only include even numbers:",
        starterCode: "const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n// Your code here",
    },
    // Question 20 - Arrays and Tuples (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "What type does the 'find' method return?",
        options: [
            "The element type or undefined",
            "Always the element type",
            "Always an array",
            "A boolean",
        ],
    },
];
//# sourceMappingURL=beginnerQuiz1Questions.js.map