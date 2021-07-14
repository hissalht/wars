import UnitType from '../enums/UnitType'

export default Object.values(UnitType)
  .map((unitType, i) => {
    return [
      {
        type: unitType,
        position: { x: i % 20, y: Math.floor(i / 20) },
        army: 0,
      },
      {
        type: unitType,
        position: { x: i % 20, y: Math.floor(i / 20) + 2 },
        army: 1,
      },
    ]
  })
  .flat()
