import tileSpritesheetUrl from './assets/map-tileset.png'
import unitSpritesheetUrl from './assets/unit-tileset.png'
import palettes from './data/unit-palettes'

/** @type {ImageBitmap} */
let _tileBitmap = null

/** @type {ImageBitmap} */
let _unitBitmap = null

/** @type {ImageBitmap} */
let _blueUnitBitmap = null

/** @returns {Promise<ImageBitmap>} */
export async function fetchTileSpriteSheet() {
  // TODO: use a queue system
  // If the function is called twice "at the same time", the image will be fetched twice
  if (_tileBitmap) {
    return _tileBitmap
  }
  const response = await fetch(tileSpritesheetUrl)
  const blob = await response.blob()
  _tileBitmap = await createImageBitmap(blob)
  return _tileBitmap
}

/** @returns {Promise<ImageBitmap>} */
export async function fetchUnitSpriteSheet() {
  if (_unitBitmap) {
    return _unitBitmap
  }
  const response = await fetch(unitSpritesheetUrl)
  const blob = await response.blob()
  _unitBitmap = await createImageBitmap(blob)
  return _unitBitmap
}

/**
 * @param {number[]} pixel
 * @returns {string}
 */
function pixelToHex([r, g, b]) {
  return (
    '#' +
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0')
  )
}

/**
 *
 * @param {string} hex An hexadecimal color. Example : `#248abd`
 * @returns {number[]} An array of 3 numbers between 0 and 255.
 */
function hexToPixel(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return [r, g, b]
}

/**
 * Builds a color swapped version of the unit bitmap.
 *
 * TODO: Maybe use WASM to speed this up ?
 *
 * @returns {Promise<ImageBitmap>}
 */
export async function getBlueUnitSpritesheet() {
  if (_blueUnitBitmap) {
    return _blueUnitBitmap
  }

  const width = _unitBitmap.width
  const height = _unitBitmap.height

  /** @type {HTMLCanvasElement} */
  const canvas = document.createElement('canvas')
  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(_unitBitmap, 0, 0)
  const imageData = ctx.getImageData(0, 0, width, height)

  const PIXEL_SIZE = 4 // r, g, b and a
  const pixelCount = imageData.data.length / PIXEL_SIZE

  for (let i = 0; i < pixelCount; i++) {
    const pixel = imageData.data.subarray(
      i * PIXEL_SIZE,
      i * PIXEL_SIZE + PIXEL_SIZE
    )

    const pixelHex = pixelToHex(pixel)
    const paletteIndex = palettes[0].indexOf(pixelHex)
    if (paletteIndex !== -1) {
      // color swap the pixel
      const newColorHex = palettes[1][paletteIndex]
      const newColorPixel = hexToPixel(newColorHex)
      pixel[0] = newColorPixel[0]
      pixel[1] = newColorPixel[1]
      pixel[2] = newColorPixel[2]
    }
  }

  _blueUnitBitmap = await createImageBitmap(imageData)

  return _blueUnitBitmap
}
