<template>
  <div class="modal" :class="activeState">
    <div class="modal-background" @click.prevent="toggleModal"></div>
    <div class="modal-content">
      <div class="box">
        <article v-html="fiche.Toelichting"></article>
      </div>
    </div>
    <button class="modal-close is-large" @click.prevent.stop="toggleModal"></button>
    </div>
</template>
<script>
  export default {
    props: ['fiche'],
    data () {
      return {
        activeState: ''
      }
    },
    methods: {
      toggleModal () {
        this.activeState === '' ? this.activeState = 'is-active' : this.activeState = ''
      }
    }
  }
</script>