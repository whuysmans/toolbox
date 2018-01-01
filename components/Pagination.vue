<template>
  <nav class="pagination" role="navigation" aria-label="navigation">
    <nuxt-link :to="prev" class="pagination-previous" :disabled="!isNotFirst">
      vorige fiche
    </nuxt-link>
    <nuxt-link :to="next" class="pagination-next" :disabled="!isNotLast">
      volgende
    </nuxt-link>
  </nav>
</template>
<script>
export default {
  props: ['slug'],
  data () {
    return {
      nextPage: null,
      prevPage: null
    }
  },
  computed: {
    isNotFirst () {
      return this.nr > 0
    },
    isNotLast () {
      return this.nr < this.$store.getters.getNumberOfFiches - 1
    },
    nr () {
      return this.$store.getters.getInfoFicheIndex(this.slug)
    },
    next () {
      return this.isNotLast ? this.$store.getters.getSlugByNumber(this.nr + 1) : ''
    },
    prev () {
      return this.isNotFirst ? this.$store.getters.getSlugByNumber(this.nr - 1) : ''
    }
  }
}
</script>