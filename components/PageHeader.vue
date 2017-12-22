<template>
  <section class="hero" :class="this.color">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ fiche.Titel }}
        </h1>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: ['fiche', 'color']
  }
</script>
<style>
  
</style>
