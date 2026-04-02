// Assignment 1: TypeScript Basics
// Instructions: Complete the following exercises to practice TypeScript fundamentals

// TODO: Declare a variable called 'RestaurantName' of type string and assign it the value "TypeLand Diner".
export const RestaurantName: string = "Typeland Diner";

// TODO: Declare a variable called 'NumberOfTables' of type number and assign it the value 20.
export const NumberOfTables: number = 20;

// TODO: Declare a variable called 'IsOpen' of type boolean and assign it the value true.
export const IsOpen: boolean = true;

// TODO: Create a function called 'greetCustomer' that takes a string parameter 'customerName' and returns a greeting message in the format "Welcome to TypeLand Diner, [customerName]!".
export function greetCustomer(customerName: string): string {
  // Your code here
  return `Welcome to TypeLand Diner, ${customerName}!`;
}

// TODO: Create a function called 'calculateTotal' that takes two number parameters 'price' and 'quantity', and returns the total cost by multiplying them together.
export function calculateTotal(price: number, quantity: number): number {
  // Your code here
  return price * quantity;
}

// TODO: Create a function called 'isRestaurantOpen' that takes a boolean parameter 'currentStatus' and returns a message indicating whether the restaurant is open or closed based on the value of 'currentStatus'.
export function isRestaurantOpen(currentStatus: boolean): string {
  // Your code here
  return `TypeLand Diner is currently ${currentStatus ? "open." : "closed."}`;
}

// TODO: Create an interface called 'MenuItem' with properties 'name' (string), 'price' (number), and 'isVegetarian' (boolean).
export interface MenuItem {
  // Your code here
  name: string;
  price: number;
  isVegetarian: boolean;
}

// TODO: Create a variable called 'menu' that is an array of 'MenuItem' objects. Add at least three items to the menu with different values for the properties.
export const menu: MenuItem[] = [
  {
    name: "venison",
    price: 25,
    isVegetarian: false,
  },
  {
    name: "sweet roll",
    price: 5,
    isVegetarian: true,
  },
  {
    name: "horker stew",
    price: 8,
    isVegetarian: false,
  },
];

// Write your code below:
