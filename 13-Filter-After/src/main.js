import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value, arg1, arg2){
  return `${value.toLowerCase()}-${arg1}-${arg2}`
})

Vue.mixin({
  created(){
    console.log('Global Mixin - Created Hook!')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
