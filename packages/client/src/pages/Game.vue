<template>
  <p>Game page</p>
  <button @click="endTurn">END TURN</button>
  <game-canvas
    class="game-canvas"
    v-if="state"
    :game="state.G"
    ref="canvas"
    :scale="2"
    :playerId="state.ctx.currentPlayer"
    @command="handleCommand"
  />
</template>

<script>
import WarsGame from "@wars/game";
import { Client } from "boardgame.io/client";

import GameCanvas from "../components/GameCanvas.vue";

export default {
  name: "GamePage",
  components: { GameCanvas },
  data: () => ({
    client: Client({ game: WarsGame }),
    state: null,
  }),
  async mounted() {
    this.client.subscribe((state) => {
      this.state = state;
    });
    this.client.start();
  },
  beforeRouteLeave() {
    this.client.stop();
  },
  methods: {
    handleCommand(unitId, command) {
      this.client.moves.commandUnit(unitId, command);
    },
    endTurn() {
      this.client.events.endTurn();
    },
  },
};
</script>

<style>
.game-canvas {
  display: block;
}
</style>
