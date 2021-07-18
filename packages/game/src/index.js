import { INVALID_MOVE } from "boardgame.io/core";

import mapData from "../map-data.json";
import UnitType from "./enums/UnitType";
import MovementType from "./enums/MovementType";

const UnitData = {
  [UnitType.INFANTRY]: {
    movementType: MovementType.FOOT,
    movement: 3,
    fuel: 99,
    range: 1,
  },
};

/**
 * Transform a mapData object into the initial game state.
 * @param {object} data Map data
 * @returns {object}
 */
function initializeGame(data) {
  const units = {};

  data.units.forEach((unit, i) => {
    const id = unit.type + "-" + i;
    units[id] = { ...unit, id, ready: true };
  });

  return {
    width: data.width,
    height: data.height,
    tiles: data.tiles,
    units,
  };
}

function _log(g) {
  console.log(JSON.parse(JSON.stringify(g)));
}

export default {
  /** @returns {WarsGame} */
  setup() {
    return initializeGame(mapData);
  },

  moves: {
    /**
     * Order a unit to perform an action.
     *
     * @param {WarsGame} G
     * @param {import('boardgame.io').Ctx} ctx
     * @param {string} unitId
     * @param {Command} command
     */
    commandUnit(G, ctx, unitId, command) {
      const unit = G.units[unitId];

      if (!unit) {
        console.log("No unit");
        return INVALID_MOVE;
      }

      const { currentPlayer } = ctx;

      if (currentPlayer !== unit.player) {
        console.log("Wrong army unit");
        return INVALID_MOVE;
      }

      if (!unit.ready) {
        console.log("Not ready");
        return INVALID_MOVE;
      }

      const unitData = UnitData[unit.type];
      const { movement } = unitData;

      const distance =
        Math.abs(command.destination.x - unit.position.x) +
        Math.abs(command.destination.y - unit.position.y);

      if (distance > movement) {
        console.log("Too far");
        return INVALID_MOVE;
      }

      unit.position.x = command.destination.x;
      unit.position.y = command.destination.y;
      unit.ready = false;
    },
  },

  turn: {
    onEnd(G, ctx) {
      Object.values(G.units)
        .filter((u) => u.player === ctx.currentPlayer)
        .forEach((u) => {
          u.ready = true;
        });
    },
  },
};

export { default as TileType } from "./enums/TileType";
export { default as UnitType } from "./enums/UnitType";
