<template>
  <!-- <canvas ref="canvas" width="800" height="800" class="app__canvas" /> -->
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/editor">Editor</router-link>
    <router-link to="/games/123">Game</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  padding: 1rem;
}
</style>
