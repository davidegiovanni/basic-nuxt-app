import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  lorem: 'ipsum'
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  lorem: state => state.lorem
}

export const mutation: MutationTree<RootState> = {
  CHANGE_LOREM: (state, newLorem: string) => {
    state.lorem = newLorem
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async changeLorem ({commit}, lorem: string) {
    commit('CHANGE_LOREM', lorem)
  }
}

// nella vista: import { getters } from '~/store'
// per chiamare getters: this.$store.getters['lorem'] as returnType<typeof getters.lorem>
// per chiamare actions: this.$store.dispatch['changeLorem', param]