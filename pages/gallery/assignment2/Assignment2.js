// ============================================
// 🤴 ROYALS AND ROBBERS ASSIGNMENT 🥷
// ============================================
// Read Assignment2_Instructions.txt for full details!
// ============================================
// PART 2: THE ROYAL FAMILY
// ============================================
// TODO 4: Create the King object
// Hint: Use the Royal interface structure
export const King = {
    // Fill in all required properties
    // name: "King Theodore"
    // age: 52
    // title: "King"
    // kingdom: "TypeLand"
    // wealth: 1000000
    // introduce() { return "I am King Theodore, ruler of TypeLand!"; }
    // decree(message) { return `By royal decree: ${message}`; }
    name: "King Theodore",
    age: 52,
    title: "King",
    kingdom: "Typeland",
    wealth: 1000000,
    introduce(Title) {
        return `I am ${Title} ruler of TypeLand!`;
    },
    decree(Message) {
        return `By royal decree: ${Message}`;
    }
};
// TODO 5: Create the Queen object
export const Queen = {
    // Fill in all required properties
    name: "Queen Margaret",
    age: 45,
    title: "Queen",
    kingdom: "Typeland",
    wealth: 300000,
    introduce(Name) {
        return `I am ${Name} of the TypeLand kingdom.`;
    },
    decree(Message) {
        return `By royal decree: ${Message}`;
    }
};
// TODO 6: Create the Prince object
export const Prince = {
    // Fill in all required properties
    name: "Prince Edward",
    age: 19,
    title: "Prince",
    kingdom: "Typeland",
    wealth: 100000,
    introduce(Name) {
        return `I am ${Name} of the TypeLand kingdom and heir to the throne.`;
    },
    decree(Message) {
        return `By royal decree: ${Message}`;
    }
};
// TODO 7: Create the Princess object
export const Princess = {
    // Fill in all required properties
    name: "Princess Eleanor",
    age: 16,
    title: "Princess",
    kingdom: "Typeland",
    wealth: 50000,
    introduce(Name) {
        return `I am ${Name} of the TypeLand kingdom.`;
    },
    decree(Message) {
        return `By royal decree: ${Message}`;
    }
};
// TODO 8: Create the royalFamily array
export const royalFamily = [
    // Add all royal family members here
    Princess,
    Prince,
    Queen,
    King
];
// ============================================
// PART 3: THE ROBBER BAND
// ============================================
// TODO 9: Create the RobberLeader object
// Hint: Use the Criminal interface structure
export const RobberLeader = {
    // Fill in all required properties
    // name: "Marcus Shadowblade"
    // age: 35
    // alias: "The Shadow King"
    // crimesCommitted: 47
    // isWanted: true
    // introduce() { return "They call me The Shadow King..."; }
    // steal(target) { return `The Shadow King stole from ${target}!`; }
    name: "Marcus Shadowblade",
    age: 35,
    alias: "The Shadow King",
    crimesCommitted: 47,
    isWanted: true,
    introduce() {
        return "They call me The Shadow King...";
    },
    steal(target) {
        return `The Shadow King stole from ${target}!`;
    }
};
// TODO 10: Create the Thief object
export const Thief = {
    // Fill in all required properties
    name: "William Budge",
    age: 24,
    alias: "Budge",
    crimesCommitted: 17,
    isWanted: true,
    introduce() {
        return "I'm the budge. I'm the first in and last out.";
    },
    steal(target) {
        return `Budge just broke into ${target}!`;
    }
};
// TODO 11: Create the Bandit object
export const Bandit = {
    // Fill in all required properties
    name: "Henry Daythef",
    age: 31,
    alias: "The Foyst",
    crimesCommitted: 92,
    isWanted: true,
    introduce() {
        return "They call me The Foyst, watch your pockets...";
    },
    steal(target) {
        return `The Foyst stole from ${target}!`;
    }
};
// TODO 12: Create the robberBand array
export const robberBand = [
    // Add all robber band members here
    RobberLeader,
    Thief,
    Bandit
];
// ============================================
// PART 4: UTILITY FUNCTIONS
// ============================================
// TODO 13: Create calculateTotalWealth function
// Takes an array of Royal objects and returns the total wealth
export function calculateTotalWealth(royals) {
    // Your code here
    return royals.reduce((total, royal) => total + royal.wealth, 0); // Replace with actual calculation
}
// TODO 14: Create getMostWantedCriminal function
// Takes an array of Criminal objects and returns the one with most crimes
export function getMostWantedCriminal(criminals) {
    // Your code here
    return criminals.reduce((highest, num) => num.crimesCommitted > highest.crimesCommitted ? num : highest); // Replace with actual logic
}
// TODO 15: Create simulateHeist function
// Takes a Criminal and a Royal, returns a heist description string
export function simulateHeist(criminal, royal) {
    // Your code here
    // Example: "The Shadow King attempted to steal from King Theodore!"
    return `${criminal.alias} just robbed ${royal.name}! Seize them!`;
}
// ============================================
// 🎉 YOU'RE DONE!
// Run "npm run build" and open Assignment2.html
// ============================================
