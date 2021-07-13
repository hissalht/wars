const start = { x: 171, y: 803 }

const offsetX = 17
const offsetY = 33

const sprites = []

for (let i = 0; i < 5; i++) {
  sprites.push({
    type: 'LAB',
    source: [{ x: start.x, y: start.y + offsetY * i, w: 16, h: 32 }],
    offset: { x: 0, y: -16 },
  })
}

console.log(JSON.stringify(sprites))
