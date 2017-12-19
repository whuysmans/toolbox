<template>
  <div class="tags">
    <nuxt-link class="kern-thema tag is-light is-medium" to="/" @click.native="handleClick">
      {{ fiche.Kernthemas.display }}
    </nuxt-link>
    <nuxt-link v-for="cat in fiche.Subcategorie" to="/" :key="cat._id" class="tag is-light is-medium" @click.native="handleClick">
      {{ cat.display }}
    </nuxt-link>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['fiche'],
  methods: {
    ...mapActions([
      'setActiveFilter'
    ]),
    handleClick (event) {
      let text = event.target.outerText
      this.setActiveFilter(text)
    }
  }
}
</script>
