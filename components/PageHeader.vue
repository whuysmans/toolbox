<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ titel }}
        </h1>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: ['titel']
  }
</script>
