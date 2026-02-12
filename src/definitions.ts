// Core enums for the adventure game
export enum MovementKey {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST'
}

export enum GroundMaterial {
  MEADOW = 'MEADOW',
  STONE = 'STONE',
  LAKE = 'LAKE',
  SAND = 'SAND'
}

export enum CollectibleKind {
  TREASURE_CHEST = 'TREASURE_CHEST',
  MAGIC_ORB = 'MAGIC_ORB',
  ANCIENT_SCROLL = 'ANCIENT_SCROLL',
  CRYSTAL_GEM = 'CRYSTAL_GEM'
}

// Use tuples for coordinates [row, column]
export type Coordinate = readonly [number, number];

// Tuple storing collectible with its location and kind
export type CollectibleEntry = readonly [Coordinate, CollectibleKind];

// Terrain cell structure
export type TerrainCell = {
  readonly material: GroundMaterial;
  readonly canTraverse: boolean;
};

// ===== WEAPON SYSTEM TYPES =====
// TODO: Implement the weapon system!!

// Type Alias: Weapon category type
// Create a WeaponCategory type alias that can either be 'melee', 'ranged', or 'magic'
// I'll do this one for you as an example, but you should create the WeaponRarity type alias and the Weapon interface on your own!
export type WeaponCategory = 'melee' | 'ranged' | 'magic';

// Type Alias: Weapon rarity levels
// Create a WeaponRarity type alias that can either be 'common', 'rare', or 'legendary'


// Type Alias: Object type for weapon stats
// Create a WeaponStats type alias that represents an object with totalDamage and weaponCount properties


// Interface: Defines the structure of a weapon object
// Create a Weapon interface that includes the following properties (each property should be readonly):
// - name: string
// - damage: number
// - category: WeaponCategory
// - rarity: WeaponRarity
// - emoji: string (a visual representation of the weapon)
// - description: string (a brief description of the weapon's characteristics and lore)


