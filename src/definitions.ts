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
