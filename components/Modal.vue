<template>
  <div class="modal" :class="activeState()">
    <div class="modal-background" @click.prevent="closeModal"></div>
    <div class="modal-content">
      <div class="box">
        <article v-html="fiche.Toelichting"></article>
      </div>
    </div>
    <button class="modal-close is-large" @click.prevent.stop="closeModal"></button>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['fiche'],
  data () {
    return {
    }
  },
  methods: {
    ...mapGetters([
      'getActiveState'
    ]),
    ...mapActions([
      'setActiveState'
    ]),
    closeModal () {
      this.setActiveState('')
    }
  },
  computed: {
    activeState () {
      return this.getActiveState
    }
  }
}
</script>