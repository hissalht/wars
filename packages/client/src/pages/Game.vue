<template>
  <p>Game page</p>
  <game-canvas v-if="state" :game="state.G" ref="canvas" :scale="2" />
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
    this.client.start();
    this.client.subscribe((state) => {
      this.state = state;
    });
  },
  beforeRouteLeave() {
    this.client.stop();
  },
};
</script>
