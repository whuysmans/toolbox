<template>
  <div class="tags">
    <nuxt-link class="kern-thema button" to="/">
      {{ fiche.Kernthemas.display }}
    </nuxt-link>
    <nuxt-link v-for="cat in fiche.Subcategorie" to="/" :key="cat._id" class="button">
      {{ cat.display }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['fiche']
}
</script>
