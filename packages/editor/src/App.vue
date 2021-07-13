<template>
  <div class="app">
    <map-preview
      :tiles="mapData.tiles"
      :width="mapData.width"
      :height="mapData.height"
      :scale="scale"
      @mousedown="handleMousedown"
      @mousemove="handleMousemove"
      @mouseup="handleMouseup"
      @wheel.prevent="handleMousewheel"
    />
    <palette v-model.number="selectedTile" class="app__palette" />
  </div>
</template>

<script>
import MapPreview from './components/MapPreview.vue'
import Palette from './components/Palette.vue'
import mapData from './map-data'
import spritesheet from './spritesheet'

export default {
  name: 'App',
  components: { MapPreview, Palette },
  spritesheet,
  data: () => ({
    mapData,
    scale: 3,
    drawing: false,
    selectedTile: 0,
  }),
  methods: {
    handleMousedown({ x, y }) {
      const tileIndex = y * mapData.width + x
      this.mapData.tiles[tileIndex] = this.selectedTile
      this.drawing = true
    },
    handleMousemove({ x, y }) {
      if (this.drawing) {
        const tileIndex = y * mapData.width + x

        this.mapData.tiles[tileIndex] = this.selectedTile
      }
    },
    handleMouseup() {
      this.drawing = false
    },
    handleMousewheel(e) {
      if (e.deltaY > 0) {
        this.scale = Math.max(1, this.scale - 1)
      } else if (e.deltaY < 0) {
        this.scale = Math.min(5, this.scale + 1)
      }
    },
  },
}
</script>

<style>
.app {
  display: flex;
  padding: 2rem;
}

.app > * + * {
  margin-left: 1rem;
}
</style>
