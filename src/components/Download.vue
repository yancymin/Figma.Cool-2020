<template>
  <div class="download" :class="{ downloadShow: this.downloadClose }">
    <Title title="FigmaCN" des="Figma 客户端汉化补丁、 Chrome 插件">
      <CNLogo />
    </Title>
    <p class="des">
      现在，你可以使用客户端汉化补丁和 Chrome 浏览器插件来使 Figma
      支持中文界面。
    </p>
    <div class="pics">
      <img src="../assets/pic-1.png" alt="pic-1" />
    </div>
    <div class="guide">
      <div class="switch">
        <Icon1 />
        <div class="tabs">
          <span
            class="tab-1"
            :class="{ tabActive: this.target1 }"
            @click="e => tabSwitch(e)"
            >客户端汉化补丁</span
          >
          <span
            class="tab-2"
            :class="{ tabActive: this.target2 }"
            @click="e => tabSwitch(e)"
            >Chrome 浏览器插件</span
          >
        </div>
      </div>
      <div class="content">
        <div class="client" v-show="this.target1">
          <div class="left">
            <img src="../assets/download-icon-client.png" alt="" />
            <div class="links">
              <a href="/macOS/app.asar" download="app.asar" class="mac">
                <Apple />
              </a>
              <a href="/Windows/app.asar" download="app.asar" class="win">
                <Windows />
              </a>
            </div>
          </div>
          <div class="right">
            <h3>macOS 安装指南</h3>
            <ul>
              <li>
                下载 app.asar 文件，在 Finder
                （访达）中进入<strong>「应用程序」</strong>文件夹；
              </li>
              <li>
                在「应用程序」中，找到
                Figma，右键选择<strong>「显示包内容」</strong>进入；
              </li>
              <li>
                把 app.asar 文件放入 <strong>Contents/Resources</strong>，重启
                Figma 。
              </li>
            </ul>
            <h3>Windows 安装指南</h3>
            <ul>
              <li>
                找到 Figma 安装文件夹（可在开始菜单下找到 Figma，右键-更多-打开文件夹位置。进入相应文件夹后，右键 Figma 图标，选择「打开文件所在的位置」）；
              </li>
              <li>
                打开 <strong>app-**.*.*</strong> 文件夹（*代表数字，选择和补丁对应的版本号） ；
              </li>
              <li>
                把 app.asar 文件放入<strong> resources</strong>，重启 Figma 。
              </li>
            </ul>
            <h3>Q&A</h3>
            <ul>
              <li>安装补丁后会不会影响性能或者出现奇怪的 bug？</li>
              <p>不会，我们仅是做了界面的汉化，没有改动任何功能性程序。</p>
              <li>支持切换语言吗？</li>
              <p>
                在 Figma
                的顶部菜单栏第一项下拉菜单中，我们提供了「中英切换」的选项。
              </p>
              <li>不想用汉化了怎么办？</li>
              <p>
                在安装补丁之前，请备份程序原生的 app.asar
                文件。想恢复原生状态请将备份的文件替换补丁文件即可。
              </p>
            </ul>
          </div>
        </div>
        <div class="chrome" v-show="this.target2">
          <div class="left">
            <a
              href="https://chrome.google.com/webstore/detail/figmacn/japkpjkpfdakpkbcehooampdjfgefndj"
              target="_blank"
            >
              <img src="../assets/download-icon-store.png" alt="" />
            </a>
            <a href="/figmaCN.zip" download="figmaCN.zip">
              <img src="../assets/download-icon-zip.png" alt="" />
              <Arrow />
            </a>
          </div>
          <div class="right">
            <h3>Chrome 插件商店安装</h3>
            <ul>
              <li>
                点击左方 <strong> Chrome Web Store </strong> 进入插件商店；
              </li>
              <li>点击页面右上角<strong>「添加至 Chrome」</strong>。</li>
            </ul>
            <h3>下载离线包安装</h3>
            <ul>
              <li>
                地址栏输入
                <strong>chrome://extensions</strong> 进入扩展程序管理界面；
              </li>
              <li>
                在扩展程序界面开启右上方的<strong>「开发者模式」</strong>；
              </li>
              <li>
                <strong>解压</strong> 下载好的 .zip 文件并记下解压后的文件路径；
              </li>
              <li>
                点击左上角<strong>「加载已解压的扩展程序」</strong>，选择解压后的文件夹。
              </li>
            </ul>
            <h3>Q&A</h3>
            <ul>
              <li>安装插件后会不会影响性能或者出现奇怪的 bug？</li>
              <p>不会，我们仅是做了界面的汉化，没有改动任何功能性程序。</p>
              <li>选择哪种安装方式？</li>
              <p>
                如果可以科学上网，推荐商店安装，方便后续自动更新。
              </p>
              <li>不想用汉化了怎么办？</li>
              <p>
                地址栏输入 chrome://extensions
                进入扩展程序管理界面，找到该插件，点击关闭按钮即可。
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterCom /> -->
    <div class="HIDDEN">
      <CNLogo />
      <Icon1 />
      <Arrow />
      <Apple />
      <Windows />
      <Close />
    </div>
    <i
      class="close"
      @click="() => this.handleClose()"
    >
      <Close />
    </i>
  </div>
