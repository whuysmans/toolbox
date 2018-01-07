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
      activeFilter: '',
      activeNav: '',
      classSlug: {},
      activeState: '',
      token: '',
      isAuthenticated: false
    },

    mutations: {
      LOAD_INFO_FICHES (state, fiches) {
        fiches.map((fiche) => {
          state.infofiches.push(fiche)
        })
      },
      LOAD_KERN_THEMAS (state, themas) {
        if (!Array.prototype.find) {
          Object.defineProperty(Array.prototype, 'find', {
            value: function(predicate) {
              if (this == null) {
                throw new TypeError('"this" is null or not defined');
              }
              var o = Object(this);
              var len = o.length >>> 0;
              if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
              }
              var thisArg = arguments[1];
              var k = 0;
              while (k < len) {
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                  return kValue;
                }
                k++;
              }
              return undefined;
            }
          });
        }
        // dirty hack to load them in the right order
        state.kernthemas.push(themas.find((thema) => {
          return thema._id === 4
        }))
        state.kernthemas.push(themas.find((thema) => {
          return thema._id === 2
        }))
        state.kernthemas.push(themas.find((thema) => {
          return thema._id === 3
        }))
        themas.map((thema) => {
          state.classSlug[thema.Titel] = thema.Slug
        })
      },
      LOAD_HOME_INFO (state, info) {
        state.homeInfo = info
      },
      SET_ACTIVE_FILTER (state, filter) {
        state.activeFilter = filter
      },
      SET_ACTIVE_NAV (state, nav) {
        state.activeNav = nav
      },
      SET_ACTIVE_STATE (state, active) {
        state.activeState = active
      },
      SET_AUTHENTICATED_STATE (state, auth) {
        state.isAuthenticated = auth
      },
      SET_TOKEN (state, token) {
        state.token = token
      }
    },

    actions: {
      async nuxtServerInit ({commit}, state) {
        let results = await Promise.all([
          axios.get('https://cipt.be/toolbox/wp-json/toolbox/v1/infofiches'),
          axios.get('https://cipt.be/toolbox/wp-json/toolbox/v1/kernthemas'),
          axios.get('https://cipt.be/toolbox/wp-json/toolbox/v1/homeinfo')
        ])
        commit('LOAD_INFO_FICHES', results[0].data.entries)
        commit('LOAD_KERN_THEMAS', results[1].data.entries)
        commit('LOAD_HOME_INFO', results[2].data.entries)
      },
      setActiveFilter ({commit}, filter) {
        commit('SET_ACTIVE_FILTER', filter)
      },
      setActiveNav ({commit}, nav) {
        commit('SET_ACTIVE_NAV', nav)
      },
      setActiveState ({commit}, active) {
        commit('SET_ACTIVE_STATE', active)
      },
      setAuthenticatedState ({commit}, auth) {
        commit('SET_AUTHENTICATED_STATE', auth)
      },
      setToken ({commit}, token) {
        commit('SET_TOKEN', token)
      }
    },

    getters: {
      isAuthenticated (state) {
        return state.isAuthenticated
      },
      getInfoFiches (state) {
        return state.infofiches
      },
      getClassSlug (state) {
        return (title) => {
          return state.classSlug[title]
        }
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
            return fiche.Slug.toLowerCase() === name
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
      getActiveNav (state) {
        return state.activeNav
      },
      filterFiche (state) {
        return (name) => {
          return state.infofiches.filter((fiche) => {
            return fiche.Subcategorie.find((subcat) => {
              return subcat.display === name
            })
          })
        }
      },
      getActiveState (state) {
        return state.activeState
      }
    }
  })
}

export default createStore
