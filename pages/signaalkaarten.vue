<template>
  <section class="container content">
    <div class="main">
      <page-header :fiche="fiche" :color="backgroundColor"></page-header>
      <tags :fiche="fiche"></tags>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child">
            <h3 class="subtitle"><i class="fa" :class="[fiche.BeschrijvingIcoon, textColor]"></i> Beschrijving</h3>
            <div v-html="fiche.Beschrijving"></div>
          </article>
          <article class="tile is-child">
            <h3 class="subtitle"><i class="fa" :class="[fiche.WerkingIcoon, textColor]"></i> Werking</h3>
            <div v-html="fiche.Werking"></div>
          </article>
        </div>
        <div class="tile is-parent is-vertical">
          <article class="tile is-child">
            <h3 class="subtitle"><i class="fa" :class="[fiche.TipsIcoon, textColor]"></i> Tips</h3>
            <div v-html="fiche.Tips"></div>
          </article>
          <article class="tile is-child">
            <h3 class="subtitle"><i class="fa" :class="[fiche.VoorbeeldenIcoon, textColor]"></i> Voorbeelden</h3>
            <div v-html="fiche.Voorbeelden"></div>
          </article>
          <article v-if="fiche.Reflectie"class="tile is-child">
            <h3 class="subtitle"><i class="fa" :class="[fiche.ReflectieIcoon, textColor]"></i> Reflectie</h3>
            <div>
              Op welke momenten verduidelijk je de doelen al? Om je hiervan bewust te worden, kan je deze <a @click="toggleModal">oefening reflectieopdracht doelen</a> maken.
            </div>
          </article>
        </div>
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
import Modal from '../components/Modal'
export default {
  components: {
    'pagination': Pagination,
    'tags': Tags,
    'page-header': PageHeader,
    'modal': Modal
  },
  asyncData ({store, params}) {
    return {
      title: 'Signaalkaarten',
      fiche: store.getters.getInfoFiche('signaalkaarten')[0]
    }
  },
  filters: {
    fixPath (str) {
      const pattern = /([^/]+\.(bmp|jpg|svg))$/
      return str.match(pattern)[1]
    }
  },
  methods: {
    toggleModal () {
      this.activeState === '' ? this.activeState = 'is-active' : this.activeState = ''
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