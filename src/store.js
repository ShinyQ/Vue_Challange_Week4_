/* eslint-disable space-before-function-paren */
/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const moduleHome = {
  namespaced: true,
  state: {
    data: {
      films: [],
      loading: true,
      errored: false
    }
  },
  mutations: {
    setMovie(state, payload) {
      // console.log(payload)
      state.data.films = payload
    }
  },
  actions: {
    getFilms({ commit }) {
      axios.get('https://api.themoviedb.org/3/list/1?api_key=56598d890c1a31aeed1fc0a5daddec30')
        .then((response) => {
          // console.log(response.data.items)
          commit('setMovie', response.data.items)
        }).catch(error => {
          if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error'
          } else {
            this.errorStatus = error.response.data.message
          }
        })
    }
  }
}

const moduleDetail = {
  namespaced: true,
  state: {
    data: {
      films: []
    }
  },
  mutations: {
    setMovie(state, payload) {
      state.data.films = payload
    }
  },
  actions: {
    getFilms({ commit }, id) {
      axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=56598d890c1a31aeed1fc0a5daddec30&language=en')
        .then((response) => {
          commit('setMovie', response.data)
        })
    }
  }
}

const moduleLogin = {
  namespaced: true,
  state: {
    data: {
      user: [],
      error: '',
      success: ''
    }
  },
  mutations: {
    setUser(state, payload) {
      state.data.user = payload
    },
    setError(state, payload) {
      state.data.error = payload
    },
    setSuccess(state, payload) {
      state.data.success = payload
    }
  },
  actions: {
    doLogin({ commit }, payload) {
      if (payload.email === '' || payload.password === '') {
        commit('setError', 'Username Atau Password Harus Diisi')
      } else {
        axios.post('http://localhost:8000/api/login', {
          email: payload.email,
          password: payload.password
        }).then(function (response) {
          commit('setError', '')
          commit('setSuccess', 'Login Sukses !')
          commit('setUser', response.data)
          const dataUser = JSON.stringify(response.data)
          localStorage.setItem('dataUser', dataUser)
          this.$router.push('/')
        }).catch(function (error) {
          console.log(error)
          if (error.response.status === 422) {
            commit('setError', 'Username Atau Password Salah')
          }
        })
      }
    }
  }
}

export default new Vuex.Store({
  modules: {
    home: moduleHome,
    detail: moduleDetail,
    login: moduleLogin
  }
})
