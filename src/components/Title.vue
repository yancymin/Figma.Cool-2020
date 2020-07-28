<template>
  <div class="title">
    <slot></slot>
    <h1>{{title}}</h1>
    <span>{{des}}</span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["title", "des"]
}
</script>

<style lang="scss" scoped>
.title {
    text-align: center;
    h1 {
        font-family: source-han-sans-simplified-c, sans-serif;
        font-weight: 700;
        font-size: 88px;
        line-height: 88px;
        text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        margin-top: 48px;
        filter: drop-shadow(0px -1px 0 #6D73A6);
        margin-bottom: 56px;
    }

    span {
        font-weight: 500;
        font-size: 16;
        line-height: 16px;
        padding: 8px 16px;
        border: 2px solid var(--color-blue-1);
        border-radius: 6px;
        margin-top: 48px;
    }
}
</style>
