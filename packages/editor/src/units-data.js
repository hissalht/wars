import UnitType from './UnitType'

export default [
  {
    type: UnitType.RECON,
    position: { x: 10, y: 8 },
  },
  {
    type: UnitType.TANK,
    position: { x: 11, y: 8 },
  },
  {
    type: UnitType.MEDIUM_TANK,
    position: { x: 12, y: 8 },
  },
  {
    type: UnitType.NEO_TANK,
    position: { x: 13, y: 8 },
  },
  {
    type: UnitType.MEGA_TANK,
    position: { x: 14, y: 8 },
  },
  {
    type: UnitType.APC,
    position: { x: 15, y: 8 },
  },

  {
    type: UnitType.ANTI_AIR,
    position: { x: 10, y: 9 },
  },
  {
    type: UnitType.ARTILLERY,
    position: { x: 11, y: 9 },
  },
  {
    type: UnitType.ROCKET,
    position: { x: 12, y: 9 },
  },
  {
    type: UnitType.MISSILE,
    position: { x: 13, y: 9 },
  },
  {
    type: UnitType.PIPERUNNER,
    position: { x: 14, y: 9 },
  },
  {
    type: UnitType.BLOB,
    position: { x: 15, y: 9 },
  },

  { type: UnitType.FIGHTER, position: { x: 0, y: 10 } },
  { type: UnitType.BOMBER, position: { x: 1, y: 10 } },
  { type: UnitType.BLACK_BOMB, position: { x: 2, y: 10 } },
  { type: UnitType.STEALTH, position: { x: 3, y: 10 } },
  { type: UnitType.B_COPTER, position: { x: 4, y: 10 } },
  { type: UnitType.T_COPTER, position: { x: 5, y: 10 } },

  { type: UnitType.BATTLESHIP, position: { x: 0, y: 11 } },
  { type: UnitType.CRUISER, position: { x: 1, y: 11 } },
  { type: UnitType.SUB, position: { x: 2, y: 11 } },
  { type: UnitType.LANDER, position: { x: 3, y: 11 } },
  { type: UnitType.BLACK_BOAT, position: { x: 4, y: 11 } },
  { type: UnitType.CARRIER, position: { x: 5, y: 11 } },

  { type: UnitType.INFANTRY, position: { x: 0, y: 12 } },
  { type: UnitType.MECH, position: { x: 2, y: 12 } },
]
