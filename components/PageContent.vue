<template>
  <div class="fiche-content">
    <article id="beschrijving" class="fiche-item beschrijving">
      <h3 class="subtitle"><i class="fa" :class="[fiche.BeschrijvingIcoon, color]"></i> Beschrijving</h3>
      <div v-html="fiche.Beschrijving"></div>
    </article>
    <article id="werking" class="fiche-item werking">
      <h3 class="subtitle"><i class="fa" :class="[fiche.WerkingIcoon, color]"></i> Werking</h3>
      <div v-html="fiche.Werking"></div>
    </article>
    <article id="tips" class="fiche-item tips">
      <h3 class="subtitle"><i class="fa" :class="[fiche.TipsIcoon, color]"></i> Tips</h3>
      <div v-html="fiche.Tips"></div>
    </article>
    <article id="voorbeelden" class="fiche-item voorbeelden">
      <h3 class="subtitle"><i class="fa" :class="[fiche.VoorbeeldenIcoon, color]"></i> Voorbeelden</h3>
      <div v-html="fiche.Voorbeelden"></div>
    </article>
    <article v-if="isDoelenVerduidelijken" class="fiche-item reflectie">
      <h3 class="subtitle"><i class="fa" :class="[fiche.ReflectieIcoon, color]"></i> Reflectie</h3>
      <div>
        <p>Op welke momenten verduidelijk je de doelen al? Om je hiervan bewust te worden, kan je <a href="" @click.prevent="showModal">deze oefening reflectieopdracht doelen</a> maken.</p>
      </div>
      <modal :fiche="fiche"></modal>
    </article>
  </div>
</template>
<script>
import Modal from './Modal'
import { mapActions } from 'vuex'
export default {
  components: {
    'modal': Modal
  },
  props: ['fiche', 'color'],
  data () {
    return {
    }
  },
  computed: {
    isDoelenVerduidelijken () {
      return this.fiche.Slug === 'doelen-verduidelijken'
    }
  },
  methods: {
    ...mapActions([
      'setActiveState'
    ]),
    showModal () {
      this.setActiveState('is-active')
    }
  }
}
</script>