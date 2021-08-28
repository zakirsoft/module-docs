module.exports = {
//   locales: {
//     // The key is the path for the locale to be nested under.
//     // As a special case, the default locale can use '/' as its path.
//     '/': {
//       lang: 'en-US',
//       title: 'VuePress English',
//       description: 'Vue-powered Static Site Generator',
//     },
//     '/bn/': {
//       lang: 'bn-BD',
//       title: 'VuePress Bangla',
//       description: 'Vue 驱动的静态网站生成器',
//     },
//   },
  lang: 'en-US',
  title: 'Laravel Module',
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],

  themeConfig: {
    logo: '/images/logo.png',
    docsDir: 'docs',
    // locales: {
    //   '/': {
    //     selectLanguageName: 'English',
    //   },
    //   '/bn/': {
    //     selectLanguageName: 'Bangla',
    //   },
    // },
    sidebar: 'auto',
    navbar: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/', },
        { text: 'Modules', link: '/module/' },
        {
          text: 'Example Menu',
          children: [
            {
              text: 'Bundlers',
              children: [
                '/reference/bundler/webpack.md',
                '/reference/bundler/vite.md',
              ],
            },
            {
              text: 'Default Theme',
              children: [
                '/reference/default-theme/config.md',
                '/reference/default-theme/frontmatter.md',
                '/reference/default-theme/components.md',
                '/reference/default-theme/markdown.md',
                '/reference/default-theme/styles.md',
              ],
            },
          ],
        },
        { text: 'Github', link: 'https://github.com/zakirsoft/laravel-module' },
    ],
    sidebar: {
      '/guide/': [
        '',
        { text: 'All Modules', link: '/module' }
      ]
    }
  },
}
