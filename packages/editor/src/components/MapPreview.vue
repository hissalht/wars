<template>
  <canvas
    ref="canvas"
    class="map-preview"
    width="800"
    height="800"
    @mousedown="onMousedown"
    @mouseup="onMouseup"
    @mousemove="onMousemove"
  />
</template>

<script>
import spriteSheet from '../spritesheet'

import fetchSpriteSheet from '../fetch-spritesheet'

const ANIMATION_SPEED = 15

export default {
  name: 'MapPreview',
  props: {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    scale: {
      type: Number,
      required: false,
      default: 1,
    },
    tiles: {
      type: Array,
      required: true,
    },
  },
  emits: ['mousedown', 'mousemove'],
  data: () => ({
    bitmap: null,
    frameCount: 0,
    cameraPosition: { x: -8, y: -58 },
    movingCamera: false,
  }),
  computed: {
    /** @returns {CanvasRenderingContext2D} */
    context() {
      return this.$refs.canvas.getContext('2d')
    },
  },
  async mounted() {
    this.bitmap = await fetchSpriteSheet()
    const loop = () => {
      this.frameCount += 1
      if (this.frameCount % ANIMATION_SPEED) {
        this.drawMap()
      }
      requestAnimationFrame(loop)
    }
    loop()
  },
  methods: {
    drawMap() {
      this.context.imageSmoothingEnabled = false
      this.context.clearRect(0, 0, 800, 800)
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          const tile = this.tiles[y * this.width + x]
          const sprite = spriteSheet[tile]

          const sourceIndex =
            Math.floor(this.frameCount / ANIMATION_SPEED) % sprite.source.length
          const offset = sprite.offset || { x: 0, y: 0 }

          const width = sprite.source[sourceIndex].w || 16
          const height = sprite.source[sourceIndex].h || 16

          this.context.drawImage(
            this.bitmap,
            sprite.source[sourceIndex].x,
            sprite.source[sourceIndex].y,
            width,
            height,
            x * 16 * this.scale + offset.x * this.scale - this.cameraPosition.x,
            y * 16 * this.scale + offset.y * this.scale - this.cameraPosition.y,
            width * this.scale,
            height * this.scale
          )
        }
      }
    },
    /**
     * @param {MouseEvent} e
     */
    onMousedown(e) {
      e.preventDefault()
      // left click
      if (e.button === 0) {
        const tilePosition = {
          x: Math.floor(
            (e.offsetX + this.cameraPosition.x) / (16 * this.scale)
          ),
          y: Math.floor(
            (e.offsetY + this.cameraPosition.y) / (16 * this.scale)
          ),
        }

        const { x, y } = tilePosition

        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
          this.$emit('mousedown', tilePosition)
        }
      }

      // middle click
      if (e.button === 1) {
        this.movingCamera = true
      }
    },
    onMouseup(e) {
      if (e.button === 1) {
        this.movingCamera = false
      }
    },
    onMousemove(e) {
      if (this.movingCamera) {
        this.cameraPosition.x -= e.movementX
        this.cameraPosition.y -= e.movementY
        return
      }

      const tilePosition = {
        x: Math.floor((e.offsetX + this.cameraPosition.x) / (16 * this.scale)),
        y: Math.floor((e.offsetY + this.cameraPosition.y) / (16 * this.scale)),
      }

      const { x, y } = tilePosition

      if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
        this.$emit('mousemove', tilePosition)
      }
    },
  },
}
</script>

<style>
.map-preview {
  border: 1px solid black;
}
</style>
