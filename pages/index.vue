<template>
  <div>
    <section class="hero is-primary">
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
    <section class="hero">
      <div class="hero-body">
        <div class="container content">
          <div v-html="homeInfo.Beschrijving"></div>
          <br>
          <toolbox-filter :themas="themas" :fiches="fiches"></toolbox-filter>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Filter from '../components/Filter'
export default {
  components: {
    'toolbox-filter': Filter
  },
  data () {
    return {
    }
  },
  asyncData ({store, params}) {
    return {
      themas: store.getters.getKernThemas,
      homeInfo: store.getters.getHomeInfo[0],
      fiches: store.getters.getInfoFiches,
      activeFilter: store.getters.getActiveFilter
    }
  }
}
</script>

<style>

.links {
  padding-top: 15px;
}
</style>
