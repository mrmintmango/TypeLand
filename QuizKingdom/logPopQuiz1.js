import { QuestionType } from "./quizDefinitions.js";
export const logPopQuiz1Questions = [
    // MVC, GUI State, and Events
    // Question 1 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "In an MVC app, which layer should primarily own app data and business rules?",
        options: [
            "Model (often services/data layer)",
            "View (UI templates/components)",
            "CSS styles",
            "The browser devtools",
        ],
    },
    // Question 2 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "In a GUI, what usually triggers controller logic to run?",
        options: [
            "User events like clicks or input changes",
            "Random style recalculations",
            "TypeScript compile output",
            "Only page refreshes",
        ],
    },
    // Question 3 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "What is UI state, and why does keeping state changes predictable make GUI behavior easier to manage?",
    },
    // Question 4 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Complete this MVC-style controller function so it updates model state and then re-renders the view.",
        starterCode: 'type TodoModel = { items: string[] };\n\nfunction render(items: string[]): void {\n  console.log("rendering", items);\n}\n\nfunction addTodo(model: TodoModel, text: string): void {\n  // controller logic: ignore blank text, update model, then render\n}',
    },
    // HTML Embeds and Practical Frontend Constraints
    // Question 5 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "What is the main purpose of an iframe element in HTML?",
        options: [
            "Embed another page/resource inside the current page",
            "Compile TypeScript in the browser",
            "Create localStorage automatically",
            "Replace CSS files at runtime",
        ],
    },
    // Question 6 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "Why can styling or scripting inside an iframe be limited when the iframe points to a different site?",
    },
    // Question 7 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Add defensive checks so this function safely handles missing model or title data.",
        starterCode: 'type LessonCard = { title?: string };\n\nfunction getTitleUpper(card?: LessonCard): string {\n  // return "UNTITLED" when card or title is missing\n  return card.title.toUpperCase();\n}',
    },
    // Objects, Mutation, and Type Design
    // Question 8 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "When passing objects into functions, what is one risk of mutating properties directly, and how can you reduce that risk?",
    },
    // Question 9 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "If you pass an object into a function and change one of its properties inside that function, what usually happens?",
        options: [
            "The original object can be affected",
            "Only a deep-cloned copy changes automatically",
            "TypeScript throws an error by default",
            "Objects are always passed by value",
        ],
    },
    // Question 10 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "When preparing an object to store or send as text (for APIs/files), which function should you use?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "response.ok",
            "Object.keys()",
        ],
    },
    // Question 11 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "APIs often send JSON as text. Explain why parsing is needed before that data can be used safely in app logic.",
    },
    // Generics and Defensive Fetch Workflow
    // Question 12 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Write a generic function getFirst<T> that returns the first array item, or undefined for an empty array.",
        starterCode: 'function getFirst<T>(items: T[]): T | undefined {\n  // your code here\n  return undefined;\n}',
    },
    // Question 13 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "If a generic function needs to use value.length, which constraint is appropriate?",
        options: [
            "<T extends { length: number }>",
            "<T extends number>",
            "<T extends Promise<T>>",
            "No constraint is needed",
        ],
    },
    // Question 14 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "When defining object shape, when would you choose an interface, and when is a type alias usually better?",
    },
    // Question 15 - Code Completion (Challenge, 3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Create an async function fetchUsernames(url: string): Promise<string[]> that follows request flow (fetch -> check response.ok -> parse -> use) and safely returns usernames (or [] on failure).",
        starterCode: 'type ApiUser = { username?: string };\n\nasync function fetchUsernames(url: string): Promise<string[]> {\n  // your code here\n  return [];\n}',
    },
];
//# sourceMappingURL=logPopQuiz1.js.map