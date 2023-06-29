import { computed } from "vue";
module.exports = {
  // 网站标题
  title: "Just Devise",
  // 网站描述
  description: "基于 Vue3 的组件库",
  // 打包目录
  dest: "./dist",
  base: "/",
  // 头部head
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/logo.png" }],
  ],
  // 主题配置
  themeConfig: {
    lang: "zh-CN",
    smoothScroll: true, // 启动页面丝滑滚动
    outline: [2, 3], // 识别<h2>-<h4>的标题
    outlineTitle: "本页目录", // aside第一行显示的文本
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    darkModeSwitchLabel: "白/夜",
    displayAllHeaders: true, // 默认值：false
    socialLinks: [{ icon: "github", link: "https://github.com/justcho" }],
    // 导航栏配置
    nav: [{ text: "文档", link: "/guide/" }],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/install",
            },
            {
              text: "快速开始",
              link: "/guide/quickStart",
            },
          ],
        },
        {
          text: "组件列表",
          items: [
            {
              text: "Switch 开关",
              link: "/guide/switch",
            },
            {
              text: "Button 按钮",
              link: "/guide/button",
            },
          ],
        },
      ],
    },
    footer: {
      copyright: "Copyright©2023 JustCho. All rights reserved.",
    },
  },
};
