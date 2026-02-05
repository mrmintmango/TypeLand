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

// Using tuples for coordinates [row, column]
export type Coordinate = readonly [number, number];

// Tuple storing collectible with its location and kind
export type CollectibleEntry = readonly [Coordinate, CollectibleKind];

// Terrain cell structure
export type TerrainCell = {
  readonly material: GroundMaterial;
  readonly canTraverse: boolean;
};
