module.exports = {
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    extend (config, { isClient, dev }) {
      if (isClient) {
        config.devtool = 'eval-source-map'
      }
      if (dev && isClient) {
        config.module.rules.push({
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                webp: {
                  quality: 75
                }
              }
            }
          ]
        })
      }
      return config
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    htmlAttrs: {
      lang: 'pt-br'
    },
    titleTemplate: '%s - IDEPead',
    meta: [
      { charset: 'utf-8' },
      { lang: 'pt-br' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700' }
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js?render=explicit', async: true, defer: true, body: true }
    ]
  },

  meta: {
    title: '',
    'og:title': '',
    description: '',
    'og:description': ''
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    name: 'Inscreva-se',
    lang: 'pt-br',
    theme_color: '#3B8070'
  },
  /*
  ** Router
  */
  // router: {
  //   scrollBehavior: (to, from, savedPosition) => {
  //     // savedPosition is only available for popstate navigations.
  //     if (savedPosition) {
  //       return savedPosition
  //     } else {
  //       let position = {}
  //       // if no children detected
  //       if (to.matched.length < 2) {
  //         // scroll to the top of the page
  //         position = { x: 0, y: 0 }
  //       }
  //       else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
  //         // if one of the children has scrollToTop option set to true
  //         position = { x: 0, y: 0 }
  //       }
  //       // if link has anchor,  scroll to anchor by returning the selector
  //       if (to.hash) {
  //         position = { selector: to.hash }
  //       }
  //       return position
  //     }
  //   }
  // },
  /*
  ** Modules
  */
  modules: [
    ['@nuxtjs/pwa', { meta: false }],
    '@nuxtjs/webpackmonitor',
    '@nuxtjs/bulma'
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~plugins/buefy'
  ]

}
