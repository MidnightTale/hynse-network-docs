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
  title: "Hynse Network",
  description: "รวมการอัปเดตและเปลี่ยนต่างๆของเซิร์ฟเวอร์ และ วิธีการใช้งาน หรือ feature ต่างๆที่ไม่เคยรู้ว่ามีในเซิร์ฟเวอร์",
  srcDir: './src',
  cleanUrls: true,
  lastUpdated: true,
  head: [
      ['link', { rel: 'icon', href: '/favicon_pride.ico' }],
      ['meta', { name: 'darkreader-lock' }],
    ],
  themeConfig: {
    // editLink: {
    //   pattern: 'https://github.com/MidnightTale/hynse-network-docs/tree/main/:path'
    // },
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
          { text: '🔧 สูตรคราฟ', link: '/changes/crafting' },
          { text: '🔩 ไอเท็ม', link: '/changes/item' },
          { text: '🧱 บล็อก', link: '/changes/block' },
          { text: '😸 สิ่งมีชีวิต', link: '/changes/entity' }
        ]
      },
      {
        text: 'ส่วนเสริมเพิ่มเติม',
        items: [
          { text: '🛠️ Extender Tool', link: '/addon/extender_tool' },
          { text: '💀 Hydeath', link: '/addon/hydeath' },
          { text: '💰 Lootin', link: '/addon/lootin' },
          { text: '⚖️ Scaleshifter', link: '/addon/scaleshifter' },
          { text: '🎙️ Voicechat', link: '/addon/voicechat' }        
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/puQfTaebn4' },
      { icon: 'github', link: 'https://github.com/MidnigtTale' }
    ],
  }
})
