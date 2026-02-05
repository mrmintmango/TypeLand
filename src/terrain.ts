import { GroundMaterial, TerrainCell, Coordinate, CollectibleEntry, CollectibleKind } from './definitions.js';

export class WorldTerrain {
  private grid: TerrainCell[][];
  private treasures: CollectibleEntry[];
  private gridRows: number;
  private gridCols: number;

  constructor(rows: number, cols: number) {
    this.gridRows = rows;
    this.gridCols = cols;
    this.grid = [];
    this.treasures = [];
    this.buildTerrain();
    this.scatterTreasures();
  }

  private buildTerrain(): void {
    const materialPatterns: GroundMaterial[] = [
      GroundMaterial.MEADOW,
      GroundMaterial.STONE,
      GroundMaterial.SAND,
      GroundMaterial.LAKE
    ];

    for (let r = 0; r < this.gridRows; r++) {
      const rowCells: TerrainCell[] = [];
      
      for (let c = 0; c < this.gridCols; c++) {
        let cellMaterial: GroundMaterial;
        let traversable: boolean;

        // Create borders with stone
        if (r === 0 || r === this.gridRows - 1 || c === 0 || c === this.gridCols - 1) {
          cellMaterial = GroundMaterial.STONE;
          traversable = false;
        } 
        // Create lake obstacles using pattern
        else if ((r * c) % 11 === 0 || (r + c) % 13 === 0) {
          cellMaterial = GroundMaterial.LAKE;
          traversable = false;
        }
        // Sand paths
        else if ((r % 3 === 0 && c % 2 === 0) || (r % 2 === 0 && c % 3 === 0)) {
          cellMaterial = GroundMaterial.SAND;
          traversable = true;
        }
        // Default meadow
        else {
          cellMaterial = GroundMaterial.MEADOW;
          traversable = true;
        }

        rowCells.push({ material: cellMaterial, canTraverse: traversable });
      }
      
      this.grid.push(rowCells);
    }
  }

  private scatterTreasures(): void {
    // Array of collectible tuples
    const treasureLocations: CollectibleEntry[] = [
      [[2, 4], CollectibleKind.TREASURE_CHEST],
      [[5, 7], CollectibleKind.MAGIC_ORB],
      [[3, 10], CollectibleKind.ANCIENT_SCROLL],
      [[8, 5], CollectibleKind.CRYSTAL_GEM],
      [[6, 12], CollectibleKind.TREASURE_CHEST],
      [[11, 8], CollectibleKind.MAGIC_ORB],
      [[9, 3], CollectibleKind.CRYSTAL_GEM],
      [[7, 9], CollectibleKind.ANCIENT_SCROLL],
    ];

    this.treasures = [...treasureLocations];
  }

  getCellAt(coords: Coordinate): TerrainCell | undefined {
    const [r, c] = coords;
    
    if (r < 0 || r >= this.gridRows || c < 0 || c >= this.gridCols) {
      return undefined;
    }
    
    return this.grid[r]?.[c];
  }

  canWalkOn(coords: Coordinate): boolean {
    const cell = this.getCellAt(coords);
    return cell !== undefined && cell.canTraverse;
  }

  findTreasureAt(coords: Coordinate): CollectibleKind | undefined {
    const [targetRow, targetCol] = coords;
    
    const foundTreasure = this.treasures.find(([location, _kind]) => {
      const [r, c] = location;
      return r === targetRow && c === targetCol;
    });

    return foundTreasure?.[1];
  }

  removeTreasure(coords: Coordinate): void {
    const [targetRow, targetCol] = coords;
    
    this.treasures = this.treasures.filter(([location, _kind]) => {
      const [r, c] = location;
      return !(r === targetRow && c === targetCol);
    });
  }

  getRowCount(): number {
    return this.gridRows;
  }

  getColCount(): number {
    return this.gridCols;
  }

  getRemainingTreasures(): CollectibleEntry[] {
    return [...this.treasures];
  }
}
