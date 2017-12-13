<template>
  <div class="button-green" href="">
    {{ titel }}
  </div>
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