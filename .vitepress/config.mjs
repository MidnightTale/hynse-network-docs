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
    nav: [
      { text: 'เว็บหลัก', link: 'https://hynse.net' },
      { text: 'แผนที่', link: 'https://map.hynse.net' },
    ],

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
          { text: '🛠️ Extender Tool', link: '/addons/extender_tool' },
          { text: '🛠️ Trowel', link: '/addons/trowel' },
          { text: '🛠️ Rotation Wrench', link: '/addons/rotation_wrench' },
          { text: '🛠️ Bottle Cloud', link: '/addons/bottle_cloud' },
          { text: '💀 Hydeath', link: '/addons/hydeath' },
          { text: '💰 Lootin', link: '/addons/lootin' },
          { text: '⚖️ Scaleshifter', link: '/addons/scaleshifter' },
          { text: '🎙️ Voicechat', link: '/addons/voicechat' }        
        ]
      },
      {
        text: 'เซิร์ฟเวอร์',
        items: [
          { text: '🍦 Vanilla', link: '/servers/survival' },   
          { text: '🎨 Creative', link: '/servers/creative' },   
          { text: '🚧 Testing', link: '/servers/dev' },   
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/puQfTaebn4' },
      { icon: 'github', link: 'https://github.com/MidnigtTale' }
    ],
  }
})
