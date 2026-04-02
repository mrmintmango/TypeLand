import { QuestionType } from "./quizDefinitions.js";
export const quizQuestions = [
    // Question 1 - Variables and Primitive Types (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which declaration allows reassignment but not redeclaration in the same scope?",
        options: ["var", "let", "const", "type"],
    },
    // Question 2 - Variables and Primitive Types (2 points)
    {
        type: QuestionType.TextInput,
        question: "List all the Typescript primitive types that we have gone over so far.",
        hint: "Don't forget about null, and some of the lesser known ones",
    },
    // Question 3 - Variables and Primitive Types (3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Fill in types so the code compiles without 'any' and noImplicitAny errors\nCorrect the provided code.",
        starterCode: 'let id = 42;\nlet name = "Widget";\nlet active = true;\n\nfunction format(item): string {\n  return `${item.id}: ${item.name} (${item.active})`;\n}',
        hint: "noImplicitAny means you need to prevent Typescript from inferring 'any' type for the item parameter",
    },
    // Question 4 - Variables and Primitive Types (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "When should we favor using undefined instead of null in TypeScript?",
        options: [
            "When a variable is intentionally left uninitialized",
            "When a variable is explicitly set to no value",
            "When a variable is expected to hold an object",
            "When a variable is expected to hold a string",
        ],
    },
    // Question 5 - Type Aliases and Unions (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which syntax defines a type alias for a union of string literals?",
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
        question: "Explain the difference between a type alias and an interface in TypeScript in one sentence.",
        hint: "Think about extensibility and how they can be used",
    },
    // Question 7 - Type Aliases and Unions (3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Create a type alias 'ID' that accepts either a string or a number and write a function 'getById' signature that accepts id: ID and returns Promise<object | null>.",
        starterCode: "",
        hint: "Use a union type for ID and async function or Promise return type",
    },
    // Question 8 - Functions and Generics (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which function signature correctly types a function that takes a number and returns a number?",
        options: [
            "function f(x: number): number {}",
            "function f(x): number {}",
            "function f(x: number) { return x }",
            "const f: (x) => number = x => x",
        ],
    },
    // Question 9 - Functions and Generics (4 points)
    {
        type: QuestionType.TextInput,
        question: "Explain the difference between extends and implements in TypeScript classes and when you would use each one.",
        hint: "remember the dependency on interfaces",
    },
    // Question 10 - Functions and Generics (2 points)
    {
        type: QuestionType.TextInput,
        question: "What does the 'void' return type indicate and when would you use 'never' instead?",
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
        question: "Define a tuple type 'ProductTuple' for [id: number, name: string, inStock: boolean] and create a variable 'p' of that type.",
        starterCode: "",
        hint: "Remember Tuples are special arrays that can have different types at each index",
    },
    // Question 13 - Arrays Tuples and Objects (3 points)
    {
        type: QuestionType.CodeCompletion,
        question: "The following code fails type checking. Fix the types only",
        starterCode: 'const product = {\n  id: "100",\n  name: "Socks",\n  price: 9.99\n};\n\nfunction printPrice(p: { id: number; price: number }) {\n  console.log(p.price);\n}\n\nprintPrice(product);',
        hint: "",
    },
    // Question 14 - Arrays Tuples and Objects (2 points)
    {
        type: QuestionType.TextInput,
        question: "Explain why one would explicitly declare an object type when TypeScript can often infer it from the assigned value.",
        hint: "",
    },
    // Question 15 - Classes and Interfaces (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which keyword enforces that a class implements a contract shape?",
        options: ["extends", "implements", "satisfies", "conforms"],
    },
    // Question 16 - Classes and Interfaces (4 points)
    {
        type: QuestionType.CodeCompletion,
        question: "Write a class 'User' that implements this interface and includes a constructor",
        starterCode: "interface IUser {\n  id: number;\n  name: string;\n  isActive?: boolean;\n  greet(): string;\n}",
        hint: "Make sure to define all required properties and methods",
    },
    // Question 17 - Classes and Interfaces (2 points)
    {
        type: QuestionType.TextInput,
        question: "What is the difference between public, private, and protected class members in TypeScript?",
        hint: "Think about accessibility from outside the class, derived classes, etc.",
    },
    // Question 18 - Classes and Interfaces (3 points)
    {
        type: QuestionType.TextInput,
        question: "Is the following valid TypeScript code? If not, explain the error and how to fix it.",
        exampleCode: `interface Product {
  id: number;
  name: string;
}

function logProduct(p: Product): void {
  console.log(p.id, p.name);
}

const x = { id: 1, name: "Hat", color: "red" };
logProduct(x);`,
        hint: "Think about how interfaces are handled",
    },
    // Question 19 - Classes and Interfaces (1 point)
    {
        type: QuestionType.MultipleChoice,
        question: "Which of the following allows adding new properties to an existing interface declaration across multiple files?",
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
        question: "Create an interface 'CartItem' with productId: number, quantity: number, and optional notes: string. Then write a function 'totalItems(items: CartItem[]): number' that returns the sum of quantities. Provide the code.",
        starterCode: "",
        hint: "Use array methods like reduce() or a loop to sum quantities",
    },
];
//# sourceMappingURL=firstQuizQuestions.js.map