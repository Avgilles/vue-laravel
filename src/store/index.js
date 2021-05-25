import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        movies: [],
        loading: false,
    },
    mutations: {
        DELETE_MOVIES(state, index) {
            state.movies.splice(index, 1)
        },
        SET_MOVIES: (state, movies) => {
            state.movies = movies;
        },
        SET_LOADING: (state, bool) => {
            state.loading = bool;
        }
    },
    getters: {
        GET_MOVIES: state => {
            return state.movies;
        },
        GET_MOVIE: state => (id) =>{
            return state.movies.find(movie => movie.id === id);
        }
    },
    actions: {
        GET_MOVIES: (context) => {
            context.commit('SET_LOADING', true)
            fetch("https://ghibliapi.herokuapp.com/films").then(response => {
                return response.json().then(json => {
                    context.commit('SET_MOVIES', json);
                    context.commit('SET_LOADING', false);
                })
            })
        }
    },
    modules: {}
})
