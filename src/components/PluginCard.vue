<template>
  <a class="card" :href="href" target="_blank" ref="card">
    <div class="left">
      <img :src="imgSrc" :alt="imgSrc" class="logo" />
      <h3 class="title">{{ title }}</h3>
      <p class="info">{{ info }}</p>
      <p class="des">{{ des }}</p>
    </div>
    <img :src="rightSrc" :alt="rightSrc" class="right" />
  </a>
</template>

<script>
export default {
  name: "card",
  props: ["imgSrc", "title", "info", "des", "rightSrc", "href", "bgColor"]
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
  cursor: pointer;
  background: #3e4373;
  overflow: hidden;
  transition: all 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    /* transform: scale3d(0.97, 0.97, 0.97); */

    .logo {
      transform: scale(1.2);
    }

    .right {
      transform: scale3d(1.03, 1.03, 1.03) perspective(830px) rotateY(-20deg)
        rotateZ(2deg) translateX(-20px);
    }
  }

  h3 {
    font-family: "Noto Sans SC", sans-serif;
    font-weight: 500;
  }

  p {
    font-family: "Noto Sans SC", sans-serif;
    font-weight: 400;
  }

  .logo {
    margin-bottom: 32px;
    margin-left: -8px;
    transition: all 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .title {
    color: #d8d9e3;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .info {
    color: #d8d9e3;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 32px;
  }

  .des {
    opacity: 0.7;
    max-width: 280px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  .right {
    width: 100%;
    max-width: 207px;
    will-change: transform;
    transition: all 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
}

@media screen and (max-width: 750px) {
  .card {
    width: 100%;
    max-width: 100% !important;

    .right {
      display: none;
    }
  }
}
</style>
