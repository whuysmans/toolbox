<template>
  <section class="hero" :class="color">
    <nav-bar :color="color"></nav-bar>
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
import Navbar from './Navbar'
export default {
  components: {
    'nav-bar': Navbar
  },
  props: ['fiche', 'color']
}
</script>
<style>
  
</style>
