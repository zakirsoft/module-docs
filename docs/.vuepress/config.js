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
  title: 'VuePres Docs',
  head: [['link', { rel: 'icon', href: 'https://vuejs.org/images/logo.png' }]],

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
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
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
        {
          text: 'Guide',
          link: '/guide/',
        },
        {
          text: 'Reference',
          children: [
            {
              text: 'VuePress',
              children: [
                {
                  text: 'CLI',
                  link: '/reference/cli.html',
                },
                '/reference/config.md',
                '/reference/frontmatter.md',
                '/reference/components.md',
                '/reference/plugin-api.md',
                '/reference/theme-api.md',
                '/reference/client-api.md',
                '/reference/node-api.md',
              ],
            },
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
    ],
    sidebar: {
      '/guide/': [
        '',
        'More Informations'
      ]
    }
  },
}
