<template>
  <div class="content filter">
    <div class="">
      <h3 class="title">Filter op de fiches</h3>
    </div>
    <div class="content tile is-ancestor">
      <div class="tile is-7 is-vertical is-parent">
        <div class="box tile is-child home-tile">
          <article v-for="thema in themas" key="thema._id" class="media" @click.prevent="handleKernthemaClick">
            <figure class="media-left">
              <span class="icon">
                <i class="fa fa-2x" :class="thema.Icoon"></i>
              </span>
            </figure>
            <div class="media-content">
              <p>
                <h2 class="subtitle">{{ thema.Titel }}</h2>
                <div v-html="thema.Info"></div>
                <div>
                  <a v-for="subcat in thema.Subcat" key="subcat._id" class="tag is-white is-medium" href="" @click.prevent.stop="handleSubcatClick">
                    {{ subcat.display }}
                  </a>
                </div>
              </p>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box home-tile">
          <nuxt-link v-for="fiche in filteredFiches" :to="fiche.Slug" class="tag is-white is-medium">{{ fiche.Titel }}</nuxt-link>
        </article>
      </div> 
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['themas', 'fiches'],
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
      'getActiveFilter'
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
    }
  }
}
</script>
<style scoped>


</style>