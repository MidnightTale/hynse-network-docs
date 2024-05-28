import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';

import vitepressNprogress from 'vitepress-plugin-nprogress';
import 'vitepress-plugin-nprogress/lib/css/index.css';

import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css';

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities';
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css';

import './index.css';

export default {
  ...DefaultTheme,
  enhanceApp: function (ctx) {
    vitepressNprogress(ctx);
  },
  Layout: function () {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': function () {
        return h(NolebaseEnhancedReadabilitiesMenu);
      },
      'nav-screen-content-after': function () {
        return h(NolebaseEnhancedReadabilitiesScreenMenu);
      },
    });
  },
};
