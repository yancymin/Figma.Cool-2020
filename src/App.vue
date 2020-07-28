<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style lang="scss">
@import url("./style/reset.css");
@import url("./style/global.scss");

#app {
  font-family: source-han-sans-simplified-c, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
