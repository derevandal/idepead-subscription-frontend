import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    domain: {
      base: 'https://euquero.idepead.com.br',
      params: '/'
    },
    seo: {
      title: 'Eu quero!',
      description: 'Ingresse agora mesmo em um dos cursos oferecidos pelo IDEPead.',
      image: '/assets/images/unifran_og.jpg'
    }
  },
  getters: {

    getSeoDomain: (state) => (state.domain.base + state.domain.params),
    getSeoTitle: (state) => state.seo.title,
    getSeoDescription: (state) => state.seo.description,
    getSeoImage: (state) => state.seo.image

  },
  mutations: {
    SET_SEO_DOMAIN (state, params) {
      state.domain.params = params
    },
    SET_SEO_TITLE (state, title) {
      state.seo.title = title
    },
    SET_SEO_DESCRIPTION (state, description) {
      state.seo.description = description
    },
    SET_SEO_IMAGE (state, url) {
      state.seo.description = url
    }
  },
  actions: {
    SET_SEO_DOMAIN ({ commit }, domain) {
      commit('SET_DOMAIN', domain)
    },
    SET_SEO_TITLE ({ commit }, title) {
      commit('SET_TITLE', title)
    },
    SET_SEO_DESCRIPTION ({ commit }, description) {
      commit('SET_SEO_DESCRIPTION', description)
    },
    SET_SEO_IMAGE ({ commit }, url) {
      commit('SET_SEO_IMAGE', url)
    }
  }
})

export default store
