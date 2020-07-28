<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="selectedComponent = 'Quote'">Quote</button>
    <button @click="selectedComponent = 'Author'">Author</button>
    <button @click="selectedComponent = 'New'">New</button>
    <p> {{ selectedComponent }} </p>
    <component :is="selectedComponent">
      <h2 slot="title">{{quoteTitle}}</h2>
      <p slot="content">A wonderful Quote!</p>
    </component>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

export default {
  name: 'App',
  data: function(){
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote'
    }
  },
  components: {
    Quote,
    New,
    Author
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
