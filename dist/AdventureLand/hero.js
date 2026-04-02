// ===== WEAPON OBJECTS =====
// Creating weapon objects that implement the Weapon interface
export const AVAILABLE_WEAPONS = [
    {
    //create a weapon object for the Hero to use in the game.
    },
    {
    //create another weapon here
    },
    {
    // and here
    },
    {
    // here too
    },
    {
    // after you make one here, you should have a total of 5 weapons in the game.
    // Each weapon should have a unique value for each property, and the description should be fun and creative!
    }
];
export class Hero {
    constructor(startCoords) {
        this.coords = startCoords;
        this.backpack = [];
        this.stepsTaken = 0;
        // Initialize weapon system
        this.weaponInventory = [...AVAILABLE_WEAPONS];
        this.currentWeapon = this.weaponInventory[0]; // Start with first weapon
    }
    relocate(newCoords) {
        this.coords = newCoords;
        this.stepsTaken++;
    }
    getCurrentCoords() {
        return this.coords;
    }
    storeCollectible(item) {
        this.backpack = [...this.backpack, item];
    }
    getBackpackContents() {
        return [...this.backpack];
    }
    getTotalSteps() {
        return this.stepsTaken;
    }
    countCollectibles() {
        return this.backpack.length;
    }
    // Count specific types using array filter
    countByKind(kind) {
        return this.backpack.filter(item => item === kind).length;
    }
    // ===== WEAPON METHODS =====
    // Get currently equipped weapon
    getEquippedWeapon() {
        return this.currentWeapon;
    }
    // Get all weapons in inventory
    getAllWeapons() {
        return [...this.weaponInventory];
    }
    // Equip a weapon by index
    equipWeapon(weaponIndex) {
        if (weaponIndex >= 0 && weaponIndex < this.weaponInventory.length) {
            this.currentWeapon = this.weaponInventory[weaponIndex];
            return true;
        }
        return false;
    }
    // Equip next weapon in inventory (for cycling)
    equipNextWeapon() {
        const currentIndex = this.weaponInventory.indexOf(this.currentWeapon);
        const nextIndex = (currentIndex + 1) % this.weaponInventory.length;
        this.currentWeapon = this.weaponInventory[nextIndex];
    }
    // Equip previous weapon in inventory
    equipPreviousWeapon() {
        const currentIndex = this.weaponInventory.indexOf(this.currentWeapon);
        const previousIndex = currentIndex === 0
            ? this.weaponInventory.length - 1
            : currentIndex - 1;
        this.currentWeapon = this.weaponInventory[previousIndex];
    }
    // Calculate total weapon stats using Type Alias
    getWeaponStats() {
        const totalDamage = this.weaponInventory.reduce((sum, weapon) => sum + weapon.damage, 0);
        return {
            totalDamage,
            weaponCount: this.weaponInventory.length
        };
    }
}
//# sourceMappingURL=hero.js.map