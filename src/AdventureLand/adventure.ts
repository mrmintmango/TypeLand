import { Hero } from './hero.js';
import { WorldTerrain } from './terrain.js';
import { MovementKey, Coordinate, GroundMaterial } from './definitions.js';

export class AdventureEngine {
  private protagonist: Hero;
  private world: WorldTerrain;
  private movementDeltas: Map<MovementKey, Coordinate>;

  constructor() {
    this.world = new WorldTerrain(16, 16);
    this.protagonist = new Hero([1, 1]);
    
    // Using Map to store movement deltas as tuples
    this.movementDeltas = new Map<MovementKey, Coordinate>([
      [MovementKey.NORTH, [-1, 0]],
      [MovementKey.SOUTH, [1, 0]],
      [MovementKey.WEST, [0, -1]],
      [MovementKey.EAST, [0, 1]],
    ]);
  }

  attemptMove(direction: MovementKey): boolean {
    const currentLocation = this.protagonist.getCurrentCoords();
    const delta = this.movementDeltas.get(direction);
    
    if (!delta) {
      return false;
    }

    const [currentR, currentC] = currentLocation;
    const [deltaR, deltaC] = delta;
    const targetLocation: Coordinate = [currentR + deltaR, currentC + deltaC];

    if (!this.world.canWalkOn(targetLocation)) {
      return false;
    }

    this.protagonist.relocate(targetLocation);

    // Check for treasure collection
    const foundTreasure = this.world.findTreasureAt(targetLocation);
    if (foundTreasure !== undefined) {
      this.protagonist.storeCollectible(foundTreasure);
      this.world.removeTreasure(targetLocation);
    }

    return true;
  }

  getHeroLocation(): Coordinate {
    return this.protagonist.getCurrentCoords();
  }

  getWorldGrid(): WorldTerrain {
    return this.world;
  }

  getHero(): Hero {
    return this.protagonist;
  }

  getMaterialAt(coords: Coordinate): GroundMaterial | undefined {
    const cell = this.world.getCellAt(coords);
    return cell?.material;
  }

  getGameStats(): { steps: number; collected: number; remaining: number } {
    return {
      steps: this.protagonist.getTotalSteps(),
      collected: this.protagonist.countCollectibles(),
      remaining: this.world.getRemainingTreasures().length
    };
  }

  // Weapon management methods
  switchToNextWeapon(): void {
    this.protagonist.equipNextWeapon();
  }

  switchToPreviousWeapon(): void {
    this.protagonist.equipPreviousWeapon();
  }
}
