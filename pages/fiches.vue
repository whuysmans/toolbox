<template>
  <div>
    <tb-filter></tb-filter>
    <fiche v-if="isActive" :fiche="currentFiche"></fiche>
  </div>
</template>
<script>
import Filter from '../components/Filter'
import Fiche from '../components/Fiche'
export default {
  components: {
    'tb-filter': Filter,
    'fiche': Fiche
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.activeFilter !== ''
    },
    activeFilter () {
      return this.$store.getters.getActiveFilter
    },
    currentFiche () {
      return this.$store.getters.filterFiche(this.activeFilter)
    }
  }
}
</script>