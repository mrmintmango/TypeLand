import { AdventureEngine } from './adventure.js';
import { MovementKey, GroundMaterial, CollectibleKind, Coordinate } from './definitions.js';

class UIRenderer {
  private engine: AdventureEngine;
  private canvasElement: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private readonly cellSize = 35;

  constructor() {
    this.engine = new AdventureEngine();
    this.canvasElement = document.getElementById('gameCanvas') as HTMLCanvasElement;
    this.ctx = this.canvasElement.getContext('2d')!;
    
    this.setupCanvas();
    this.attachKeyboardHandlers();
    this.renderFrame();
  }

  private setupCanvas(): void {
    const world = this.engine.getWorldGrid();
    this.canvasElement.width = world.getColCount() * this.cellSize;
    this.canvasElement.height = world.getRowCount() * this.cellSize;
  }

  private attachKeyboardHandlers(): void {
    const keyMappings: Record<string, MovementKey> = {
      'ArrowUp': MovementKey.NORTH,
      'ArrowDown': MovementKey.SOUTH,
      'ArrowLeft': MovementKey.WEST,
      'ArrowRight': MovementKey.EAST,
      'w': MovementKey.NORTH,
      's': MovementKey.SOUTH,
      'a': MovementKey.WEST,
      'd': MovementKey.EAST,
    };

    document.addEventListener('keydown', (event) => {
      const direction = keyMappings[event.key];
      if (direction !== undefined) {
        event.preventDefault();
        const moved = this.engine.attemptMove(direction);
        if (moved) {
          this.renderFrame();
          this.updateStatsDisplay();
        }
      }
    });
  }

  private getMaterialColor(material: GroundMaterial): string {
    const colorMap: Record<GroundMaterial, string> = {
      [GroundMaterial.MEADOW]: '#7ec850',
      [GroundMaterial.STONE]: '#8b8680',
      [GroundMaterial.LAKE]: '#4a90e2',
      [GroundMaterial.SAND]: '#f5deb3',
    };
    return colorMap[material];
  }

  private getCollectibleSymbol(kind: CollectibleKind): string {
    const symbolMap: Record<CollectibleKind, string> = {
      [CollectibleKind.TREASURE_CHEST]: '💎',
      [CollectibleKind.MAGIC_ORB]: '🔮',
      [CollectibleKind.ANCIENT_SCROLL]: '📜',
      [CollectibleKind.CRYSTAL_GEM]: '💠',
    };
    return symbolMap[kind];
  }

  private renderFrame(): void {
    const world = this.engine.getWorldGrid();
    
    // Draw terrain grid
    for (let r = 0; r < world.getRowCount(); r++) {
      for (let c = 0; c < world.getColCount(); c++) {
        const coords: Coordinate = [r, c];
        const material = this.engine.getMaterialAt(coords);
        
        if (material !== undefined) {
          this.ctx.fillStyle = this.getMaterialColor(material);
          this.ctx.fillRect(
            c * this.cellSize,
            r * this.cellSize,
            this.cellSize,
            this.cellSize
          );
          
          // Draw grid lines
          this.ctx.strokeStyle = '#33333320';
          this.ctx.strokeRect(
            c * this.cellSize,
            r * this.cellSize,
            this.cellSize,
            this.cellSize
          );
        }
      }
    }

    // Draw remaining treasures
    const treasures = world.getRemainingTreasures();
    treasures.forEach(([coords, kind]) => {
      const [r, c] = coords;
      this.ctx.font = '24px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(
        this.getCollectibleSymbol(kind),
        c * this.cellSize + this.cellSize / 2,
        r * this.cellSize + this.cellSize / 2
      );
    });

    // Draw hero
    const heroCoords = this.engine.getHeroLocation();
    const [heroR, heroC] = heroCoords;
    this.ctx.font = '28px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(
      '🧙',
      heroC * this.cellSize + this.cellSize / 2,
      heroR * this.cellSize + this.cellSize / 2
    );
  }

  private updateStatsDisplay(): void {
    const stats = this.engine.getGameStats();
    const statsElement = document.getElementById('stats');
    
    if (statsElement) {
      const hero = this.engine.getHero();
      const backpack = hero.getBackpackContents();
      
      // Count each type using array methods
      const counts: Record<CollectibleKind, number> = {
        [CollectibleKind.TREASURE_CHEST]: backpack.filter(i => i === CollectibleKind.TREASURE_CHEST).length,
        [CollectibleKind.MAGIC_ORB]: backpack.filter(i => i === CollectibleKind.MAGIC_ORB).length,
        [CollectibleKind.ANCIENT_SCROLL]: backpack.filter(i => i === CollectibleKind.ANCIENT_SCROLL).length,
        [CollectibleKind.CRYSTAL_GEM]: backpack.filter(i => i === CollectibleKind.CRYSTAL_GEM).length,
      };

      statsElement.innerHTML = `
        <h3>Adventure Stats</h3>
        <p>Steps Taken: ${stats.steps}</p>
        <p>Items Collected: ${stats.collected} / ${stats.collected + stats.remaining}</p>
        <div class="inventory">
          <h4>Backpack:</h4>
          <p>💎 Treasure Chests: ${counts[CollectibleKind.TREASURE_CHEST]}</p>
          <p>🔮 Magic Orbs: ${counts[CollectibleKind.MAGIC_ORB]}</p>
          <p>📜 Ancient Scrolls: ${counts[CollectibleKind.ANCIENT_SCROLL]}</p>
          <p>💠 Crystal Gems: ${counts[CollectibleKind.CRYSTAL_GEM]}</p>
        </div>
      `;
    }
  }
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
  new UIRenderer();
});
