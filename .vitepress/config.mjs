import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    optimizeDeps: {
      include: [
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas',
      ],
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
      ],
    },
  },
  title: "HynseDocs",
  description: "A VitePress Site",
  cleanUrls: true,
  transformHead: ({ pageData }) => {
    head: [
      ['link', { rel: 'icon', href: '' }],
      ['meta', { name: 'darkreader-lock' }],
    ],
    head.push([
      "meta",
      { property: "og:title", content: pageData.frontmatter.title }
    ])
    head.push([
      "meta",
      { property: "og:description", content: pageData.frontmatter.description }
    ])
    return head;
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'แปลี่ยนแปลง', link: '/changes' }
    // ],

    sidebar: [
      {
        text: 'แปลี่ยนแปลง',
        items: [
          { text: 'สูตรคราฟ', link: '/changes/crafting' },
          { text: 'ไอเท็ม', link: '/changes/item' },
          { text: 'บล็อก', link: '/changes/block' },
          { text: 'สิ่งมีชีวิต', link: '/changes/entity' }
        ]
      },
      {
        text: 'ส่วนเสริมเพิ่มเติม',
        items: [
          { text: 'Extender Tool', link: '/addon/extender_tool' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/puQfTaebn4' },
      { icon: 'github', link: 'https://github.com/MidnigtTale' }
    ],
  }
})
