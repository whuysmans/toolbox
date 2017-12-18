<template>
  <a class="button" href="">
    {{ titel }}
  </a>
</template>
<script>
  export default {
    props: ['subcategorie'],
    data () {
      return {
        titel: this.subcategorie.display
      }
    }
  }
</script>