<template>
  <aside class="menu">
    <p class="menu-label"></p>
    <ul class="menu-list side-nav">
      <li v-if="fiche.Beschrijving"><nuxt-link to="#beschrijving">BESCHRIJVING</nuxt-link></li>
      <li v-if="fiche.Werking"><nuxt-link to="#werking">WERKING</nuxt-link></li>
      <li v-if="fiche.Tips"><nuxt-link to="#tips">TIPS</nuxt-link></li>
      <li v-if="fiche.Voorbeelden"><nuxt-link to="#voorbeelden">VOORBEELDEN</nuxt-link></li>
      <li v-if="fiche.Reflectie"><nuxt-link to="#reflectie">REFLECTIE</nuxt-link></li>
    </ul>
  </aside>
</template>
<script>
  export default {
    props: ['fiche']
  }
</script>