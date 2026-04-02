import { AdventureEngine } from './adventure.js';
import { MovementKey, GroundMaterial, CollectibleKind } from './definitions.js';
class UIRenderer {
    constructor() {
        this.cellSize = 35;
        this.engine = new AdventureEngine();
        this.canvasElement = document.getElementById('gameCanvas');
        this.ctx = this.canvasElement.getContext('2d');
        this.setupCanvas();
        this.attachKeyboardHandlers();
        this.renderFrame();
    }
    setupCanvas() {
        const world = this.engine.getWorldGrid();
        this.canvasElement.width = world.getColCount() * this.cellSize;
        this.canvasElement.height = world.getRowCount() * this.cellSize;
    }
    attachKeyboardHandlers() {
        const keyMappings = {
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
            // Weapon switching controls
            if (event.key === 'q' || event.key === 'Q') {
                event.preventDefault();
                this.engine.switchToPreviousWeapon();
                this.renderFrame();
                this.updateStatsDisplay();
            }
            else if (event.key === 'e' || event.key === 'E') {
                event.preventDefault();
                this.engine.switchToNextWeapon();
                this.renderFrame();
                this.updateStatsDisplay();
            }
        });
    }
    getMaterialColor(material) {
        const colorMap = {
            [GroundMaterial.MEADOW]: '#7ec850',
            [GroundMaterial.STONE]: '#8b8680',
            [GroundMaterial.LAKE]: '#4a90e2',
            [GroundMaterial.SAND]: '#f5deb3',
        };
        return colorMap[material];
    }
    getCollectibleSymbol(kind) {
        const symbolMap = {
            [CollectibleKind.TREASURE_CHEST]: '💎',
            [CollectibleKind.MAGIC_ORB]: '🔮',
            [CollectibleKind.ANCIENT_SCROLL]: '📜',
            [CollectibleKind.CRYSTAL_GEM]: '💠',
        };
        return symbolMap[kind];
    }
    renderFrame() {
        const world = this.engine.getWorldGrid();
        // Draw terrain grid
        for (let r = 0; r < world.getRowCount(); r++) {
            for (let c = 0; c < world.getColCount(); c++) {
                const coords = [r, c];
                const material = this.engine.getMaterialAt(coords);
                if (material !== undefined) {
                    this.ctx.fillStyle = this.getMaterialColor(material);
                    this.ctx.fillRect(c * this.cellSize, r * this.cellSize, this.cellSize, this.cellSize);
                    // Draw grid lines
                    this.ctx.strokeStyle = '#33333320';
                    this.ctx.strokeRect(c * this.cellSize, r * this.cellSize, this.cellSize, this.cellSize);
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
            this.ctx.fillText(this.getCollectibleSymbol(kind), c * this.cellSize + this.cellSize / 2, r * this.cellSize + this.cellSize / 2);
        });
        // Draw hero
        const heroCoords = this.engine.getHeroLocation();
        const [heroR, heroC] = heroCoords;
        this.ctx.font = '28px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('🧙', heroC * this.cellSize + this.cellSize / 2, heroR * this.cellSize + this.cellSize / 2);
        // Draw equipped weapon next to hero
        const hero = this.engine.getHero();
        const equippedWeapon = hero.getEquippedWeapon();
        this.ctx.font = '18px Arial';
        this.ctx.fillText(equippedWeapon.emoji, heroC * this.cellSize + this.cellSize / 2 + 12, heroR * this.cellSize + this.cellSize / 2 - 10);
    }
    updateStatsDisplay() {
        const stats = this.engine.getGameStats();
        const statsElement = document.getElementById('stats');
        if (statsElement) {
            const hero = this.engine.getHero();
            const backpack = hero.getBackpackContents();
            // Count each type using array methods
            const counts = {
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
        <div class="weapon-info">
          <h4>⚔️ Equipped Weapon:</h4>
          <p>${this.getCurrentWeaponDisplay()}</p>
          <p style="font-size: 0.9em; color: #666;">Press Q/E to switch weapons</p>
          ${this.getWeaponListDisplay()}
        </div>
      `;
        }
    }
    // Display current weapon information using the Weapon interface
    getCurrentWeaponDisplay() {
        const hero = this.engine.getHero();
        const weapon = hero.getEquippedWeapon();
        const rarityColor = weapon.rarity === 'legendary' ? '#ff6600' :
            weapon.rarity === 'rare' ? '#9966ff' : '#666';
        return `
      <strong style="color: ${rarityColor};">
        ${weapon.emoji} ${weapon.name}
      </strong><br/>
      <span style="font-size: 0.9em;">
        Damage: ${weapon.damage} | Type: ${weapon.category}<br/>
        ${weapon.description}
      </span>
    `;
    }
    // Display all available weapons from Objects array
    getWeaponListDisplay() {
        const hero = this.engine.getHero();
        const allWeapons = hero.getAllWeapons();
        const currentWeapon = hero.getEquippedWeapon();
        const weaponList = allWeapons.map(weapon => {
            const isEquipped = weapon === currentWeapon;
            const style = isEquipped ? 'font-weight: bold; color: #00aa00;' : 'color: #888;';
            return `<div style="${style}; font-size: 0.85em;">
        ${isEquipped ? '▶' : '  '} ${weapon.emoji} ${weapon.name} (${weapon.damage} dmg)
      </div>`;
        }).join('');
        return `<div style="margin-top: 8px;"><strong>Arsenal:</strong><br/>${weaponList}</div>`;
    }
}
// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
    new UIRenderer();
});
//# sourceMappingURL=renderer.js.map