import {
  Coordinate,
  CollectibleKind,
  Weapon,
  WeaponStats,
} from "./definitions.js";

// ===== WEAPON OBJECTS =====
// Creating weapon objects that implement the Weapon interface

export const AVAILABLE_WEAPONS: Weapon[] = [
  {
    name: "Wooden Staff",
    damage: 5,
    category: "melee",
    rarity: "common",
    emoji: "🪵",
    description: "A simple wooden staff for beginners",
  },
  {
    name: "Steel Sword",
    damage: 15,
    category: "melee",
    rarity: "rare",
    emoji: "⚔️",
    description: "A finely crafted steel blade",
  },
  {
    name: "Enchanted Bow",
    damage: 20,
    category: "ranged",
    rarity: "rare",
    emoji: "🏹",
    description: "A bow imbued with magical power",
  },
  {
    name: "Fire Wand",
    damage: 25,
    category: "magic",
    rarity: "legendary",
    emoji: "🔥",
    description: "Channel the power of flames",
  },
  {
    name: "Crystal Staff",
    damage: 30,
    category: "magic",
    rarity: "legendary",
    emoji: "✨",
    description: "A legendary staff of pure crystal",
  },
];

export class Hero {
  private coords: Coordinate;
  private backpack: CollectibleKind[];
  private stepsTaken: number;
  private currentWeapon: Weapon; // Hero's equipped weapon
  private weaponInventory: Weapon[]; // All available weapons

  constructor(startCoords: Coordinate) {
    this.coords = startCoords;
    this.backpack = [];
    this.stepsTaken = 0;

    // Initialize weapon system
    this.weaponInventory = [...AVAILABLE_WEAPONS];
    this.currentWeapon = this.weaponInventory[0]; // Start with first weapon
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
    return this.backpack.filter((item) => item === kind).length;
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
    const previousIndex =
      currentIndex === 0 ? this.weaponInventory.length - 1 : currentIndex - 1;
    this.currentWeapon = this.weaponInventory[previousIndex];
  }

  // Calculate total weapon stats using Type Alias
  getWeaponStats(): WeaponStats {
    const totalDamage = this.weaponInventory.reduce(
      (sum, weapon) => sum + weapon.damage,
      0,
    );
    return {
      totalDamage,
      weaponCount: this.weaponInventory.length,
    };
  }
}
