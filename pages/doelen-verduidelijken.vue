<template>
  <section class="container">
    <div class="main">
      <h2 class="subtitle">
      {{ fiche.Titel }}
      </h2>
      <div class="beschrijving">
        <h3>Beschrijving</h3>
        <div v-html="fiche.Beschrijving"></div>
        <img width="50px" height="50px" :src="fiche.BeschrijvingIcoon.path | fixPath" />
      </div>
       <div class="werking">
        <h3>Werking</h3>
        <div v-html="fiche.Werking"></div>
        <img width="50px" height="50px" :src="fiche.WerkingIcoon.path | fixPath" />
      </div>
       <div class="tips">
        <h3>Tips</h3>
        <div v-html="fiche.Tips"></div>
        <img width="50px" height="50px" :src="fiche.TipsIcoon.path | fixPath" />
      </div>
       <div class="voorbeelden">
        <h3>Voorbeelden</h3>
        <div v-html="fiche.Voorbeelden"></div>
        <img width="50px" height="50px" :src="fiche.VoorbeeldenIcoon.path | fixPath" />
      </div>
    </div>
    <div class="tags">
      <div class="kern-thema">
        <a href="">{{ fiche.Kernthemas.display }}</a>
      </div>
      <div class="sub-cat">
        <a v-for="cat in fiche.Subcategorie" href="" :key="cat._id">{{ cat.display }}</a>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    asyncData ({store, params}) {
      return {
        title: 'doelen verduidelijken',
        fiche: store.getters.getInfoFiche('doelen verduidelijken')[0]
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