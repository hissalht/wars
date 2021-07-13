<template>
  <div class="tile-palette">
    <template v-for="(tile, i) in tileImages" :key="i">
      <input
        :id="'tile-' + i"
        type="radio"
        name="tile"
        class="tile-palette__input"
        :value="i"
        :checked="i === modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <label :for="'tile-' + i" class="tile-palette__label">
        <img :src="tile" alt="" class="tile-palette__image" />
      </label>
    </template>
  </div>
</template>

<script>
import fetchSpriteSheet from '../fetch-spritesheet'
import spritesheet from '../spritesheet'

export default {
  name: 'Palette',
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  data: () => ({
    bitmap: null,
    tileImages: null,
  }),
  spritesheet,
  async mounted() {
    this.bitmap = await fetchSpriteSheet()
    this.tileImages = this.$options.spritesheet.map(sprite => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      const source = sprite.source[0]
      canvas.setAttribute('width', source.w || 16)
      canvas.setAttribute('height', source.h || 16)
      context.clearRect(0, 0, source.w || 16, source.h || 16)
      context.drawImage(
        this.bitmap,
        source.x,
        source.y,
        source.w || 16,
        source.h || 16,
        0,
        0,
        source.w || 16,
        source.h || 16
      )
      return canvas.toDataURL()
    })
  },
}
</script>

<style>
.tile-palette {
  display: flex;
  flex-wrap: wrap;
}

.tile-palette__input {
  display: none;
}

.tile-palette__label {
  display: block;
  position: relative;
  padding: 0.25rem;
  width: 2rem;
  height: 2rem;
}

.tile-palette__input:checked + .tile-palette__label {
  box-shadow: inset 0 0 0 0.25rem rgba(0, 0, 0, 0.75);
}

.tile-palette__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;

  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
  image-rendering: optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;
}
</style>
