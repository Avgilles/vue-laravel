import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles : [
      {
        name: "Mon article 1",
        description: "item 1",
        slug : "mon-article-1",
        published: true
      },
      {
        name: "Mon article 2",
        description: "item 2",
        slug : "mon-article-2",
        published: true
      },
      {
        name: "Mon article 3",
        description: "item 3",
        slug : "mon-article-3",
        published: true
      },
      {
        name: "Mon article 4",
        description: "item 4",
        slug : "mon-article-4",
        published: true
      }, {
        name: "Mon article 5",
        description: "item 5",
        slug : "mon-article-5",
        published: true
      }, {
        name: "Mon article 6",
        description: "item 6",
        slug : "mon-article-6",
        published: true
      }, {
        name: "Mon article 7",
        description: "item 7",
        slug : "mon-article-7",
        published: true
      }, {
        name: "Mon article 8",
        description: "item 8",
        slug : "mon-article-8",
        published: true
      },
    ],
    movies: []
  },
  mutations: {
      DELETE_ARTICLES(state, index){
        state.articles.splice(index, 1)
      },
      SET_MOVIES: (state, movies) =>{
        state.movies = movies;
      }
  },
  getters:{
    GET_PUBLISHED_ARTICLES: state =>  {
      return state.articles.filter(article => article.published);
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
