<template>
  <nav class="navbar is-fixed-top">
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
            <div class="navbar-item is-hoverable">
              <a  style="color: black;" href="https://cipt.be/toolbox/topic/welkom-op-het-forum">Teacher Zone</a>
            </div>
            <div class="navbar-item is-hoverable">
              <nuxt-link style="color: black;" to="/">Bibliografie</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
  export default {
    data () {
      return {
        isActive: false
      }
    }
  }
</script>
