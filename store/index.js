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
      apiUrl: 'http://localhost/cockpit2',
      apiToken: '0b99c8afb03b2feb071b6bfe47d5cf',
      assetsPath: '~/assets/'
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
      }
    },

    actions: {
      async nuxtServerInit ({state, commit}) {
        let results = await Promise.all([
          axios.get('http://localhost/cockpit2/api/collections/get/Infofiche?token=0b99c8afb03b2feb071b6bfe47d5cf'),
          axios.get('http://localhost/cockpit2/api/collections/get/Kernthemas?token=0b99c8afb03b2feb071b6bfe47d5cf'),
          axios.get('http://localhost/cockpit2/api/collections/get/HomeInfo?token=0b99c8afb03b2feb071b6bfe47d5cf')
        ])
        commit('LOAD_INFO_FICHES', results[0].data.entries)
        commit('LOAD_KERN_THEMAS', results[1].data.entries)
        commit('LOAD_HOME_INFO', results[2].data.entries)
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
      getAPIUrl (state) {
        return state.apiUrl
      },
      getAssetsPath (state) {
        return state.assetsPath
      },
      getInfoFiche (state) {
        return (name) => {
          return state.infofiches.filter((fiche) => {
            return fiche.Titel.toLowerCase() === name
          })
        }
      }
    }
  })
}

export default createStore
