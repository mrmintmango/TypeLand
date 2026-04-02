// Core enums for the adventure game
export var MovementKey;
(function (MovementKey) {
    MovementKey["NORTH"] = "NORTH";
    MovementKey["SOUTH"] = "SOUTH";
    MovementKey["EAST"] = "EAST";
    MovementKey["WEST"] = "WEST";
})(MovementKey || (MovementKey = {}));
export var GroundMaterial;
(function (GroundMaterial) {
    GroundMaterial["MEADOW"] = "MEADOW";
    GroundMaterial["STONE"] = "STONE";
    GroundMaterial["LAKE"] = "LAKE";
    GroundMaterial["SAND"] = "SAND";
})(GroundMaterial || (GroundMaterial = {}));
export var CollectibleKind;
(function (CollectibleKind) {
    CollectibleKind["TREASURE_CHEST"] = "TREASURE_CHEST";
    CollectibleKind["MAGIC_ORB"] = "MAGIC_ORB";
    CollectibleKind["ANCIENT_SCROLL"] = "ANCIENT_SCROLL";
    CollectibleKind["CRYSTAL_GEM"] = "CRYSTAL_GEM";
})(CollectibleKind || (CollectibleKind = {}));
//# sourceMappingURL=definitions.js.map