<template>
  <section class="container">
    <div>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <h1 class="title">{{ homeInfo.Titel }}</h1>
      <div v-html="homeInfo.Beschrijving"></div>
      <div class="links">
        <kern-thema v-for="thema in themas" :thema="thema" :key="thema._modified"></kern-thema>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
import Kernthema from '../components/Kernthema'
export default {
  components: {
    'kern-thema': Kernthema
  },
  asyncData ({store, params}) {
    return {
      fiches: store.getters.getInfoFiches,
      themas: store.getters.getKernThemas,
      homeInfo: store.getters.getHomeInfo ? store.getters.getHomeInfo[0] : { Beschrijving: '', Titel: '' },
      assetsPath: store.getters.getAssetsPath
    }
  },
  filters: {
    fixPath (str) {
      const pattern = /([^/]+\.(bmp|jpg|svg))$/
      return str.match(pattern)[1]
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
