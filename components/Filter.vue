<template>
  <div class="content columns">
    <div class="column">
      <article v-for="thema in themas" key="thema._id" class="media">
        <div class="media-left">
          <span class="icon">
            <i class="fa fa-3x" :class="thema.Icoon"></i>
          </span>
        </div>
        <div class="media-content">
          <p>
            <h2 class="subtitle">{{ thema.Titel }}</h2>
            <div v-html="thema.Info"></div>
            <div>
              <a v-for="subcat in thema.Subcat" key="subcat._id" class="button" href="" @click.prevent="handleClick">
                {{ subcat.display }}
              </a>
            </div>
          </p>
        </div>
      </article>
    </div>
    <div class="column">
      <article class="">
        <nuxt-link v-for="fiche in filteredFiches" :to="fiche.Slug" class="button">{{ fiche.Titel }}</nuxt-link>
      </article>
    </div> 
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['themas', 'fiches'],
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions([
      'setActiveFilter'
    ]),
    handleClick (event) {
      console.log(event.target.outerText)
      this.setActiveFilter(event.target.outerText)
      this.search = event.target.outerText
    }
  },
  computed: {
    filteredFiches () {
      let ficheArray = this.fiches
      return ficheArray.filter((fiche) => {
        return fiche.Subcategorie.find((cat) => {
          return cat.display === this.search
        })
      })
    }
  }
}
</script>