<template>
  <section class="section">
    <div class="container content">
      <div>
        <h1 class="title">{{ homeInfo.Titel }}</h1>
        <div v-html="homeInfo.Beschrijving"></div>
      </div>
      <div>
        <toolbox-filter :themas="themas" :fiches="fiches"></toolbox-filter>
      </div>
    </div>
  </section>
</template>

<script>
import Filter from '../components/Filter'
export default {
  components: {
    'toolbox-filter': Filter
  },
  asyncData ({store, params}) {
    return {
      themas: store.getters.getKernThemas,
      homeInfo: store.getters.getHomeInfo[0],
      fiches: store.getters.getInfoFiches
    }
  }
}
</script>

<style>

.links {
  padding-top: 15px;
}
</style>
