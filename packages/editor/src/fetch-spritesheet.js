import tileSpritesheetUrl from './assets/map-tileset.png'
import unitSpritesheetUrl from './assets/unit-tileset.png'

/** @type {ImageBitmap} */
let _tileBitmap = null

/** @type {ImageBitmap} */
let _unitBitmap = null

/** @returns {Promise<ImageBitmap>} */
export async function fetchTileSpriteSheet() {
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
