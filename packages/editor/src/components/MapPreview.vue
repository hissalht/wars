<template>
  <canvas
    ref="canvas"
    class="map-preview"
    width="500"
    height="500"
    @mousedown="onMousedown"
    @mousemove="onMousemove"
  />
</template>

<script>
import spriteSheetUrl from '../assets/map-tileset.png'
import spriteSheet from '../spritesheet'

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
  data: () => ({ bitmap: null, frameCount: 0 }),
  computed: {
    /** @returns {CanvasRenderingContext2D} */
    context() {
      return this.$refs.canvas.getContext('2d')
    },
  },
  async mounted() {
    await this.fetchSpriteSheet()
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
    async fetchSpriteSheet() {
      const response = await fetch(spriteSheetUrl)
      const blob = await response.blob()
      const bitmap = await createImageBitmap(blob)
      this.bitmap = bitmap
    },
    drawMap() {
      this.context.imageSmoothingEnabled = false
      this.context.clearRect(0, 0, this.$refs.canvas.width, this.context.height)
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
            x * 16 * this.scale + offset.x * this.scale,
            y * 16 * this.scale + offset.y * this.scale,
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
      const tilePosition = {
        x: Math.floor(e.offsetX / (16 * this.scale)),
        y: Math.floor(e.offsetY / (16 * this.scale)),
      }
      this.$emit('mousedown', tilePosition)
    },
    onMousemove(e) {
      const tilePosition = {
        x: Math.floor(e.offsetX / (16 * this.scale)),
        y: Math.floor(e.offsetY / (16 * this.scale)),
      }
      this.$emit('mousemove', tilePosition)
    },
  },
}
</script>

<style>
.map-preview {
  border: 1px solid black;
}
</style>
