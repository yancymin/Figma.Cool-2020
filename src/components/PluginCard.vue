<template>
  <a class="card" :style="bgColor" :href="href" target="_blank">
    <div class="left">
      <img :src="imgSrc" alt="" srcset="" class="logo" />
      <h3 class="title">{{ title }}</h3>
      <p class="info">{{ info }}</p>
      <p class="des">{{ des }}</p>
    </div>
    <img :src="rightSrc" alt="" srcset="" class="right" />
  </a>
</template>

<script>
export default {
  name: "card",
  props: ["imgSrc", "title", "info", "des", "rightSrc", "href"]
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 32px;
  text-align: left;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 1px rgba(92, 99, 163, 0.7);
  color: white;
  background: #3e4373;

  .logo {
    margin-bottom: 32px;
  }

  .title {
    color: #D8D9E3;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .info {
    color: #D8D9E3;
    font-weight: 300;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 32px;
  }

  .des {
    opacity: 0.7;
    max-width: 300px;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
  }

  .right {
    width: 100%;
    max-width: 207px;
  }
}
</style>
