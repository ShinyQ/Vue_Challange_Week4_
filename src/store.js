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
  state: {
    data: {
      user: [],
      error: ''
    }
  },
  mutations: {
    setUser(state, payload) {
      state.data.user = payload
    },
    setError(state, payload) {
      state.data.error = payload
    }
  },
  actions: {
    doLogin({ commit }, payload) {
      axios.post('http://10.30.30.155:8000/api/login', {
        email: payload.email,
        password: payload.password
      }).then(function (response) {
        commit('setError', '')
        commit('setUser', response.data)
        const dataUser = JSON.stringify(response.data)
        localStorage.setItem('dataUser', dataUser)
      }).catch(function (error) {
        if (error.response.status === 422) {
          commit('setError', error.response.data.errors)
        }
      })
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
