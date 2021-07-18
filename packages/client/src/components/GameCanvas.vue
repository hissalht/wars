<template>
  <canvas
    class="game-canvas"
    :width="canvasWidth"
    :height="canvasHeight"
    ref="canvas"
    @mousemove="handleMousemove"
    @click="handleClick"
  />
</template>

<script>
import { renderTerrain, renderUnits, renderCursor } from "../renderer";
import {
  fetchTileSpriteSheet,
  fetchUnitSpriteSheet,
  getBlueUnitSpritesheet,
} from "../spritesheet";

export default {
  name: "GameCanvas",
  props: {
    game: {
      type: Object,
      required: true,
    },
    scale: {
      type: Number,
      required: false,
      default: 1,
    },
    playerId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    tileBitmap: null,
    unitBitmaps: null,
    mapPositionX: 8,
    mapPositionY: 8,

    frameCount: 0,
    running: false,

    cursorPosition: null,
    selectedUnit: null,
  }),
  computed: {
    canvasWidth() {
      return (this.game.width + 1) * 16 * this.scale;
    },
    canvasHeight() {
      return (this.game.height + 1) * 16 * this.scale;
    },
    /** @returns {CanvasRenderingContext2D} */
    context() {
      return this.$refs.canvas.getContext("2d");
    },
  },
  async mounted() {
    this.tileBitmap = await fetchTileSpriteSheet();
    this.unitBitmaps = [
      await fetchUnitSpriteSheet(),
      await getBlueUnitSpritesheet(),
    ];

    this.context.imageSmoothingEnabled = false;
    this.running = true;
    this.loop();
  },
  beforeUnmount() {
    this.running = false;
  },
  methods: {
    loop() {
      this.frameCount += 1;

      this.context.strokeRect(
        this.mapPositionX - 1,
        this.mapPositionY - 1,
        this.game.width * 16 * this.scale + 2,
        this.game.height * 16 * this.scale + 2
      );

      renderTerrain(
        this.game,
        this.context,
        this.tileBitmap,
        this.frameCount,
        this.scale,
        this.mapPositionX,
        this.mapPositionY
      );
      renderUnits(
        this.game,
        this.context,
        this.unitBitmaps,
        this.frameCount,
        this.scale,
        this.mapPositionX,
        this.mapPositionY
      );

      if (this.cursorPosition) {
        renderCursor(
          this.cursorPosition,
          this.context,
          this.scale,
          this.mapPositionX,
          this.mapPositionY
        );
      }

      if (this.running) {
        requestAnimationFrame(this.loop);
      }
    },
    handleMousemove(e) {
      this.cursorPosition = this.canvasCoordinatesToTileCoordinates(
        e.offsetX,
        e.offsetY
      );
    },
    handleClick(e) {
      const { x, y } = this.cursorPosition;

      if (this.selectedUnit) {
        // move order
        this.$emit("command", this.selectedUnit.id, {
          destination: { x, y },
          action: "WAIT",
        });
        this.selectedUnit = null;
        return;
      }

      // selecting a unit
      const unit = Object.values(this.game.units).find(
        (u) => u.position.x === x && u.position.y === y
      );
      if (unit?.ready && unit?.player === this.playerId) {
        this.selectedUnit = unit;
      }
    },
    canvasCoordinatesToTileCoordinates(mouseX, mouseY) {
      if (
        mouseX < this.mapPositionX ||
        mouseX >= this.mapPositionX + this.game.width * 16 * this.scale ||
        mouseY < this.mapPositionY ||
        mouseY >= this.mapPositionY + this.game.height * 16 * this.scale
      ) {
        // cursor is not over the terrain
        return null;
      }
      const x = Math.floor((mouseX - this.mapPositionX) / (16 * this.scale));
      const y = Math.floor((mouseY - this.mapPositionY) / (16 * this.scale));
      return { x, y };
    },
  },
};
</script>
