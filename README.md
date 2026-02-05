# TypeLand
A testing environment to learn new coding practices and techniques.

## 🏰 Mini RPG Adventure Game

A simple web-based RPG game built with TypeScript to practice using **Arrays**, **Tuples**, and **Enums**.

### Features

- **Move a wizard character** around a 16x16 grid map using Arrow Keys or WASD
- **Collect treasures** scattered across the map (8 collectibles total)
- **Track your progress** with real-time stats (steps taken, items collected)
- **Visual inventory** showing collected items by type

### TypeScript Concepts Demonstrated

#### Enums
- `MovementKey` - Directional movement (NORTH, SOUTH, EAST, WEST)
- `GroundMaterial` - Terrain types (MEADOW, STONE, LAKE, SAND)
- `CollectibleKind` - Item types (TREASURE_CHEST, MAGIC_ORB, ANCIENT_SCROLL, CRYSTAL_GEM)

#### Tuples
- `Coordinate` - Position represented as `[row, column]`
- `CollectibleEntry` - Collectible with location as `[Coordinate, CollectibleKind]`
- Movement deltas stored as coordinate tuples

#### Arrays
- 2D array (`TerrainCell[][]`) for the game map
- Array of collectible tuples for treasure placement
- Hero's backpack as an array of `CollectibleKind`
- Heavy use of array methods: `filter()`, `find()`, `findIndex()`, `forEach()`

### How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the TypeScript code:**
   ```bash
   npm run build
   ```

3. **Start a local web server:**
   ```bash
   python3 -m http.server 8080
   # or use any other HTTP server
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080`

5. **Play the game:**
   - Use Arrow Keys or WASD to move your wizard 🧙
   - Collect all 8 treasures scattered across the map!
   - Avoid lakes and stone borders (they block movement)

### Project Structure

```
TypeLand/
├── src/
│   ├── definitions.ts   # Enums and type definitions
│   ├── hero.ts          # Hero class with backpack (array)
│   ├── terrain.ts       # World map (2D array) and treasures
│   ├── adventure.ts     # Game engine and movement logic
│   └── renderer.ts      # Canvas rendering and UI updates
├── index.html           # Game HTML structure
├── styles.css           # Game styling
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

### Map Legend

- 🟩 **Meadow** - Walkable grass terrain
- 🟫 **Sand** - Walkable sandy paths
- 🟦 **Lake** - Blocked water areas
- ⬛ **Stone** - Blocked border walls

### Collectibles

- 💎 Treasure Chests
- 🔮 Magic Orbs
- 📜 Ancient Scrolls
- 💠 Crystal Gems

Enjoy your adventure! 🎮 
