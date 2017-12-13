<template>
  <a class="button--grey" @click="handleClick">
    <h2 class="subtitle">{{ titel }}</h2>
    <img :src="icoon | fixPath" width="50px" height="50px"/>
    <div class="element-body" v-if="isExpanded">
      <div v-html="info"></div>
      <sub-cat v-for="subcat in subcats" :subcategorie="subcat" :key="subcat._id"></sub-cat>
    </div>
  </a>
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
        icoon: this.thema.Icoon.path,
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
      }
    }
  }
</script>