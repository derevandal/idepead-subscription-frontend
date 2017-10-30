<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$store.getters.getSeoTitle,
      link: [
        { hid: 'canonical', rel: 'canonical', content: this.$store.getters.getSeoDomain }
      ],
      meta: [
        { hid: 'description', n: 'description', c: this.$store.getters.getSeoDescription },
        { hid: 'twitter:card', n: 'twitter:card', c: 'summary' },
        { hid: 'twitter:site', n: 'twitter:site', c: '@idepead' },
        { hid: 'twitter:title', n: 'twitter:title', c: this.$store.getters.getSeoTitle },
        { hid: 'twitter:description', n: 'twitter:description', content: this.$store.getters.getSeoDescription },
        { hid: 'twitter:creator', n: 'twitter:creator', c: '@idepead' },
        { hid: 'twitter:image', n: 'twitter:image', c: this.$store.getters.getSeoImage },
        { hid: 'og:title', n: 'og:title', c: this.$store.getters.getSeoTitle },
        { hid: 'og:image', n: 'og:image', c: this.$store.getters.getSeoImage },
        { hid: 'og:type', n: 'og:type', c: 'website' },
        { hid: 'og:url', n: 'og:url', c: this.$store.getters.getSeoDomain },
        { hid: 'og:description', n: 'og:description', c: this.$store.getters.getSeoDescription },
        { hid: 'og:site_name', n: 'og:site_name', c: `${this.$store.getters.getSeoTitle} - IDEPead` },
        { hid: 'fb:admins', n: 'fb:admins', c: '264917726946702' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "~normalize-scss/sass/normalize/_import-now";
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Import Bulma and Buefy styles

@import "~bulma";
// @import "~buefy/src/scss/buefy";

html,
body {
  min-height: 100vh;
}

</style>
