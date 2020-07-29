<template>
  <div class="download">
    <Title title="FigmaCN" des="Figma 客户端汉化补丁、 Chrome 插件">
      <CNLogo />
    </Title>
    <p>
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
          <a class="left" href="/app.asar" download="app.asar">
            <img src="../assets/download-icon-client.png" alt="" />
            <Arrow />
          </a>
          <div class="right">
            <h3>安装指南</h3>
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
            <a href="https://chrome.google.com/webstore/detail/figmacn/japkpjkpfdakpkbcehooampdjfgefndj" target="_blank">
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
                   地址栏输入 chrome://extensions 进入扩展程序管理界面，找到该插件，点击关闭按钮即可。
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <FooterCom />
    <div class="HIDDEN">
      <CNLogo />
      <Icon1 />
      <Arrow />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title"
import FooterCom from "@/components/FooterCom"
import CNLogo from "../assets/download-logo.svg"
import Icon1 from "../assets/download-icon-1.svg"
import Arrow from "../assets/download-icon-arrow.svg"

export default {
  name: "Download",
  components: {
    Title,
    CNLogo,
    Icon1,
    Arrow,
    FooterCom
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
    }
  }
}
</script>

<style lang="scss" scoped>
.download {
  z-index: 99999;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--mg-2);
  cursor: default !important;
  background-color: var(--color-black-2);

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
      margin-top: var(--mg-3);

      .client {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1180px;

        .left {
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

            &:nth-of-type(2) {
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
</style>