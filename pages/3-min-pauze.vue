<template>
  <section class="container content">
    <div class="main">
      <page-header :fiche="fiche" :color="backgroundColor"></page-header>
      <tags :fiche="fiche"></tags>
      <div class="beschrijving box box-shadow box-padding">
        <article class="media">
          <div class="media-left">
            <span class="icon">
              <i class="fa fa-3x" :class="[fiche.BeschrijvingIcoon, textColor]"></i>
            </span>
          </div>
          <div class="media-content">
            <p>
              <h3 class="subtitle">Beschrijving</h3>
              <div v-html="fiche.Beschrijving"></div>
            </p>
          </div>
        </article>
      </div>
      <div class="werking box box-shadow box-padding">
        <article class="media">
          <div class="media-left">
            <span class="icon">
              <i class="fa fa-3x" :class="[fiche.WerkingIcoon, textColor]"></i>
            </span>
          </div>
          <div class="media-content">
            <p>
              <h3 class="subtitle">Werking</h3>
              <div v-html="fiche.Werking"></div>
            </p>
          </div>
        </article>
      </div>
      <div class="tips box box-shadow box-padding">
        <article class="media">
          <div class="media-left">
            <span class="icon">
              <i class="fa fa-3x" :class="[fiche.TipsIcoon, textColor]"></i>
            </span>
          </div>
          <div class="media-content">
            <p>
              <h3 class="subtitle">Tips</h3>
              <div v-html="fiche.Tips"></div>
            </p>
          </div>
        </article>
      </div>
      <div class="voorbeelden box box-shadow box-padding">
        <article class="media">
          <div class="media-left">
            <span class="icon">
              <i class="fa fa-3x" :class="[fiche.VoorbeeldenIcoon, textColor]"></i>
            </span>
          </div>
          <div class="media-content">
            <p>
              <h3 class="subtitle">Voorbeelden</h3>
              <div v-html="fiche.Voorbeelden"></div>
            </p>
          </div>
        </article>
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
      title: '3 minuten pauze',
      fiche: store.getters.getInfoFiche('3-min-pauze')[0]
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