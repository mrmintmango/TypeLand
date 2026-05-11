import { QuestionType } from "./quizDefinitions.js";
export const logPopQuiz1Questions = [
    // JSON & APIs
    // Question 1 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "What does JSON.parse() return when given valid JSON text?",
        options: [
            "A JavaScript value/object",
            "A JSON string",
            "A Promise",
            "A Response object",
        ],
    },
    // Question 2 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "When preparing data to store or send as text, which function should you use?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "response.ok()",
            "Array.push()",
        ],
    },
    // Question 3 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "APIs often send data as text. Explain why parsing is needed before using that data in app logic.",
    },
    // Question 4 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Parse the JSON string into a typed object and return the username.",
        starterCode: 'interface User {\n  id: number;\n  username: string;\n}\n\nconst raw = "{\\"id\\":1,\\"username\\":\\"nova\\"}";\n\nfunction getUsername(jsonText: string): string {\n  // your code here\n  return "";\n}',
    },
    // Request Flow, Errors, and Defensive Coding
    // Question 5 - Multiple Choice (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which order best matches a typical fetch request flow?",
        options: [
            "request -> receive response -> parse -> use data",
            "parse -> request -> use data -> receive response",
            "use data -> request -> parse -> receive response",
            "request -> use data -> parse -> receive response",
        ],
    },
    // Question 6 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "What does checking response.ok help you prevent in a fetch workflow?",
    },
    // Question 7 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Add defensive checks so this function safely handles undefined profile data.",
        starterCode: 'type Profile = { bio?: string };\n\nfunction getBioLength(profile?: Profile): number {\n  // return 0 when bio is missing\n  return profile.bio.length;\n}',
    },
    // CRUD, Objects, and Types
    // Question 8 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "In CRUD updates, what is one practical benefit of creating new data instead of mutating existing data in place?",
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
        question: "What does array.push(value) return?",
        options: [
            "The new length of the array",
            "The pushed value",
            "A new copied array",
            "undefined",
        ],
    },
    // Question 11 - Text Input (2 points)
    {
        type: QuestionType.TextInput,
        question: "When defining object shape, when would you choose an interface, and when is a type alias usually better?",
    },
    // Generics and Problem Solving
    // Question 12 - Code Completion (2 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Write a generic function firstItem<T> that returns the first item in an array, or undefined if empty.",
        starterCode: "",
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
        question: "When solving array problems, when might filter/map be clearer than a manual loop?",
    },
    // Question 15 - Code Completion (Challenge, 3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Create an async function fetchUsernames(url: string): Promise<string[]> that fetches JSON, checks response.ok, and safely returns usernames (or [] on failure).",
        starterCode: 'type ApiUser = { username?: string };\n\nasync function fetchUsernames(url: string): Promise<string[]> {\n  // your code here\n  return [];\n}',
    },
];
//# sourceMappingURL=logPopQuiz1.js.map