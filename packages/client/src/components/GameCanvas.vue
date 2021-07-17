<template>
  <canvas
    class="game-canvas"
    :width="canvasWidth"
    :height="canvasHeight"
    ref="canvas"
  />
</template>

<script>
import { renderTerrain, renderUnits } from "../renderer";
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
    frameCount: 0,
    tileBitmap: null,
    unitBitmaps: null,
    mapPositionX: 8,
    mapPositionY: 8,
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

      if (this.running) {
        requestAnimationFrame(this.loop);
      }
    },
  },
};
</script>
