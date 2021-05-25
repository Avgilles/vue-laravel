import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
      DELETE_MOVIES(state, index){
        state.movies.splice(index, 1)
      },
      SET_MOVIES: (state, movies) =>{
        state.movies = movies;
      }
  },
  getters:{
    GET_MOVIES: state =>  {
      return state.movies;
    }
  },
  actions: {
    GET_MOVIES: (context) =>{
      fetch("https://ghibliapi.herokuapp.com/films").then(response => {
        return response.json().then(json => {
          context.commit('SET_MOVIES', json);
        })
      })
    }
  },
  modules: {
  }
})
