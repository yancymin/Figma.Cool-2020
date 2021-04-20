<template>
  <footer>
    <Logo />
    <div class="footer_links">
      <a href="">
        <Wechat />
      </a>
      <a href="https://twitter.com/FigmaCool" target="_blank">
        <Twitter />
      </a>
      <a href="https://www.weibo.com/315838885" target="_blank">
        <Weibo />
      </a>
      <a href="https://www.zhihu.com/people/figma-cool" target="_blank">
        <Zhihu />
      </a>
      <a href="https://github.com/Figma-Cool" target="_blank">
        <Github />
      </a>
    </div>
    <span>Copyright © 2021 Figma.Cool.</span>
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
  display: flex;
  flex-direction: column;
  align-items: center;
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

      &:first-child {
        position: relative;

        &:hover {
          &::after {
            opacity: 1;
            visibility: visible;
            transform: perspective(500px) rotateX(0);
          }
        }

        &::after {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          left: -48px;
          top: -132px;
          content: "";
          display: block;
          padding: 8px;
          width: 100px;
          height: 100px;
          background: url("../assets/qr.png") no-repeat center;
          background-size: cover;
          border-radius: 4px;
          background-size: 94%;
          border-radius: 4px;
          background-color: var(--color-black-2);
          transition: all 0.2s ease-out;
          transform-origin: bottom;
          transform: perspective(500px) rotateX(10deg) scale(0.96);
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);
        }
      }
    }

    margin-bottom: 16px;
  }

  svg path {
    transition: all 0.3s ease;
  }

  a:hover {
    svg path {
      fill: #8690eb;
    }
  }

  span {
    font-size: 14px;
    line-height: 14px;
  }
}
</style>