</template>

<script>
import Title from "@/components/Title"
// import FooterCom from "@/components/FooterCom"
import CNLogo from "../assets/download-logo.svg"
import Icon1 from "../assets/download-icon-1.svg"
import Arrow from "../assets/download-icon-arrow.svg"
import Windows from "../assets/windows.svg"
import Apple from "../assets/apple.svg"
import Close from "../assets/close.svg"

export default {
  name: "Download",
  components: {
    Title,
    CNLogo,
    Icon1,
    Arrow,
    // FooterCom,
    Windows,
    Apple,
    Close
  },
  props: ["downloadClose"],
  watch: {
    downloadClose () {
      window.scrollTo(0, 0)
    }
  },
  data () {
    return {
      target1: 1,
      target2: 0
    }
  },
  methods: {
    tabSwitch (e) {
      this.target1 = !this.target1
      this.target2 = !this.target2
    },
    handleClose () {
      this.$emit("close")
    }
  }
}
</script>

<style lang="scss" scoped>
.download {
  visibility: hidden;
  z-index: 99999;
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--mg-2);
  cursor: default !important;
  background-color: var(--color-black-2);
  overflow: hidden;

  p {
    width: 520px;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-top: var(--mg-4);
  }

  .pics {
    max-width: 1180px;
    width: 100%;
    padding: 20px;
    border: 4px solid #3e4373;
    box-sizing: border-box;
    box-shadow: inset 0px 1px 1px rgba(92, 99, 163, 0.6);
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
    border-radius: 32px;
    margin-top: var(--mg-2);

    img {
      width: 100%;
      border-radius: 12px;
    }
  }

  .guide {
    margin-top: var(--mg-1);
    margin-bottom: var(--mg-4);

    .switch {
      svg {
        margin-bottom: var(--mg-4);
      }

      .tabs {
        span {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          font-size: 16px;
          line-height: 16px;
          margin: 0 40px 0 0;
          padding: 2px;
          transition: all 0.3s ease;
          cursor: pointer;

          &:hover {
            color: #b2b4c7;
            &::after {
              opacity: 1;
              transform: scale(1);
            }
          }

          &::after {
            opacity: 0;
            z-index: -1;
            position: absolute;
            content: "";
            display: block;
            left: -7px;
            top: -7px;
            width: 100%;
            height: 100%;
            padding: 8px 8px 9px 8px;
            background: #3e4373;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25),
              inset 0px 1px 1px rgba(92, 99, 163, 0.7);
            border-radius: 8px;
            transform: scale(0.96);
            transition: all 0.25s ease-out;
          }

          &:last-child {
            margin: 0;
          }
        }
      }
    }

    .content {
      width: 100vw;
      max-width: 1180px;
      height: 1200px;
      margin: var(--mg-3) 0;

      .client {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1180px;

        .left {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 30%;
          height: 268px;
          padding: 40px 0;
          background: var(--color-black-1);
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7);
          border-radius: 32px;
          cursor: pointer;

          &::before {
              content: "Figma 版本号：86.5.0";
              position: absolute;
              bottom: -40px;
              padding: 8px;
              font-size: 14px;
              line-height: 14px;
              font-family: source-han-sans-simplified-c, sans-serif;
              font-weight: 300;
              cursor: default;
          }

          .links {
            position: relative;
            bottom: -6px;
            display: flex;
            z-index: 9;
            width: 90%;
            padding: 0 16px;
            background: #292929;
            box-shadow: 0px -1px 0px #2e2e2e;
            border-radius: 16px;
            display: flex;
            justify-content: center;
            a {
              width: 100%;
              margin: 0 20px;
              padding: 16px;
              display: flex;
              justify-content: center;
              align-items: center;
              svg {
                path {
                  transition: all 0.3s ease;
                }
              }

              &:hover {
                path {
                  fill: rgba(255, 255, 255, 1);
                }
              }
            }
          }

          img {
            height: 100px;
            margin-bottom: 40px;
          }
        }
        .right {
          width: 70%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 10%;

          h3 {
            font-size: 40px;
            line-height: 40px;
            font-weight: 700;
            text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
            margin-bottom: 48px;

            &:nth-of-type(2), &:nth-of-type(3) {
              margin-top: 120px;
            }
          }

          ul,
          li,
          h3,
          p {
            width: 100%;
            text-align: left;
          }

          li,
          p {
            font-size: 20px;
            line-height: 30px;
            font-weight: 300;
          }

          p {
            color: #8b8eab;
            margin: 0 0 24px 0;
          }

          li {
            position: relative;
            padding: 16px 0 16px 50px;

            &:nth-of-type(1) {
              &::before {
                content: "1";
              }
            }
            &:nth-of-type(2) {
              &::before {
                content: "2";
              }
            }
            &:nth-of-type(3) {
              &::before {
                content: "3";
              }
            }

            &::before {
              position: absolute;
              content: "";
              display: block;
              left: 0;
              width: 28px;
              height: 28px;
              border: 1px solid #3e4373;
              border-radius: 1000px;
              text-align: center;
              font-size: 18px;
              line-height: 24px;
              font-weight: 700;
            }
          }

          strong {
            color: var(--color-iceBlue-1);
          }
        }
      }

      .chrome {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1180px;

        .left {
          width: 30%;
          a {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 268px;
            padding: 40px 0;
            background: var(--color-black-1);
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7);
            border-radius: 32px;
            cursor: pointer;
            margin-bottom: 32px;

            &:first-child {
              justify-content: center;
              height: auto;

              img {
                height: 48px;
                margin: 0;
              }
            }
          }

          img {
            height: 100px;
            margin-bottom: 40px;
          }
        }
        .right {
          width: 70%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 10%;

          h3 {
            font-size: 40px;
            line-height: 40px;
            font-weight: 700;
            text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
            margin-bottom: 48px;

            &:nth-of-type(2),
            &:nth-of-type(3) {
              margin-top: 120px;
            }
          }

          ul,
          li,
          h3,
          p {
            width: 100%;
            text-align: left;
          }

          li,
          p {
            font-size: 20px;
            line-height: 30px;
            font-weight: 300;
          }

          p {
            color: #8b8eab;
            margin: 0 0 24px 0;
          }

          li {
            position: relative;
            padding: 16px 0 16px 50px;

            &:nth-of-type(1) {
              &::before {
                content: "1";
              }
            }
            &:nth-of-type(2) {
              &::before {
                content: "2";
              }
            }
            &:nth-of-type(3) {
              &::before {
                content: "3";
              }
            }
            &:nth-of-type(4) {
              &::before {
                content: "4";
              }
            }

            &::before {
              position: absolute;
              content: "";
              display: block;
              left: 0;
              width: 28px;
              height: 28px;
              border: 1px solid #3e4373;
              border-radius: 1000px;
              text-align: center;
              font-size: 18px;
              line-height: 24px;
              font-weight: 700;
            }
          }

          strong {
            color: var(--color-iceBlue-1);
          }
        }
      }
    }
  }
}
.HIDDEN {
  display: none;
}

.tabActive {
  color: #b2b4c7;
  &::after {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
}

.close {
  position: fixed;
  right: 24px;
  top: 24px;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  background: transparent;

  &:hover {
    background: #3d3d3d;
  }
}

.downloadShow {
  visibility: visible;
}
</style>
