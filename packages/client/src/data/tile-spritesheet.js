import { TileType } from '@wars/game'

const T = TileType

export default [
  // plain tiles
  { type: T.PLAIN, source: [{ x: 8, y: 64 }] },
  { type: T.PLAIN, source: [{ x: 25, y: 64 }] },

  // forest tiles
  {
    type: T.FOREST,
    source: [{ x: 352, y: 48, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.FOREST,
    source: [{ x: 369, y: 48, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },

  // mountain tiles
  {
    type: T.MOUNTAIN,
    source: [{ x: 386, y: 48, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.MOUNTAIN,
    source: [{ x: 403, y: 48, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.MOUNTAIN,
    source: [{ x: 420, y: 48, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },

  // road tiles
  { type: T.ROAD, source: [{ x: 42, y: 13 }] },
  { type: T.ROAD, source: [{ x: 42, y: 30 }] },
  { type: T.ROAD, source: [{ x: 42, y: 47 }] },
  { type: T.ROAD, source: [{ x: 42, y: 64 }] },
  { type: T.ROAD, source: [{ x: 59, y: 13 }] },
  { type: T.ROAD, source: [{ x: 59, y: 30 }] },
  { type: T.ROAD, source: [{ x: 59, y: 47 }] },
  { type: T.ROAD, source: [{ x: 59, y: 64 }] },
  { type: T.ROAD, source: [{ x: 76, y: 13 }] },
  { type: T.ROAD, source: [{ x: 76, y: 30 }] },
  { type: T.ROAD, source: [{ x: 76, y: 47 }] },

  // bridge tiles
  { type: T.BRIDGE, source: [{ x: 76, y: 64 }] },
  { type: T.BRIDGE, source: [{ x: 93, y: 64 }] },

  // sea tiles
  {
    type: T.SEA,
    source: [
      { x: 8, y: 94 },
      { x: 8, y: 164 },
      { x: 8, y: 234 },
      { x: 8, y: 304 },
      { x: 8, y: 234 },
      { x: 8, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 8, y: 111 },
      { x: 8, y: 181 },
      { x: 8, y: 251 },
      { x: 8, y: 321 },
      { x: 8, y: 251 },
      { x: 8, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 8, y: 128 },
      { x: 8, y: 198 },
      { x: 8, y: 268 },
      { x: 8, y: 338 },
      { x: 8, y: 268 },
      { x: 8, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 8, y: 145 },
      { x: 8, y: 215 },
      { x: 8, y: 285 },
      { x: 8, y: 355 },
      { x: 8, y: 285 },
      { x: 8, y: 215 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 25, y: 94 },
      { x: 25, y: 164 },
      { x: 25, y: 234 },
      { x: 25, y: 304 },
      { x: 25, y: 234 },
      { x: 25, y: 164 },
    ],
  },
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
    type: T.SEA,
    source: [
      { x: 25, y: 128 },
      { x: 25, y: 198 },
      { x: 25, y: 268 },
      { x: 25, y: 338 },
      { x: 25, y: 268 },
      { x: 25, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 25, y: 145 },
      { x: 25, y: 215 },
      { x: 25, y: 285 },
      { x: 25, y: 355 },
      { x: 25, y: 285 },
      { x: 25, y: 215 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 42, y: 94 },
      { x: 42, y: 164 },
      { x: 42, y: 234 },
      { x: 42, y: 304 },
      { x: 42, y: 234 },
      { x: 42, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 42, y: 111 },
      { x: 42, y: 181 },
      { x: 42, y: 251 },
      { x: 42, y: 321 },
      { x: 42, y: 251 },
      { x: 42, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 42, y: 128 },
      { x: 42, y: 198 },
      { x: 42, y: 268 },
      { x: 42, y: 338 },
      { x: 42, y: 268 },
      { x: 42, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 42, y: 145 },
      { x: 42, y: 215 },
      { x: 42, y: 285 },
      { x: 42, y: 355 },
      { x: 42, y: 285 },
      { x: 42, y: 215 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 59, y: 94 },
      { x: 59, y: 164 },
      { x: 59, y: 234 },
      { x: 59, y: 304 },
      { x: 59, y: 234 },
      { x: 59, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 59, y: 111 },
      { x: 59, y: 181 },
      { x: 59, y: 251 },
      { x: 59, y: 321 },
      { x: 59, y: 251 },
      { x: 59, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 59, y: 128 },
      { x: 59, y: 198 },
      { x: 59, y: 268 },
      { x: 59, y: 338 },
      { x: 59, y: 268 },
      { x: 59, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 59, y: 145 },
      { x: 59, y: 215 },
      { x: 59, y: 285 },
      { x: 59, y: 355 },
      { x: 59, y: 285 },
      { x: 59, y: 215 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 76, y: 94 },
      { x: 76, y: 164 },
      { x: 76, y: 234 },
      { x: 76, y: 304 },
      { x: 76, y: 234 },
      { x: 76, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 76, y: 111 },
      { x: 76, y: 181 },
      { x: 76, y: 251 },
      { x: 76, y: 321 },
      { x: 76, y: 251 },
      { x: 76, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 76, y: 128 },
      { x: 76, y: 198 },
      { x: 76, y: 268 },
      { x: 76, y: 338 },
      { x: 76, y: 268 },
      { x: 76, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 76, y: 145 },
      { x: 76, y: 215 },
      { x: 76, y: 285 },
      { x: 76, y: 355 },
      { x: 76, y: 285 },
      { x: 76, y: 215 },
    ],
  },

  {
    type: T.SEA,
    source: [
      { x: 93, y: 94 },
      { x: 93, y: 164 },
      { x: 93, y: 234 },
      { x: 93, y: 304 },
      { x: 93, y: 234 },
      { x: 93, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 93, y: 111 },
      { x: 93, y: 181 },
      { x: 93, y: 251 },
      { x: 93, y: 321 },
      { x: 93, y: 251 },
      { x: 93, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 93, y: 128 },
      { x: 93, y: 198 },
      { x: 93, y: 268 },
      { x: 93, y: 338 },
      { x: 93, y: 268 },
      { x: 93, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 93, y: 145 },
      { x: 93, y: 215 },
      { x: 93, y: 285 },
      { x: 93, y: 355 },
      { x: 93, y: 285 },
      { x: 93, y: 215 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 110, y: 94 },
      { x: 110, y: 164 },
      { x: 110, y: 234 },
      { x: 110, y: 304 },
      { x: 110, y: 234 },
      { x: 110, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 110, y: 111 },
      { x: 110, y: 181 },
      { x: 110, y: 251 },
      { x: 110, y: 321 },
      { x: 110, y: 251 },
      { x: 110, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 110, y: 128 },
      { x: 110, y: 198 },
      { x: 110, y: 268 },
      { x: 110, y: 338 },
      { x: 110, y: 268 },
      { x: 110, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 110, y: 145 },
      { x: 110, y: 215 },
      { x: 110, y: 285 },
      { x: 110, y: 355 },
      { x: 110, y: 285 },
      { x: 110, y: 215 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 127, y: 94 },
      { x: 127, y: 164 },
      { x: 127, y: 234 },
      { x: 127, y: 304 },
      { x: 127, y: 234 },
      { x: 127, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 127, y: 111 },
      { x: 127, y: 181 },
      { x: 127, y: 251 },
      { x: 127, y: 321 },
      { x: 127, y: 251 },
      { x: 127, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 127, y: 128 },
      { x: 127, y: 198 },
      { x: 127, y: 268 },
      { x: 127, y: 338 },
      { x: 127, y: 268 },
      { x: 127, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 127, y: 145 },
      { x: 127, y: 215 },
      { x: 127, y: 285 },
      { x: 127, y: 355 },
      { x: 127, y: 285 },
      { x: 127, y: 215 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 144, y: 94 },
      { x: 144, y: 164 },
      { x: 144, y: 234 },
      { x: 144, y: 304 },
      { x: 144, y: 234 },
      { x: 144, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 144, y: 111 },
      { x: 144, y: 181 },
      { x: 144, y: 251 },
      { x: 144, y: 321 },
      { x: 144, y: 251 },
      { x: 144, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 144, y: 128 },
      { x: 144, y: 198 },
      { x: 144, y: 268 },
      { x: 144, y: 338 },
      { x: 144, y: 268 },
      { x: 144, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 144, y: 145 },
      { x: 144, y: 215 },
      { x: 144, y: 285 },
      { x: 144, y: 355 },
      { x: 144, y: 285 },
      { x: 144, y: 215 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 161, y: 94 },
      { x: 161, y: 164 },
      { x: 161, y: 234 },
      { x: 161, y: 304 },
      { x: 161, y: 234 },
      { x: 161, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 161, y: 111 },
      { x: 161, y: 181 },
      { x: 161, y: 251 },
      { x: 161, y: 321 },
      { x: 161, y: 251 },
      { x: 161, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 161, y: 128 },
      { x: 161, y: 198 },
      { x: 161, y: 268 },
      { x: 161, y: 338 },
      { x: 161, y: 268 },
      { x: 161, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 161, y: 145 },
      { x: 161, y: 215 },
      { x: 161, y: 285 },
      { x: 161, y: 355 },
      { x: 161, y: 285 },
      { x: 161, y: 215 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 178, y: 94 },
      { x: 178, y: 164 },
      { x: 178, y: 234 },
      { x: 178, y: 304 },
      { x: 178, y: 234 },
      { x: 178, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 178, y: 111 },
      { x: 178, y: 181 },
      { x: 178, y: 251 },
      { x: 178, y: 321 },
      { x: 178, y: 251 },
      { x: 178, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 178, y: 128 },
      { x: 178, y: 198 },
      { x: 178, y: 268 },
      { x: 178, y: 338 },
      { x: 178, y: 268 },
      { x: 178, y: 198 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 178, y: 145 },
      { x: 178, y: 215 },
      { x: 178, y: 285 },
      { x: 178, y: 355 },
      { x: 178, y: 285 },
      { x: 178, y: 215 },
    ],
  },

  {
    type: T.SEA,
    source: [
      { x: 195, y: 94 },
      { x: 195, y: 164 },
      { x: 195, y: 234 },
      { x: 195, y: 304 },
      { x: 195, y: 234 },
      { x: 195, y: 164 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 195, y: 111 },
      { x: 195, y: 181 },
      { x: 195, y: 251 },
      { x: 195, y: 321 },
      { x: 195, y: 251 },
      { x: 195, y: 181 },
    ],
  },
  {
    type: T.SEA,
    source: [
      { x: 195, y: 128 },
      { x: 195, y: 198 },
      { x: 195, y: 268 },
      { x: 195, y: 338 },
      { x: 195, y: 268 },
      { x: 195, y: 198 },
    ],
  },

  // Reef
  {
    type: T.REEFS,
    source: [
      { x: 195, y: 145 },
      { x: 195, y: 215 },
      { x: 195, y: 285 },
      { x: 195, y: 355 },
      { x: 195, y: 285 },
      { x: 195, y: 215 },
    ],
  },

  // shoal tiles
  {
    type: T.SHOAL,
    source: [
      { x: 214, y: 94 },
      { x: 214, y: 164 },
      { x: 214, y: 234 },
      { x: 214, y: 304 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 214, y: 111 },
      { x: 214, y: 181 },
      { x: 214, y: 251 },
      { x: 214, y: 321 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 214, y: 128 },
      { x: 214, y: 198 },
      { x: 214, y: 268 },
      { x: 214, y: 338 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 214, y: 145 },
      { x: 214, y: 215 },
      { x: 214, y: 285 },
      { x: 214, y: 355 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 231, y: 94 },
      { x: 231, y: 164 },
      { x: 231, y: 234 },
      { x: 231, y: 304 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 231, y: 111 },
      { x: 231, y: 181 },
      { x: 231, y: 251 },
      { x: 231, y: 321 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 231, y: 128 },
      { x: 231, y: 198 },
      { x: 231, y: 268 },
      { x: 231, y: 338 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 231, y: 145 },
      { x: 231, y: 215 },
      { x: 231, y: 285 },
      { x: 231, y: 355 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 248, y: 94 },
      { x: 248, y: 164 },
      { x: 248, y: 234 },
      { x: 248, y: 304 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 248, y: 111 },
      { x: 248, y: 181 },
      { x: 248, y: 251 },
      { x: 248, y: 321 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 248, y: 128 },
      { x: 248, y: 198 },
      { x: 248, y: 268 },
      { x: 248, y: 338 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 248, y: 145 },
      { x: 248, y: 215 },
      { x: 248, y: 285 },
      { x: 248, y: 355 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 265, y: 94 },
      { x: 265, y: 164 },
      { x: 265, y: 234 },
      { x: 265, y: 304 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 265, y: 111 },
      { x: 265, y: 181 },
      { x: 265, y: 251 },
      { x: 265, y: 321 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 265, y: 128 },
      { x: 265, y: 198 },
      { x: 265, y: 268 },
      { x: 265, y: 338 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 265, y: 145 },
      { x: 265, y: 215 },
      { x: 265, y: 285 },
      { x: 265, y: 355 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 282, y: 94 },
      { x: 282, y: 164 },
      { x: 282, y: 234 },
      { x: 282, y: 304 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 282, y: 111 },
      { x: 282, y: 181 },
      { x: 282, y: 251 },
      { x: 282, y: 321 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 282, y: 128 },
      { x: 282, y: 198 },
      { x: 282, y: 268 },
      { x: 282, y: 338 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 282, y: 145 },
      { x: 282, y: 215 },
      { x: 282, y: 285 },
      { x: 282, y: 355 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 299, y: 94 },
      { x: 299, y: 164 },
      { x: 299, y: 234 },
      { x: 299, y: 304 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 299, y: 111 },
      { x: 299, y: 181 },
      { x: 299, y: 251 },
      { x: 299, y: 321 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 299, y: 128 },
      { x: 299, y: 198 },
      { x: 299, y: 268 },
      { x: 299, y: 338 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 299, y: 145 },
      { x: 299, y: 215 },
      { x: 299, y: 285 },
      { x: 299, y: 355 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 316, y: 94 },
      { x: 316, y: 164 },
      { x: 316, y: 234 },
      { x: 316, y: 304 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 316, y: 111 },
      { x: 316, y: 181 },
      { x: 316, y: 251 },
      { x: 316, y: 321 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 316, y: 128 },
      { x: 316, y: 198 },
      { x: 316, y: 268 },
      { x: 316, y: 338 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 316, y: 145 },
      { x: 316, y: 215 },
      { x: 316, y: 285 },
      { x: 316, y: 355 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 333, y: 94 },
      { x: 333, y: 164 },
      { x: 333, y: 234 },
      { x: 333, y: 304 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 333, y: 111 },
      { x: 333, y: 181 },
      { x: 333, y: 251 },
      { x: 333, y: 321 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 333, y: 128 },
      { x: 333, y: 198 },
      { x: 333, y: 268 },
      { x: 333, y: 338 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 333, y: 145 },
      { x: 333, y: 215 },
      { x: 333, y: 285 },
      { x: 333, y: 355 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 350, y: 94 },
      { x: 350, y: 164 },
      { x: 350, y: 234 },
      { x: 350, y: 304 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 350, y: 111 },
      { x: 350, y: 181 },
      { x: 350, y: 251 },
      { x: 350, y: 321 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 350, y: 128 },
      { x: 350, y: 198 },
      { x: 350, y: 268 },
      { x: 350, y: 338 },
    ],
  },
  {
    type: T.SHOAL,
    source: [
      { x: 350, y: 145 },
      { x: 350, y: 215 },
      { x: 350, y: 285 },
      { x: 350, y: 355 },
    ],
  },

  // river tiles
  {
    type: T.RIVER,
    source: [
      { x: 369, y: 94 },
      { x: 369, y: 164 },
      { x: 369, y: 234 },
      { x: 369, y: 304 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 369, y: 111 },
      { x: 369, y: 181 },
      { x: 369, y: 251 },
      { x: 369, y: 321 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 369, y: 128 },
      { x: 369, y: 198 },
      { x: 369, y: 268 },
      { x: 369, y: 338 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 369, y: 145 },
      { x: 369, y: 215 },
      { x: 369, y: 285 },
      { x: 369, y: 355 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 386, y: 94 },
      { x: 386, y: 164 },
      { x: 386, y: 234 },
      { x: 386, y: 304 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 386, y: 111 },
      { x: 386, y: 181 },
      { x: 386, y: 251 },
      { x: 386, y: 321 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 386, y: 128 },
      { x: 386, y: 198 },
      { x: 386, y: 268 },
      { x: 386, y: 338 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 386, y: 145 },
      { x: 386, y: 215 },
      { x: 386, y: 285 },
      { x: 386, y: 355 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 403, y: 94 },
      { x: 403, y: 164 },
      { x: 403, y: 234 },
      { x: 403, y: 304 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 403, y: 111 },
      { x: 403, y: 181 },
      { x: 403, y: 251 },
      { x: 403, y: 321 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 403, y: 128 },
      { x: 403, y: 198 },
      { x: 403, y: 268 },
      { x: 403, y: 338 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 403, y: 145 },
      { x: 403, y: 215 },
      { x: 403, y: 285 },
      { x: 403, y: 355 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 420, y: 94 },
      { x: 420, y: 164 },
      { x: 420, y: 234 },
      { x: 420, y: 304 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 420, y: 111 },
      { x: 420, y: 181 },
      { x: 420, y: 251 },
      { x: 420, y: 321 },
    ],
  },
  {
    type: T.RIVER,
    source: [
      { x: 420, y: 128 },
      { x: 420, y: 198 },
      { x: 420, y: 268 },
      { x: 420, y: 338 },
    ],
  },

  // HQ tiles
  {
    type: T.HQ,
    source: [{ x: 1, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 18, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 35, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 52, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 69, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 1, y: 803, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 18, y: 803, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 35, y: 803, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 52, y: 803, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 69, y: 803, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 1, y: 836, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 18, y: 836, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 35, y: 836, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 52, y: 836, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 69, y: 836, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 1, y: 869, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 18, y: 869, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 35, y: 869, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 52, y: 869, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 69, y: 869, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 1, y: 902, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 18, y: 902, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 35, y: 902, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 52, y: 902, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 69, y: 902, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 1, y: 935, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 18, y: 935, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 35, y: 935, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 52, y: 935, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.HQ,
    source: [{ x: 69, y: 935, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },

  // city tiles
  {
    type: T.CITY,
    source: [{ x: 86, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.CITY,
    source: [{ x: 86, y: 803, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.CITY,
    source: [{ x: 86, y: 836, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.CITY,
    source: [{ x: 86, y: 869, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.CITY,
    source: [{ x: 86, y: 902, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.CITY,
    source: [{ x: 86, y: 935, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },

  // base tiles
  { type: T.BASE, source: [{ x: 103, y: 773 }] },
  { type: T.BASE, source: [{ x: 103, y: 819 }] },
  { type: T.BASE, source: [{ x: 103, y: 852 }] },
  { type: T.BASE, source: [{ x: 103, y: 885 }] },
  { type: T.BASE, source: [{ x: 103, y: 918 }] },
  { type: T.BASE, source: [{ x: 103, y: 951 }] },

  // airport tiles
  {
    type: T.AIRPORT,
    source: [{ x: 120, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.AIRPORT,
    source: [{ x: 120, y: 803, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.AIRPORT,
    source: [{ x: 120, y: 836, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.AIRPORT,
    source: [{ x: 120, y: 869, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.AIRPORT,
    source: [{ x: 120, y: 902, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.AIRPORT,
    source: [{ x: 120, y: 935, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },

  // port tiles
  {
    type: T.PORT,
    source: [{ x: 137, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.PORT,
    source: [{ x: 137, y: 803, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.PORT,
    source: [{ x: 137, y: 836, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.PORT,
    source: [{ x: 137, y: 869, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.PORT,
    source: [{ x: 137, y: 902, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.PORT,
    source: [{ x: 137, y: 935, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },

  // com tower tiles
  {
    type: T.TOWER,
    source: [{ x: 154, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.TOWER,
    source: [{ x: 154, y: 803, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.TOWER,
    source: [{ x: 154, y: 836, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.TOWER,
    source: [{ x: 154, y: 869, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.TOWER,
    source: [{ x: 154, y: 902, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.TOWER,
    source: [{ x: 154, y: 935, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },

  // lab tiles
  {
    type: T.LAB,
    source: [{ x: 171, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.LAB,
    source: [{ x: 171, y: 803, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.LAB,
    source: [{ x: 171, y: 836, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.LAB,
    source: [{ x: 171, y: 869, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.LAB,
    source: [{ x: 171, y: 902, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
  {
    type: T.LAB,
    source: [{ x: 171, y: 935, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },

  // missile tile
  {
    type: T.MISSILE,
    source: [{ x: 188, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },

  // empty missile tile
  {
    type: T.MISSILE_EMPTY,
    source: [{ x: 205, y: 757, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  },
]
