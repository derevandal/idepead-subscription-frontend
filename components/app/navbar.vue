<template lang="pug">
nav.navbar.is-transparent
  .navbar-brand
    a.navbar-item(href="https://bulma.io")
      img(src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28")
    a.navbar-item.is-hidden-desktop(href="https://github.com/jgthms/bulma" target="_blank")
      span.icon(style="color: #333;")
        i.fa.fa-lg.fa-github
    a.navbar-item.is-hidden-desktop(href="https://twitter.com/jgthms" target="_blank")
      span.icon(style="color: #55acee;")
        i.fa.fa-lg.fa-twitter
    .navbar-burger.burger(data-target="navMenuDocumentation")
      span
      span
      span
  #navMenuDocumentation.navbar-menu
    .navbar-start
      .navbar-item.has-dropdown.is-hoverable
        a.navbar-link.is-active(href="/documentation/overview/start/")
          | Docs
        .navbar-dropdown
          a.navbar-item(href="/documentation/overview/start/")
            | Overview
          a.navbar-item(href="https://bulma.io/documentation/modifiers/syntax/")
            | Modifiers
          a.navbar-item(href="https://bulma.io/documentation/columns/basics/")
            | Columns
          a.navbar-item(href="https://bulma.io/documentation/layout/container/")
            | Layout
          a.navbar-item.is-active(href="https://bulma.io/documentation/form/general/")
            | Form
          a.navbar-item(href="https://bulma.io/documentation/elements/box/")
            | Elements
          a.navbar-item(href="https://bulma.io/documentation/components/breadcrumb/")
            | Components
          hr.navbar-divider
          .navbar-item
            div
              p.is-size-6-desktop
                strong 0.6.0
              small
                a.bd-view-all-versions(href="https://versions.bulma.io/") View all versions
      .navbar-item.has-dropdown.is-hoverable
        a.navbar-link(href="https://bulma.io/blog/")
          | Blog
        #blogDropdown.navbar-dropdown(data-style="width: 18rem;")
          a.navbar-item(href="/2017/10/09/roses-are-red-links-are-blue/")
            .navbar-content
              p
                small.has-text-link 09 Oct 2017
              p Roses are red – Links are blue
          a.navbar-item(href="/2017/08/03/list-of-tags/")
            .navbar-content
              p
                small.has-text-link 03 Aug 2017
              p New feature: list of tags
          a.navbar-item(href="/2017/08/01/bulma-bootstrap-comparison/")
            .navbar-content
              p
                small.has-text-link 01 Aug 2017
              p Bulma / Bootstrap comparison
          a.navbar-item(href="https://bulma.io/blog/")
            | More posts
          hr.navbar-divider
          .navbar-item
            .navbar-content
              .level.is-mobile
                .level-left
                  .level-item
                    strong Stay up to date!
                .level-right
                  .level-item
                    a.button.bd-is-rss.is-small(href="https://bulma.io/atom.xml")
                      span.icon.is-small
                        i.fa.fa-rss
                      span Subscribe
      .navbar-item.has-dropdown.is-hoverable
        .navbar-link
          | More
        #moreDropdown.navbar-dropdown
          a.navbar-item(href="https://bulma.io/bulma-start/")
            p
              strong Bulma start
              br
              small A tiny npm package to get started
          hr.navbar-divider
          a.navbar-item(href="https://bulma.io/made-with-bulma/")
            p
              strong Made with Bulma
              br
              small The official community badge
          hr.navbar-divider
          a.navbar-item(href="https://bulma.io/extensions/")
            p
              strong Extensions
              br
              small Side projects to enhance Bulma
      a.navbar-item(href="https://bulma.io/expo/")
        span.bd-emoji ⭐️
        |         Expo
      a.navbar-item(href="https://bulma.io/love/")
        span.bd-emoji ❤️
        |         Love
    .navbar-end
      a.navbar-item.is-hidden-desktop-only(href="https://github.com/jgthms/bulma" target="_blank")
        span.icon(style="color: #333;")
          i.fa.fa-lg.fa-github
      a.navbar-item.is-hidden-desktop-only(href="https://twitter.com/jgthms" target="_blank")
        span.icon(style="color: #55acee;")
          i.fa.fa-lg.fa-twitter
      .navbar-item
        .field.is-grouped
          p.control
            a.bd-tw-button.button(data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms")
              span.icon
                i.fa.fa-twitter
              span
                | Tweet
          p.control
            a.button.is-primary(href="https://github.com/jgthms/bulma/releases/download/0.6.0/bulma-0.6.0.zip")
              span.icon
                i.fa.fa-download
              span Download
</template>
