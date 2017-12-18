<template>
  <div>
    <nuxt-link v-if="isNotFirst" :to="prev" class="left">
      back
    </nuxt-link>
    <nuxt-link v-if="isNotLast" :to="next" class="right">
      next
    </nuxt-link>
  </div>
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
      return this.isNotLast ? this.$store.getters.getSlugByNumber(this.nr + 1) : 0
    },
    prev () {
      return this.isNotFirst ? this.$store.getters.getSlugByNumber(this.nr - 1) : this.$store.getters.getNumberOfFiches - 1
    }
  }
}
</script>