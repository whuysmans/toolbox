<template>
  <div class="beschrijving box box-shadow box-padding" @click="handleClick">
    <article class="media">
      <div class="media-left">
        <span class="icon">
          <i class="fa fa-3x" :class="icoon"></i>
        </span>
      </div>
      <div class="media-content">
        <p>
          <h2 class="subtitle">{{ titel }}</h2>
          <div v-html="info"></div>
          <div v-if="isExpanded">
            <sub-cat v-for="(subcat, index) in subcats" 
            :subcategorie="subcat" 
            :key="subcat._id"
            :class="index %2 === 0 ? 'is-dark' : 'is-light'"
            ></sub-cat>
          </div>
        </p>
      </div>
    </article>
  </div>
</template>
<script>
  import Subcategorie from './Subcategorie'
  export default {
    components: {
      'sub-cat': Subcategorie
    },
    props: ['thema'],
    data () {
      return {
        titel: this.thema.Titel,
        icoon: this.thema.Icoon,
        info: this.thema.Info,
        subcats: this.thema.Subcat,
        expanded: false
      }
    },
    filters: {
      fixPath (str) {
        const pattern = /([^/]+\.(bmp|jpg|svg))$/
        return str.match(pattern)[1]
      }
    },
    computed: {
      isExpanded () {
        return this.expanded
      }
    },
    methods: {
      handleClick () {
        this.expanded = !this.expanded
      },
      btnColor () {

      }
    }
  }
</script>