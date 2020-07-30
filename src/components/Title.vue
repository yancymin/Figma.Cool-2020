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
        margin-top: 48px;
        text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.6),  0 -1px 1px rgba(255, 255, 255, 0.45);
        margin-bottom: 56px;
    }

    span {
        font-weight: 500;
        font-size: 16;
        line-height: 16px;
        padding: 4px 12px 5px 12px;
        border: 2px solid var(--color-blue-1);
        border-radius: 6px;
        margin-top: 48px;
    }
}

@media screen and (max-width: 750px) {
    .title {
        transform: scale(0.8);
        h1 {
            font-size: 56px;
            line-height: 56px;
            text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4),  0 -1px 1px rgba(255, 255, 255, 0.15);
        }
    }
}
</style>
