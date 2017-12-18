<template>
  <section class="container content">
    <div class="main">
      <h2 class="title">
      {{ fiche.Titel }}
      </h2>
      <div class="beschrijving box box-shadow box-padding">
        <article class="media">
          <div class="media-left">
            <span class="icon">
              <i class="fa fa-3x" :class="fiche.BeschrijvingIcoon"></i>
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
              <i class="fa fa-3x" :class="fiche.WerkingIcoon"></i>
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
              <i class="fa fa-3x" :class="fiche.TipsIcoon"></i>
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
              <i class="fa fa-3x" :class="fiche.VoorbeeldenIcoon"></i>
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
    <tags :fiche="fiche"></tags>
  </section>
</template>
<script>
import Pagination from '../components/Pagination'
import Tags from '../components/Tags'
export default {
  components: {
    'pagination': Pagination,
    'tags': Tags
  },
  asyncData ({store, params}) {
    return {
      title: 'pre-teaching',
      fiche: store.getters.getInfoFiche('preteaching')[0]
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