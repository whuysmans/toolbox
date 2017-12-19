import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      infofiches: [],
      kernthemas: [],
      homeInfo: null,
      activeFilter: ''
    },

    mutations: {
      LOAD_INFO_FICHES (state, fiches) {
        fiches.map((fiche) => {
          state.infofiches.push(fiche)
        })
      },
      LOAD_KERN_THEMAS (state, themas) {
        themas.map((thema) => state.kernthemas.push(thema))
        // console.log(state)
      },
      LOAD_HOME_INFO (state, info) {
        state.homeInfo = info
      },
      SET_ACTIVE_FILTER (state, filter) {
        state.activeFilter = filter
      }
    },

    actions: {
      async nuxtServerInit ({commit}) {
        let results = await Promise.all([
          axios.get('https://cockpit.prutstuin.be/api/collections/get/infofiche?token='),
          axios.get('https://cockpit.prutstuin.be/api/collections/get/kernthemas?token='),
          axios.get('https://cockpit.prutstuin.be/api/collections/get/homeinfo?token=')
        ])
        commit('LOAD_INFO_FICHES', results[0].data.entries)
        commit('LOAD_KERN_THEMAS', results[1].data.entries)
        commit('LOAD_HOME_INFO', results[2].data.entries)
      },
      setActiveFilter ({commit}, filter) {
        commit('SET_ACTIVE_FILTER', filter)
      }
    },

    getters: {
      getInfoFiches (state) {
        return state.infofiches
      },
      getKernThemas (state) {
        return state.kernthemas
      },
      getHomeInfo (state) {
        return state.homeInfo
      },
      getInfoFiche (state) {
        return (name) => {
          return state.infofiches.filter((fiche) => {
            return fiche.Titel.toLowerCase() === name
          })
        }
      },
      getInfoFicheIndex (state) {
        return (name) => {
          return state.infofiches.findIndex((fiche) => {
            return fiche.Slug.toLowerCase() === name
          })
        }
      },
      getSlugByNumber (state) {
        return (nr) => {
          return state.infofiches[nr].Slug
        }
      },
      getNumberOfFiches (state) {
        return state.infofiches.length
      },
      getActiveFilter (state) {
        return state.activeFilter
      },
      filterFiche (state) {
        return (name) => {
          return state.infofiches.filter((fiche) => {
            return fiche.Subcategorie.find((subcat) => {
              return subcat.display === name
            })
          })
        }
      }
    }
  })
}

export default createStore
