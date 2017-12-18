<template>
  <section class="section">
    <div class="container content">
      <div>
        <h1 class="title">{{ homeInfo.Titel }}</h1>
        <div v-html="homeInfo.Beschrijving"></div>
      </div>
      <div>
        <toolbox-filter :themas="themas" :fiches="fiches" :currentFilter="currentFilter"></toolbox-filter>
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
  data () {
    return {
      currentFilter: ''
    }
  },
  asyncData ({store, params}) {
    return {
      themas: store.getters.getKernThemas,
      homeInfo: store.getters.getHomeInfo[0],
      fiches: store.getters.getInfoFiches,
      activeFilter: store.getters.getActiveFilter
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      if (vm.activeFilter && vm.activeFilter !== '') {
        vm.currentFilter = vm.activeFilter
      }
    })
  }
}
</script>

<style>

.links {
  padding-top: 15px;
}
</style>
