import TileType from "../enums/TileType";
import MovementType from "../enums/MovementType";

export default {
  [TileType.PLAIN]: {
    defense: 1,
    movement: {
      [MovementType.FOOT]: 1,
    },
  },
  [TileType.ROAD]: {
    defense: 0,
    movement: {
      [MovementType.FOOT]: 1,
    },
  },
  [TileType.SEA]: {
    defense: 0,
    movement: {
      [MovementType.FOOT]: Infinity,
    },
  },
};
