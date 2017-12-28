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
            <div v-html="fiche.Voorlbeelden"></div>
          </article>
        </div>
      </div>
    </div>
    <pagination :slug="fiche.Slug"></pagination>
  </section>
</template>
<script>
import Pagination from '../components/Pagination'
import Tags from '../components/Tags'
import PageHeader from '../components/PageHeader'
export default {
  components: {
    'pagination': Pagination,
    'tags': Tags,
    'page-header': PageHeader
  },
  asyncData ({store, params}) {
    return {
      title: 'SOS-hoek',
      fiche: store.getters.getInfoFiche('sos-hoek')[0]
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