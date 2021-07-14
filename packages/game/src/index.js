import mapData from "../map-data.json";

export default {
  setup() {
    return {
      ...mapData,
    };
  },

  moves: {},
};

export { default as TileType } from "./enums/TileType";
export { default as UnitType } from "./enums/UnitType";
