const start = { x: 103, y: 819 }

const offsetX = 17
const offsetY = 33

const sprites = []

for (let i = 0; i < 5; i++) {
  sprites.push({
    type: 'BASE',
    source: [{ x: start.x, y: start.y + offsetY * i, w: 16, h: 16 }],
  })
}

console.log(JSON.stringify(sprites))
