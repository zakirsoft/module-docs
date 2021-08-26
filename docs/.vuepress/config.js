module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
    '/bn/': {
      lang: 'bn-BD',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  head: [['link', { rel: 'icon', href: 'https://vuejs.org/images/logo.png' }]],

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/bn/': {
        selectLanguageName: 'Bengali',
      },
    },
    sidebar: 'auto',
    sidebar: {
      '/guide/': [
        '',
        'More Informations'
      ]
    }
  },
}
