import { QuizQuestion, QuestionType } from "./quizDefinitions.js";

export const beginnerQuiz2Questions: QuizQuestion[] = [
  // Question 1 - Objects & Interfaces (1 point)
  {
    type: QuestionType.MultipleChoice,
    question:
      "What is the correct syntax for an optional property in an interface?",
    options: [
      "propertyName?: type;",
      "optional propertyName: type;",
      "propertyName: type?;",
      "propertyName: type | undefined;",
    ],
  },

  // Question 2 - Objects & Interfaces (1 point)
  {
    type: QuestionType.MultipleChoice,
    question:
      "Which keyword prevents a property from being modified after initialization?",
    options: ["readonly", "const", "final", "immutable"],
  },

  // Question 3 - Objects & Interfaces (2 points)
  {
    type: QuestionType.TextInput,
    question:
      "What is the main difference between an interface and a type alias for defining object shapes?",
  },

  // Question 4 - Objects & Interfaces (2 points)
  {
    type: QuestionType.TextInput,
    question: "What does it mean when an interface extends another interface?",
  },

  // Question 5 - Objects & Interfaces (3 points)
  {
    type: QuestionType.CodeCompletion,
    question:
      "Complete this interface definition with proper type annotations:",
    starterCode:
      'interface GameCharacter {\n  name\n  health\n  level\n  isActive\n  inventory\n}\n\nconst player: GameCharacter = {\n  name: "Hero",\n  health: 100,\n  level: 5,\n  isActive: true,\n  inventory: ["sword", "shield"]\n};',
  },

  // Question 6 - Objects & Interfaces (1 point)
  {
    type: QuestionType.MultipleChoice,
    question: "How do you define a method signature in an interface?",
    options: [
      "methodName(param: type): returnType;",
      "function methodName(param: type): returnType;",
      "methodName: (param: type) => returnType;",
      "Both methodName(param: type): returnType; and methodName: (param: type) => returnType;",
    ],
  },

  // Question 7 - Objects & Interfaces (2 points)
  {
    type: QuestionType.TextInput,
    question:
      "What happens when you try to assign a value to a readonly property after object creation?",
  },

  // Question 8 - Objects & Interfaces (1 point)
  {
    type: QuestionType.MultipleChoice,
    question:
      "Which syntax is used to extend an interface from another interface?",
    options: [
      "interface Child extends Parent {}",
      "interface Child implements Parent {}",
      "interface Child inherits Parent {}",
      "interface Child: Parent {}",
    ],
  },

  // Question 9 - Objects & Interfaces (3 points)
  {
    type: QuestionType.CodeCompletion,
    question:
      "Create an interface 'Vehicle' with properties: brand (string), year (number), isElectric (optional boolean). Then create an interface 'Car' that extends Vehicle and adds 'doors' (number):",
    starterCode: "",
  },

  // Question 10 - Objects & Interfaces (2 points)
  {
    type: QuestionType.TextInput,
    question:
      "When should you use an interface versus a type alias in TypeScript?",
  },

  // Question 11 - Type Inference & Generics (1 point)
  {
    type: QuestionType.MultipleChoice,
    question: "What type does TypeScript infer for: let count = 42;",
    options: ["number", "any", "integer", "number | undefined"],
  },

  // Question 12 - Type Inference & Generics (1 point)
  {
    type: QuestionType.MultipleChoice,
    question: "What is the syntax for defining a generic function parameter?",
    options: [
      "function name<T>(param: T): T {}",
      "function name(param: <T>): T {}",
      "function name<T: param>(): T {}",
      "function name(T param): T {}",
    ],
  },

  // Question 13 - Type Inference & Generics (2 points)
  {
    type: QuestionType.TextInput,
    question:
      "Why should function parameters always have explicit type annotations even when TypeScript has inference?",
  },

  // Question 14 - Type Inference & Generics (2 points)
  {
    type: QuestionType.TextInput,
    question: "What problem do generics solve in TypeScript?",
  },

  // Question 15 - Type Inference & Generics (3 points)
  {
    type: QuestionType.CodeCompletion,
    question:
      "Write a generic function 'wrapInArray' that takes a value of any type and returns an array containing that value:",
    starterCode: "",
  },

  // Question 16 - Type Inference & Generics (4 points)
  {
    type: QuestionType.CodeCompletion,
    question:
      "Create a generic class 'DataStore<T>' with private property 'items' (array of T), and methods: 'add(item: T): void', 'getAll(): T[]', and 'findById(id: number): T | undefined'. The items should have an 'id' property:",
    starterCode: "",
  },

  // Question 17 - Type Inference & Generics (3 points)
  {
    type: QuestionType.CodeCompletion,
    question:
      "Create a generic interface 'Result<T>' with properties: success (boolean), data (T), and message (string). Then create a variable of type Result<number>:",
    starterCode: "",
  },

  // Question 18 - Type Inference & Generics (2 points)
  {
    type: QuestionType.TextInput,
    question:
      "What is the conventional naming for generic type parameters and why?",
  },

  // Question 19 - Type Inference & Generics (3 points)
  {
    type: QuestionType.CodeCompletion,
    question:
      "Write a generic function 'getLastElement' that takes an array of any type and returns the last element (or undefined if empty):",
    starterCode: "",
  },

  // Question 20 - Type Inference & Generics (1 point)
  {
    type: QuestionType.MultipleChoice,
    question: "Which built-in TypeScript types use generics?",
    options: [
      "Array<T>, Promise<T>, Map<K, V>",
      "string, number, boolean",
      "interface, type, class",
      "let, const, var",
    ],
  },
];
