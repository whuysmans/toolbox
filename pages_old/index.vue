<template>
  <div>
    <div v-if="isAuthenticated" class="home">
      <nav-bar></nav-bar>
      <section class="hero home-hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              {{ homeInfo.Titel }}
            </h1>
            <h2 class="subtitle">
              {{ homeInfo.Subtitle }}
            </h2>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-half home-info">
              <div class="home-info-body" v-html="homeInfo.Beschrijving"></div>
              <article class="message is-link">
                <div class="message-body" v-html="homeInfo.Extra"></div>
              </article>
            </div>
            <toolbox-filter :themas="themas" :fiches="fiches"></toolbox-filter>
          </div>
        </div>
      </section>
    </div>
    <login v-else></login>
  </div>
</template>

<script>
import Filter from '../components/Filter'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
export default {
  components: {
    'toolbox-filter': Filter,
    'nav-bar': Navbar,
    'login': Login
  },
  data () {
    return {
    }
  },
  asyncData ({store, params, route, userAgent}) {
    return {
      themas: store.getters.getKernThemas,
      homeInfo: store.getters.getHomeInfo[0],
      fiches: store.getters.getInfoFiches,
      activeFilter: store.getters.getActiveFilter
    }
  },
  computed: {
    isAuthenticated () {
      if (this.$route.query.token) {
        this.$store.dispatch('setAuthenticatedState', {
          auth: true
        })
        return true
      } else {
        return this.$store.getters.isAuthenticated
      }
    }
  }
}
</script>

<style scoped>

.links {
  padding-top: 15px;
}

</style>
