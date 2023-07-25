import { defineConfig } from 'vitepress'
import sidebar from './sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lulu's Favorites",
  description: `Welcome to "Lulu's Favorites"! Explore the tech wonders from my browser favorites - coding, hardware, and more. Let's embark on this tech journey together!`,
  head: [
    ['link', { rel: "icon", href: "/1F31F.svg" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/1F31F.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Favorites', link: '/welcome' }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lulu0119/Lulus-Favorites' }
    ],
    footer: {
      message: `Content on "Lulu's Favorites" is under CC BY-NC-SA 4.0.`,
      copyright: '© 2023-present Lulu All Rights Reserved.'
    }
  }
})
