import Vue from 'vue'

Vue.filter('classify', (val) => {
  return val.replace(/\s/ig, '-')
})
