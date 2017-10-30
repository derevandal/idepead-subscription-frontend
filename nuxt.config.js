module.exports = {
  /*
  ** Build configuration
  */
  build: {
    analyze: true
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
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
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/webpackmonitor'
  ]

}
