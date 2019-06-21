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
      films: []
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

export default new Vuex.Store({
  modules: {
    home: moduleHome,
    detail: moduleDetail
  }
})
