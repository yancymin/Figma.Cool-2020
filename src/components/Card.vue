<template>
  <div class="card" :style="bgColor">
    <img :src="imgSrc" alt="" srcset="" class="logo" />
    <h3 class="title">{{ title }}</h3>
    <p class="info">{{ info }}</p>
    <p class="des">{{ des }}</p>
    <img :src="rightSrc" alt="" srcset="" class="right">
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["imgSrc", "title", "info", "des", "bgColor", "rightSrc"]
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
  width: 100%;
  padding: 32px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 32px;
  text-align: left;
  box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.2);
  color: white;

  .logo {
    margin-bottom: 32px;
  }

  .title {
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .info {
      font-weight: 300;
        font-size: 20px;
        line-height: 20px;
    margin-bottom: 32px;
  }

  .des {
      max-width: 423px;
      font-weight: 300;
    font-size: 14px;
    line-height: 20px;
  }

  .right{
      position: absolute;
      right: -10%;
  }
}
</style>
