import { INVALID_MOVE } from "boardgame.io/core";

import UnitData from "./data/UnitData";

export default {
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

    const movementCost =
      Math.abs(unit.position.x - command.destination.x) +
      Math.abs(unit.position.y - command.destination.y);

    if (movementCost > movement) {
      console.log("Too far");
      return INVALID_MOVE;
    }

    // const destinationTileType =

    unit.position.x = command.destination.x;
    unit.position.y = command.destination.y;
    unit.ready = false;
  },
};
