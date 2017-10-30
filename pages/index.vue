<template lang="pug">
  section.hero.is-fullheight.is-default.is-bold
    .hero-head
      nav.navbar
        .container
          .navbar-brand
            a.navbar-item(href="../")
              img(src="https://bulma.io/images/bulma-logo.png" alt="Logo")
            span.navbar-burger.burger(data-target="navbarMenu")
              span
              span
              span
          #navbarMenu.navbar-menu
            .navbar-end
              a.navbar-item.is-active
                | Home
              a.navbar-item
                | Examples
              a.navbar-item
                | Features
              a.navbar-item
                | Team
              a.navbar-item
                | Help
    .hero-body
      .container.has-text-centered
        .columns.is-vcentered
          .column.is-5
            figure.image.is-4by3
              img(src="http://placehold.it/800x600" alt="Description")
          .column.is-6.is-offset-1
            h1.title.is-2
              | Superhero Scaffolding
            h2.subtitle.is-4
              | Let this cover page describe a product or service.
            br
            p.has-text-centered
              a.button.is-medium.is-info.is-outlined
                | Learn more
    .hero-foot
      .container
        .tabs.is-centered
          ul
            li
              a And this at the bottom

</template>

<script>
  export default {
    data () {
      return {
        online: true
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style>
</style>
