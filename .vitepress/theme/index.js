import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';

import vitepressNprogress from 'vitepress-plugin-nprogress';
import 'vitepress-plugin-nprogress/lib/css/index.css';

import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css';


import './index.css';

export default {
  ...DefaultTheme,
  enhanceApp: function (ctx) {
    vitepressNprogress(ctx);
  },
  Layout: function () {
    return h(DefaultTheme.Layout, null, {
    });
  },
};
