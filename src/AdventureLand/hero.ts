import { Coordinate, CollectibleKind, Weapon, WeaponStats } from './definitions.js';

// ===== WEAPON OBJECTS =====
// Creating weapon objects that implement the Weapon interface

export const AVAILABLE_WEAPONS: Weapon[] = [
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
  private coords: Coordinate;
  private backpack: CollectibleKind[];
  private stepsTaken: number;
  private currentWeapon: Weapon;  // Hero's equipped weapon
  private weaponInventory: Weapon[];  // All available weapons

  constructor(startCoords: Coordinate) {
    this.coords = startCoords;
    this.backpack = [];
    this.stepsTaken = 0;
    
    // Initialize weapon system
    this.weaponInventory = [...AVAILABLE_WEAPONS];
    this.currentWeapon = this.weaponInventory[0];  // Start with first weapon
  }

  relocate(newCoords: Coordinate): void {
    this.coords = newCoords;
    this.stepsTaken++;
  }

  getCurrentCoords(): Coordinate {
    return this.coords;
  }

  storeCollectible(item: CollectibleKind): void {
    this.backpack = [...this.backpack, item];
  }

  getBackpackContents(): CollectibleKind[] {
    return [...this.backpack];
  }

  getTotalSteps(): number {
    return this.stepsTaken;
  }

  countCollectibles(): number {
    return this.backpack.length;
  }

  // Count specific types using array filter
  countByKind(kind: CollectibleKind): number {
    return this.backpack.filter(item => item === kind).length;
  }

  // ===== WEAPON METHODS =====
  
  // Get currently equipped weapon
  getEquippedWeapon(): Weapon {
    return this.currentWeapon;
  }

  // Get all weapons in inventory
  getAllWeapons(): Weapon[] {
    return [...this.weaponInventory];
  }

  // Equip a weapon by index
  equipWeapon(weaponIndex: number): boolean {
    if (weaponIndex >= 0 && weaponIndex < this.weaponInventory.length) {
      this.currentWeapon = this.weaponInventory[weaponIndex];
      return true;
    }
    return false;
  }

  // Equip next weapon in inventory (for cycling)
  equipNextWeapon(): void {
    const currentIndex = this.weaponInventory.indexOf(this.currentWeapon);
    const nextIndex = (currentIndex + 1) % this.weaponInventory.length;
    this.currentWeapon = this.weaponInventory[nextIndex];
  }

  // Equip previous weapon in inventory
  equipPreviousWeapon(): void {
    const currentIndex = this.weaponInventory.indexOf(this.currentWeapon);
    const previousIndex = currentIndex === 0 
      ? this.weaponInventory.length - 1 
      : currentIndex - 1;
    this.currentWeapon = this.weaponInventory[previousIndex];
  }

  // Calculate total weapon stats using Type Alias
  getWeaponStats(): WeaponStats {
    const totalDamage = this.weaponInventory.reduce((sum, weapon) => sum + weapon.damage, 0);
    return {
      totalDamage,
      weaponCount: this.weaponInventory.length
    };
  }
}
