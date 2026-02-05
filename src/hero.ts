import { Coordinate, CollectibleKind } from './definitions.js';

export class Hero {
  private coords:
  private backpack:
  private stepsTaken:

  constructor(startCoords: Coordinate) {
    this.coords = startCoords;
    this.backpack = [];
    this.stepsTaken = 0;
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
}
