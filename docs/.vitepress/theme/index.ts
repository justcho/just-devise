// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
// import "./justd.scss";
import "./index.scss";
import "just-devise/dist/lib/justd.css";

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  // @ts-ignore
  enhanceApp({ app, router, siteData }) {
    // app.component("Comment", comment);
  },
};
