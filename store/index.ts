import { GetterTree, ActionTree, MutationTree } from 'vuex'
import axios from 'axios'
import { safeAxiosGet } from '~/utils/safe-post'

export const state = () => ({
  indexReady: false,
  indexPage: {} as any,
  website: {} as any,
  webErr: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  indexReady: state => state.indexReady,
  indexPage: state => state.indexPage,
  website: state => state.website,
  webErr: state => state.webErr
}

export const mutations: MutationTree<RootState> = {
  CHANGE_INDEX_READY: (state) => {
    state.indexReady = true
  },
  CHANGE_INDEX_PAGE: (state, newIndexPage: any) => {
    state.indexPage = newIndexPage
  },
  CHANGE_WEBSITE: (state, newWebsite: any) => {
    state.website = newWebsite
  },
  CHANGE_WEB_ERR: (state) => {
    state.webErr = true
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async changeIndexReady ({commit}) {
    commit('CHANGE_INDEX_READY')
  },
  async nuxtServerInit({ commit }) {
    const [websiteResponse, websiteErr] = await safeAxiosGet<any>(this.$axios, 'https://revas-os-web-cdn-dot-revas-os-prod.ey.r.appspot.com/websites/v0/websites/davidegiovanni.com/?public_key=01exy3y9j9pdvyzhchkpj9vc5w&language_code=it-IT')
    if (websiteErr !== null) {
      commit('CHANGE_WEB_ERR')
      return
    }
    commit('CHANGE_WEBSITE', websiteResponse.website)
    const [indexPageItResponse, indexPageItErr] = await safeAxiosGet<any>(this.$axios, 'https://revas-os-web-cdn-dot-revas-os-prod.ey.r.appspot.com/websites/v0/websites/davidegiovanni.com/pages/index/?public_key=01exy3y9j9pdvyzhchkpj9vc5w&language_code=it-IT')
    if (indexPageItErr !== null) {
      commit('CHANGE_WEB_ERR')
      return
    }
    commit('CHANGE_INDEX_PAGE', indexPageItResponse.page)
  }
}

// nella vista: import { getters } from '~/store'
// per chiamare getters: this.$store.getters['lorem'] as ReturnType<typeof getters.lorem>
// per chiamare actions: this.$store.dispatch('changeLorem', param)