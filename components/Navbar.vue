<template>
  <nav class="navbar is-fixed-top" :class="color">
      <div class="container">
        <div class="navbar-brand" :class="{'is-active': isActive}" @click="isActive = !isActive">
          <button class="navbar-burger">
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-menu" :class="{'is-active': isActive}">
          <div class="navbar-start"></div>
          <div class="navbar-end" style="margin-right: 2em;">
            <div v-if="parent === 'biblio'" class="navbar-item is-hoverable">
              <nuxt-link style="color: black;" to="/">Home</nuxt-link>
            </div>
            <div v-else class="navbar-item is-hoverable">
              <nuxt-link style="color: black;" to="/bibliografie">Bibliografie</nuxt-link>
            </div>
            <div class="navbar-item is-hoverable">
              <a  style="color: black;" href="https://cipt.be/toolbox/topic/welkom-op-het-forum">Ideeënforum</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
  export default {
    props: ['color', 'parent'],
    data () {
      return {
        isActive: false
      }
    }
  }
</script>
