<template>
  <section class="container content">
    <div class="main">
      <page-header :fiche="fiche" :color="backgroundColor"></page-header>
      <tags :fiche="fiche"></tags>
      <div class="section">
        <aside-menu class="sticky-menu"></aside-menu>
        <page-content :fiche="fiche" :color="textColor"></page-content>
      </div>
    </div>
    <modal v-if="fiche.Toelichting" :fiche="fiche"></modal>
    <pagination :slug="fiche.Slug"></pagination>
  </section>
</template>
<script>
import Pagination from '../components/Pagination'
import Tags from '../components/Tags'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import Modal from '../components/Modal'
import Aside from '../components/Aside'
export default {
  components: {
    'pagination': Pagination,
    'tags': Tags,
    'page-header': PageHeader,
    'page-content': PageContent,
    'modal': Modal,
    'aside-menu': Aside
  },
  data () {
    return {
      activeState: ''
    }
  },
  asyncData ({store, params}) {
    return {
      title: 'doelen verduidelijken',
      fiche: store.getters.getInfoFiche('doelen-verduidelijken')[0]
    }
  },
  filters: {
    fixPath (str) {
      const pattern = /([^/]+\.(bmp|jpg|svg))$/
      return str.match(pattern)[1]
    }
  },
  computed: {
    backgroundColor () {
      return this.$store.getters.getClassSlug(this.fiche.Kernthemas.display)
    },
    textColor () {
      return 'tekst-' + this.$store.getters.getClassSlug(this.fiche.Kernthemas.display)
    }
  }
}
</script>