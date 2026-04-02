// Assignment 1: TypeScript Basics
// Instructions: Complete the following exercises to practice TypeScript fundamentals
// TODO: Declare a variable called 'RestaurantName' of type string and assign it the value "TypeLand Diner".
export const RestaurantName = "Typeland Diner";
// TODO: Declare a variable called 'NumberOfTables' of type number and assign it the value 20.
export const NumberOfTables = 20;
// TODO: Declare a variable called 'IsOpen' of type boolean and assign it the value true.
export const IsOpen = true;
// TODO: Create a function called 'greetCustomer' that takes a string parameter 'customerName' and returns a greeting message in the format "Welcome to TypeLand Diner, [customerName]!".
export function greetCustomer(customerName) {
    // Your code here
    return `Welcome to TypeLand Diner, ${customerName}!`;
}
// TODO: Create a function called 'calculateTotal' that takes two number parameters 'price' and 'quantity', and returns the total cost by multiplying them together.
export function calculateTotal(price, quantity) {
    // Your code here
    return price * quantity;
}
// TODO: Create a function called 'isRestaurantOpen' that takes a boolean parameter 'currentStatus' and returns a message indicating whether the restaurant is open or closed based on the value of 'currentStatus'.
export function isRestaurantOpen(currentStatus) {
    // Your code here
    return `TypeLand Diner is currently ${currentStatus ? "open." : "closed."}`;
}
// TODO: Create a variable called 'menu' that is an array of 'MenuItem' objects. Add at least three items to the menu with different values for the properties.
export const menu = [
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
