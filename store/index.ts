import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  indexReady: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  indexReady: state => state.indexReady
}

export const mutations: MutationTree<RootState> = {
  CHANGE_INDEX_READY: (state) => {
    state.indexReady = true
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async changeIndexReady ({commit}) {
    commit('CHANGE_INDEX_READY')
  }
}

// nella vista: import { getters } from '~/store'
// per chiamare getters: this.$store.getters['lorem'] as ReturnType<typeof getters.lorem>
// per chiamare actions: this.$store.dispatch('changeLorem', param)