<template>
  <div class="column">
    <h2 class="subtitle">Filter op de fiches</h2>
    <div class="filter content tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <article v-if="showFilter" class="tile is-child box tags">
          <h5>Fiches:</h5>
          <nuxt-link v-for="(fiche, index) in filteredFiches" 
            :to="fiche.Slug" 
            :key="index"
            :class="backgroundColor(fiche.Kernthemas.display)" 
            class="tag is-medium">{{ fiche.Titel }}
          </nuxt-link>
        </article>
        <article v-for="thema in themas" class="box tile is-child" key="thema._id" @click.prevent="handleKernthemaClick">
          <h3 class=""><i class="fa" :class="[thema.Icoon, 'tekst-' + thema.Slug]"></i> {{ thema.Titel }}</h3>
          <div v-html="thema.Info"></div>
          <div class="tags">
            <a v-for="subcat in thema.Subcat" key="subcat._id" class="tag is-medium" :class="thema.Slug" href="" @click.prevent.stop="handleSubcatClick">
              {{ subcat.display }}
            </a>
          </div>
        </article>
      </div> 
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['themas', 'fiches'],
  filters: {
    'classify': (val) => {
      return val.replace(/\s/ig, '-')
    }
  },
  data () {
    return {
      searchText: '',
      isThemaSearch: false
    }
  },
  methods: {
    ...mapActions([
      'setActiveFilter'
    ]),
    ...mapGetters([
      'getActiveFilter',
      'getClassSlug'
    ]),
    handleSubcatClick (event) {
      let text = event.target.outerText
      this.isThemaSearch = false
      this.setActiveFilter(text)
      this.searchText = text
    },
    handleKernthemaClick (event) {
      let text = event.target.outerText
      this.isThemaSearch = true
      this.setActiveFilter(text)
      this.searchText = text
    }
  },
  computed: {
    filteredFiches () {
      let ficheArray = this.fiches
      if (this.getActiveFilter() !== '') {
        this.searchText = this.getActiveFilter()
      }
      return ficheArray.filter((fiche) => {
        return !this.isThemaSearch ? fiche.Subcategorie.find((cat) => {
          return cat.display === this.searchText
        }) : (fiche.Kernthemas.display === this.searchText)
      })
    },
    showFilter () {
      return this.filteredFiches.length !== 0
    },
    backgroundColor (title) {
      return this.getClassSlug(title)
    }
  }
}
</script>
<style scoped>


</style>