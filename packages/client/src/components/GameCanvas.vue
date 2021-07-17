<template>
  <canvas
    class="game-canvas"
    :width="canvasWidth"
    :height="canvasHeight"
    ref="canvas"
    @mousemove="handleMousemove"
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
  },
  data: () => ({
    tileBitmap: null,
    unitBitmaps: null,
    mapPositionX: 8,
    mapPositionY: 8,

    frameCount: 0,
    cursorPosition: null,
    running: false,
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
