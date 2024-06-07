import { defineConfig } from "vitepress";

export default defineConfig({
  // 网站标题
  title: "Just Devise",
  // 网站描述
  description: "基于 Vue3 的组件库",
  // 打包目录
  dest: "./dist",
  base: "/just-devise/",
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
    docFooter: { prev: "上一篇", next: "下一篇" },
    displayAllHeaders: true, // 默认值：false
    // socialLinks: [{ icon: "github", link: "https://github.com/justcho/justd" }],
    // 导航栏配置
    nav: [{ text: "文档", link: "/guide/" }],
    sidebar: [
      {
        text: "基础",
        collapsed: false,
        items: [
          {
            text: "安装",
            link: "/guide/install",
          },
          {
            text: "快速上手",
            link: "/guide/quickStart",
          },
        ],
      },
      {
        text: "通用",
        collapsed: false,
        items: [
          {
            text: "Button 按钮",
            link: "/guide/button",
          },
          {
            text: "Icon 图标",
            link: "/guide/icon",
          },
          // {
          //   text: "Typography 排版",
          //   link: "/guide/typography",
          // },
        ],
      },
      {
        text: "布局",
        collapsed: false,
        items: [
          {
            text: "Grid 栅格",
            link: "/guide/grid",
          },
          {
            text: "Layout 布局",
            link: "/guide/layout",
          },
        ],
      },
      {
        text: "数据录入",
        collapsed: false,
        items: [
          {
            text: "Input 输入框",
            link: "/guide/input",
          },
          {
            text: "Switch 开关",
            link: "/guide/switch",
          },
        ],
      },
      {
        text: "数据展示",
        collapsed: false,
        items: [
          {
            text: "Tabs 标签页",
            link: "/guide/tabs",
          },
        ],
      },
      {
        text: "反馈",
        collapsed: false,
        items: [
          {
            text: "Dialog 对话框",
            link: "/guide/dialog",
          },
          {
            text: "Popover 气泡弹出层",
            link: "/guide/popover",
          },
          {
            text: "BackTop 回到顶部",
            link: "/guide/backTop",
          },
        ],
      },
    ],

    footer: {
      copyright:
        '<a href="https://justcho.life" target="_blank">Copyright © 2023 justcho.life</a>',
    },
  },
});
