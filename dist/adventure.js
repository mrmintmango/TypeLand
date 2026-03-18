import { Hero } from './hero.js';
import { WorldTerrain } from './terrain.js';
import { MovementKey } from './definitions.js';
export class AdventureEngine {
    constructor() {
        this.world = new WorldTerrain(16, 16);
        this.protagonist = new Hero([1, 1]);
        // Using Map to store movement deltas as tuples
        this.movementDeltas = new Map([
            [MovementKey.NORTH, [-1, 0]],
            [MovementKey.SOUTH, [1, 0]],
            [MovementKey.WEST, [0, -1]],
            [MovementKey.EAST, [0, 1]],
        ]);
    }
    attemptMove(direction) {
        const currentLocation = this.protagonist.getCurrentCoords();
        const delta = this.movementDeltas.get(direction);
        if (!delta) {
            return false;
        }
        const [currentR, currentC] = currentLocation;
        const [deltaR, deltaC] = delta;
        const targetLocation = [currentR + deltaR, currentC + deltaC];
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
    getHeroLocation() {
        return this.protagonist.getCurrentCoords();
    }
    getWorldGrid() {
        return this.world;
    }
    getHero() {
        return this.protagonist;
    }
    getMaterialAt(coords) {
        const cell = this.world.getCellAt(coords);
        return cell?.material;
    }
    getGameStats() {
        return {
            steps: this.protagonist.getTotalSteps(),
            collected: this.protagonist.countCollectibles(),
            remaining: this.world.getRemainingTreasures().length
        };
    }
    // Weapon management methods
    switchToNextWeapon() {
        this.protagonist.equipNextWeapon();
    }
    switchToPreviousWeapon() {
        this.protagonist.equipPreviousWeapon();
    }
}
//# sourceMappingURL=adventure.js.map