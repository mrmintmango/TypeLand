// Core enums for the adventure game
export enum MovementKey {
  NORTH
  SOUTH 
  EAST 
  WEST
}

export enum GroundMaterial {
  MEADOW = 'MEADOW',
  STONE = 'STONE',
  LAKE = 'LAKE',
  SAND = 'SAND'
}

export CollectibleKind {
  TREASURE_CHEST = 'TREASURE_CHEST',
  MAGIC_ORB = 'MAGIC_ORB',
  ANCIENT_SCROLL = 'ANCIENT_SCROLL',
  CRYSTAL_GEM = 'CRYSTAL_GEM'
}

// Use tuples for coordinates [row, column]


// Tuple storing collectible with its location and kind
export type CollectibleEntry = readonly [Coordinate, CollectibleKind];

// Terrain cell structure
export type TerrainCell = {
  readonly material: GroundMaterial;
  readonly canTraverse: 
};

// ===== WEAPON SYSTEM TYPES =====

// Type Alias: Weapon category type
export type WeaponCategory = 'melee' | 'ranged' | 'magic';

// Type Alias: Weapon rarity levels
export type WeaponRarity = 'common' | 'rare' | 'legendary';

// Interface: Defines the structure of a weapon object
export interface Weapon {
  readonly name: string;
  readonly damage: number;
  readonly category: WeaponCategory;
  readonly rarity: WeaponRarity;
  readonly emoji: string;
  readonly description: string;
}

// Type Alias: Object type for weapon stats
export type WeaponStats = {
  totalDamage: number;
  weaponCount: number;
};
