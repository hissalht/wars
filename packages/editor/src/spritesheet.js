import TileType from './TileType'

const T = TileType

export default [
  {
    type: T.SEA,
    source: [
      { x: 25, y: 111 },
      { x: 25, y: 181 },
      { x: 25, y: 251 },
      { x: 25, y: 321 },
      { x: 25, y: 251 },
      { x: 25, y: 181 },
    ],
  },
  {
    type: T.PLAIN,
    source: [{ x: 8, y: 64 }],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 231, y: 111 },
      { x: 231, y: 181 },
      { x: 231, y: 251 },
      { x: 231, y: 321 },
      { x: 231, y: 251 },
      { x: 231, y: 181 },
    ],
  },
  {
    type: T.FOREST,
    source: [{ x: 352, y: 48, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.MOUNTAIN,
    source: [{ x: 386, y: 48, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.ROAD,
    source: [{ x: 42, y: 64 }],
  },
]
