<template>
  <footer>
    <Logo />
    <div class="footer_links">
      <a href="">
        <Wechat />
      </a>
      <a href="">
        <Twitter />
      </a>
      <a href="">
        <Weibo />
      </a>
      <a href="">
        <Zhihu />
      </a>
      <a href="">
        <Github />
      </a>
    </div>
    <span>Copyright © 2020 Figma.Cool.</span>
  </footer>
</template>

<script>
import Logo from "../assets/hero-logo.svg"
import Github from "../assets/ourstory-icon-github.svg"
import Twitter from "../assets/ourstory-icon-twitter.svg"
import Zhihu from "../assets/icon-zhihu.svg"
import Wechat from "../assets/icon-wechat.svg"
import Weibo from "../assets/icon-weibo.svg"

export default {
  name: "FooterCom",
  components: {
    Logo,
    Github,
    Twitter,
    Zhihu,
    Wechat,
    Weibo
  }
}
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  width: 100vw;
  padding: var(--mg-1) 0;
  margin-top: var(--mg-3);

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: var(--color-gradient-1);
  }

  .footer_links {
    margin-top: var(--mg-4);
    a {
      margin: 0 10px;
    }

    margin-bottom: 16px;
  }

  span {
    font-size: 16px;
    line-height: 16px;
  }
}
</style>
