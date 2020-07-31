<template>
  <a class="card hover-this" :style="bgColor" :href="href" target="_blank">
    <img :src="imgSrc" :alt="imgSrc" class="logo" />
    <h3 class="title">{{ title }}</h3>
    <p class="info">{{ info }}</p>
    <p class="des">{{ des }}</p>
    <img :src="rightSrc" :alt="rightSrc" class="right" />
  </a>
</template>

<script>
export default {
  name: "card",
  props: ["imgSrc", "title", "info", "des", "bgColor", "rightSrc", "href"]
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
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

  h3 {
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 500;
  }

  p {
        font-family: 'Noto Sans SC', sans-serif;
        font-weight: 400;
  }

  &:hover {

    .right {
      transform: scale(1.15);
    }
  }

  & > * {
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

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
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 32px;
  }

  .des {
    opacity: 0.7;
    max-width: 423px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  .right {
    position: absolute;
    top: 8px;
    right: -18px;
    transform-origin: right;
  }
}

@media screen and (max-width: 750px) {
    .card {
        width: 100%;
        max-width: 100% !important;
    }

    .right {
        display: none;
    }
}
</style>
