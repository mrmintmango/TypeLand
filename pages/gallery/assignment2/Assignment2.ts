// ============================================
// 🤴 ROYALS AND ROBBERS ASSIGNMENT 🥷
// ============================================
// Read Assignment2_Instructions.txt for full details!

// ============================================
// PART 1: BASE INTERFACES
// ============================================

// TODO 1: Create a base "Person" interface
// Properties: name (string), age (number)
// Method: introduce() that returns a string
interface Person {
  // Add your properties and method here
}

// TODO 2: Create a "Royal" interface that EXTENDS Person
// Additional properties: title (string), readonly kingdom (string), wealth (number)
// Additional method: decree(message: string) that returns a string
interface Royal extends Person {
  // Add your properties and method here
}

// TODO 3: Create a "Criminal" interface that EXTENDS Person
// Additional properties: alias (string), crimesCommitted (number), isWanted (boolean)
// Additional method: steal(target: string) that returns a string
interface Criminal extends Person {
  // Add your properties and method here
}

// ============================================
// PART 2: THE ROYAL FAMILY
// ============================================

// TODO 4: Create the King object
// Hint: Use the Royal interface structure
export const King: Royal = {
  // Fill in all required properties
  // name: "King Theodore"
  // age: 52
  // title: "King"
  // kingdom: "TypeLand"
  // wealth: 1000000
  // introduce() { return "I am King Theodore, ruler of TypeLand!"; }
  // decree(message) { return `By royal decree: ${message}`; }
};

// TODO 5: Create the Queen object
export const Queen: Royal = {
  // Fill in all required properties
};

// TODO 6: Create the Prince object
export const Prince: Royal = {
  // Fill in all required properties
};

// TODO 7: Create the Princess object
export const Princess: Royal = {
  // Fill in all required properties
};

// TODO 8: Create the royalFamily array
export const royalFamily: Royal[] = [
  // Add all royal family members here
];

// ============================================
// PART 3: THE ROBBER BAND
// ============================================

// TODO 9: Create the RobberLeader object
// Hint: Use the Criminal interface structure
export const RobberLeader: Criminal = {
  // Fill in all required properties
  // name: "Marcus Shadowblade"
  // age: 35
  // alias: "The Shadow King"
  // crimesCommitted: 47
  // isWanted: true
  // introduce() { return "They call me The Shadow King..."; }
  // steal(target) { return `The Shadow King stole from ${target}!`; }
};

// TODO 10: Create the Thief object
export const Thief: Criminal = {
  // Fill in all required properties
};

// TODO 11: Create the Bandit object
export const Bandit: Criminal = {
  // Fill in all required properties
};

// TODO 12: Create the robberBand array
export const robberBand: Criminal[] = [
  // Add all robber band members here
];

// ============================================
// PART 4: UTILITY FUNCTIONS
// ============================================

// TODO 13: Create calculateTotalWealth function
// Takes an array of Royal objects and returns the total wealth
export function calculateTotalWealth(royals: Royal[]): number {
  // Your code here
  return 0; // Replace with actual calculation
}

// TODO 14: Create getMostWantedCriminal function
// Takes an array of Criminal objects and returns the one with most crimes
export function getMostWantedCriminal(criminals: Criminal[]): Criminal | null {
  // Your code here
  return null; // Replace with actual logic
}

// TODO 15: Create simulateHeist function
// Takes a Criminal and a Royal, returns a heist description string
export function simulateHeist(criminal: Criminal, royal: Royal): string {
  // Your code here
  // Example: "The Shadow King attempted to steal from King Theodore!"
  return "";
}

// ============================================
// 🎉 YOU'RE DONE!
// Run "npm run build" and open Assignment2.html
// ============================================
