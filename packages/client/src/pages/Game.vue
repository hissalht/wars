<template>
  <p>Game page</p>
</template>

<script>
import WarsGame from "@wars/game";
import { Client } from "boardgame.io/client";

export default {
  name: "GamePage",
  data: () => ({ client: Client({ game: WarsGame }), state: null }),
  mounted() {
    this.client.start();
    this.client.subscribe((state) => {
      this.state = state;
    });
  },
  computed: {
    context() {
      return this.$refs.canvas.getContext("2d");
    },
  },
  beforeRouteLeave() {
    this.client.stop();
  },
};
</script>
