import UnitType from "../enums/UnitType";
import MovementType from "../enums/MovementType";

export default {
  [UnitType.INFANTRY]: {
    movementType: MovementType.FOOT,
    movement: 3,
    fuel: 99,
    range: 1,
  },
};
