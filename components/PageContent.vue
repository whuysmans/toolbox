<template>
  <div class="fiche-content">
    <article class="fiche-item beschrijving">
      <h3 class="subtitle"><i class="fa" :class="[fiche.BeschrijvingIcoon, color]"></i> Beschrijving</h3>
      <div v-html="fiche.Beschrijving"></div>
    </article>
    <article class="fiche-item werking">
      <h3 class="subtitle"><i class="fa" :class="[fiche.WerkingIcoon, color]"></i> Werking</h3>
      <div v-html="fiche.Werking"></div>
    </article>
    <article class="fiche-item tips">
      <h3 class="subtitle"><i class="fa" :class="[fiche.TipsIcoon, color]"></i> Tips</h3>
      <div v-html="fiche.Tips"></div>
    </article>
    <article class="fiche-item voorbeelden">
      <h3 class="subtitle"><i class="fa" :class="[fiche.VoorbeeldenIcoon, color]"></i> Voorbeelden</h3>
      <div v-html="fiche.Voorbeelden"></div>
    </article>
    <article v-if="fiche.Reflectie" class="fiche-item reflectie">
      <h3 class="subtitle"><i class="fa" :class="[fiche.ReflectieIcoon, color]"></i> Reflectie</h3>
      <div>
      </div>
    </article>
  </div>
</template>
<script>
  export default {
    props: ['fiche', 'color']
  }
</script>