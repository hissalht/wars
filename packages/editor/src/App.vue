<template>
  <p>Hello</p>
  <div>
    <label>Tile</label>
    <select v-model.number="selectedTile">
      <option v-for="(sprite, i) in $options.spritesheet" :key="i" :value="i">
        {{ sprite.type }}
      </option>
    </select>
  </div>
  <map-preview
    :tiles="mapData.tiles"
    :width="mapData.width"
    :height="mapData.height"
    :scale="scale"
    @mousedown="handleMousedown"
    @mousemove="handleMousemove"
    @mouseup="handleMouseup"
  />
</template>

<script>
import MapPreview from './components/MapPreview.vue'
import mapData from './map-data'
import spritesheet from './spritesheet'

export default {
  name: 'App',
  components: { MapPreview },
  spritesheet,
  data: () => ({
    mapData,
    scale: 2,
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
  },
}
</script>
