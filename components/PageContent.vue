<template>
  <div class="fiche-content">
    <article v-if="fiche.Beschrijving" id="beschrijving" class="fiche-item beschrijving">
      <h3 class="subtitle"><i class="fa" :class="[fiche.BeschrijvingIcoon, color]"></i> Beschrijving</h3>
      <div v-html="fiche.Beschrijving"></div>
    </article>
    <article v-if="fiche.Werking" id="werking" class="fiche-item werking">
      <h3 class="subtitle"><i class="fa" :class="[fiche.WerkingIcoon, color]"></i> Werking</h3>
      <div v-html="fiche.Werking"></div>
      <div v-if="isMotivatie">
        <p>Achtergrond bij de motivatietheorie vind je <a href="" @click.prevent="showNotification = true">hier</a>.</p>
        <div v-if="showNotification" class="notification">
          <button class="delete" @click="showNotification = false">
          </button>
          <em>Vansteenkiste, M. (2010). Hoe we kinderen en jongeren kunnen motiveren: Toepassingen van de zelfdeterminatietheorie. Caleidoscoop, 22(1), 6-15.</em><br />
          Link: <a href="http://www.caleidoscoop.be/index.php?ID=41484" target="_blank">http://www.caleidoscoop.be/index.php?ID=41484</a>
        </div>
      </div>
    </article>
    <article v-if="fiche.Tips" id="tips" class="fiche-item tips">
      <h3 class="subtitle"><i class="fa" :class="[fiche.TipsIcoon, color]"></i> Tips</h3>
      <div v-html="fiche.Tips"></div>
    </article>
    <article v-if="fiche.Voorbeelden" id="voorbeelden" class="fiche-item voorbeelden">
      <h3 class="subtitle"><i class="fa" :class="[fiche.VoorbeeldenIcoon, color]"></i> Voorbeelden</h3>
      <div v-html="fiche.Voorbeelden"></div>
    </article>
    <article v-if="isDoelenVerduidelijken" class="fiche-item reflectie" id="reflectie">
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
      showNotification: false
    }
  },
  computed: {
    isDoelenVerduidelijken () {
      return this.fiche.Slug === 'doelen-verduidelijken'
    },
    isMotivatie () {
      return this.fiche.Slug === 'motivatie'
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