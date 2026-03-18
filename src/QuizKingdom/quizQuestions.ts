import { QuizQuestion, QuestionType } from "./quizDefinitions.js";

export const quizQuestions: QuizQuestion[] = [
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
      "List all the Typescript primitive types that we have gone over so far.",
    hint: "Don't forget about null, and some of the lesser known ones",
  },

  // Question 3 - Variables and Primitive Types (3 points)
  {
    type: QuestionType.CodeCompletion,
    question:
      "Fill in types so the code compiles without 'any' and noImplicitAny errors:\n\nlet id = 42;\nlet name = \"Widget\";\nlet active = true;\n\nfunction format(item) {\n  return `${item.id}: ${item.name} (${item.active})`;\n}\n\nProvide the corrected code.",
    starterCode:
      'let id: number = 42;\nlet name: string = "Widget";\nlet active: boolean = true;\n\nfunction format(item: { id: number; name: string; active: boolean }): string {\n  return `${item.id}: ${item.name} (${item.active})`;\n}',
    hint: "noImplicitAny means you need to prevent Typescript from inferring 'any' type for the item parameter",
  },

  // Question 4 - Variables and Primitive Types (1 point)
  {
    type: QuestionType.MultipleChoice,
    question:
      "When should we favor using undefined instead of null in TypeScript?",
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
    starterCode:
      "type ID = string | number;\n\nfunction getById(id: ID): Promise<object | null> {\n  // TODO: implement\n  return Promise.resolve(null);\n}",
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
    type: QuestionType.TextInput,
    question:
      "Explain the difference between extends and implements in TypeScript classes and when you would use each one.",
    hint: "remember the dependency on interfaces",
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
    starterCode:
      'type ProductTuple = [id: number, name: string, inStock: boolean];\n\nconst p: ProductTuple = [1, "Socks", true];',
    hint: "Remember Tuples are special arrays that can have different types at each index",
  },

  // Question 13 - Arrays Tuples and Objects (3 points)
  {
    type: QuestionType.CodeCompletion,
    question:
      'The following code fails type checking. Fix the types only:\n\nconst product = {\n  id: "100",\n  name: "Socks",\n  price: 9.99\n};\n\nfunction printPrice(p: { id: number; price: number }) {\n  console.log(p.price);\n}\n\nprintPrice(product);',
    starterCode:
      'const product = {\n  id: 100,\n  name: "Socks",\n  price: 9.99\n};\n\nfunction printPrice(p: { id: number; price: number }) {\n  console.log(p.price);\n}\n\nprintPrice(product);',
    hint: "The id property should be a number, not a string",
  },

  // Question 14 - Arrays Tuples and Objects (2 points)
  {
    type: QuestionType.TextInput,
    question:
      "Explain why one would explicitly declare an object type when TypeScript can often infer it from the assigned value.",
    hint: "",
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
    starterCode:
      "interface IUser {\n  id: number;\n  name: string;\n  isActive?: boolean;\n  greet(): string;\n}\n\nclass User implements IUser {\n  constructor(\n    public id: number,\n    public name: string,\n    public isActive?: boolean\n  ) {}\n\n  greet(): string {\n    return `Hello, ${this.name}!`;\n  }\n}",
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
    starterCode:
      'interface Product {\n  id: number;\n  name: string;\n}\n\nfunction logProduct(p: Product): void {\n  console.log(p.id, p.name);\n}\n\nconst x = { id: 1, name: "Hat", color: "red" };\nlogProduct(x);',
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
    starterCode:
      "interface CartItem {\n  productId: number;\n  quantity: number;\n  notes?: string;\n}\n\nfunction totalItems(items: CartItem[]): number {\n  return items.reduce((sum, item) => sum + item.quantity, 0);\n}",
    hint: "Use array methods like reduce() or a loop to sum quantities",
  },
];
