import { TileType } from "@wars/game";
import tileSpritesheet from "./data/tile-spritesheet";
import unitSpritesheet from "./data/unit-spritesheet";

const ANIMATION_SPEED = 15;
const PROPERTY_LIST = [
  TileType.HQ,
  TileType.CITY,
  TileType.BASE,
  TileType.AIRPORT,
  TileType.PORT,
  TileType.TOWER,
  TileType.LAB,
  TileType.MISSILE,
  TileType.MISSILE_EMPTY,
];

export function renderTerrain(
  game,
  context,
  bitmap,
  frameCount,
  scale = 1,
  offsetX = 0,
  offsetY = 0
) {
  for (let y = 0; y < game.height; y++) {
    for (let x = 0; x < game.width; x++) {
      const tile = game.tiles[y * game.width + x];
      const sprite = tileSpritesheet[tile];

      const sourceIndex =
        Math.floor(frameCount / ANIMATION_SPEED) % sprite.source.length;
      const spriteOffset = sprite.offset || { x: 0, y: 0 };

      const width = sprite.source[sourceIndex].w || 16;
      const height = sprite.source[sourceIndex].h || 16;

      const isProperty = PROPERTY_LIST.includes(sprite.type);

      context.filter = "none";

      if (isProperty) {
        // draw background plain for properties
        context.drawImage(
          bitmap,
          tileSpritesheet[0].source[0].x,
          tileSpritesheet[0].source[0].y,
          16,
          16,
          x * 16 * scale + offsetX,
          y * 16 * scale + offsetY,
          16 * scale,
          16 * scale
        );
      }

      context.drawImage(
        bitmap,
        sprite.source[sourceIndex].x,
        sprite.source[sourceIndex].y,
        width,
        height,
        x * 16 * scale + spriteOffset.x * scale + offsetX,
        y * 16 * scale + spriteOffset.y * scale + offsetY,
        width * scale,
        height * scale
      );
    }
  }
}

export function renderUnits(
  game,
  context,
  bitmaps,
  frameCount,
  scale = 1,
  offsetX = 0,
  offsetY = 0
) {
  const unitArray = Object.values(game.units);
  for (let i = 0; i < unitArray.length; i++) {
    const unit = unitArray[i];
    const sprite = unitSpritesheet[unit.type];

    const sourceIndex =
      Math.floor(frameCount / ANIMATION_SPEED) % sprite.source.length;

    const bitmap = bitmaps[unit.player];

    if (!unit.ready) {
      context.filter = "brightness(0.7)";
    } else {
      context.filter = "none";
    }

    context.drawImage(
      bitmap,
      sprite.source[sourceIndex].x,
      sprite.source[sourceIndex].y,
      16,
      16,
      unit.position.x * 16 * scale + offsetX,
      unit.position.y * 16 * scale + offsetY,
      16 * scale,
      16 * scale
    );
  }
}

export function renderCursor(
  cursor,
  context,
  // frameCount,
  scale = 1,
  offsetX = 0,
  offsetY = 0
) {
  context.filter = "none";
  context.fillStyle = "#fffa";
  context.fillRect(
    cursor.x * 16 * scale + offsetX,
    cursor.y * 16 * scale + offsetY,
    16 * scale,
    16 * scale
  );
}
