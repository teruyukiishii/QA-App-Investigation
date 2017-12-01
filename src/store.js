export default {
  strict: true,
  state: {
    login: false
  },
  mutations: {
    set(state, login) {
      state.login = login
    }
  }
}
