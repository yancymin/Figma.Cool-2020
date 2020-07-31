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
@import url("./style/mobile.scss");

#app {
  font-family: 'Noto Sans SC', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
