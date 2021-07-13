import spriteSheetUrl from './assets/map-tileset.png'

/** @type {ImageBitmap} */
let _bitmap = null

/** @returns {Promise<ImageBitmap>} */
export default async function fetchSpriteSheet() {
  if (_bitmap) {
    return _bitmap
  }
  const response = await fetch(spriteSheetUrl)
  const blob = await response.blob()
  _bitmap = await createImageBitmap(blob)
  return _bitmap
}
