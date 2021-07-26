import mapData from "../map-data.json";
import moves from "./moves";

function _log(g) {
  console.log(JSON.parse(JSON.stringify(g)));
}

export default {
  /** @returns {WarsGame} */
  setup() {
    const units = {};

    mapData.units.forEach((unit, i) => {
      const id = unit.type + "-" + i;
      units[id] = { ...unit, id, ready: true };
    });

    return {
      width: mapData.width,
      height: mapData.height,
      tiles: mapData.tiles,
      units,
    };
  },

  moves,

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
