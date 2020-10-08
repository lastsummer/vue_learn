<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase | to-lowercase('param1','param2') }}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add New Items</button>
        Fruit：<input v-model="filterText" /><br/>
        TestFilter：<input v-model="filterTextForTest" />
        <p>Filter：{{filterText | filterFruit}}</p>
        <p>Computed：{{computedFruit}}</p>
        <ul>
            <li v-for="fruit in filteredFruits" :key=fruit>{{ fruit }}</li>
        </ul>
        <hr>
        <appList/>
      </div>
    </div>
  </div>
</template>
<script>
import List from './List.vue'
import { fruitMixin } from './fruitMixin'

export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: 'Hello there!',
      filterTextForTest: ''
    }
  },
  filters: {
    toUpperCase(value){
      return value.toUpperCase() 
    },
    filterFruit(value){
      console.log('execute filterFruit')
      return `${value}-add-filter`
    }
  },
  computed:{
    computedFruit(){
        console.log('execute computedFruit')
      return `${this.filterText}-add-computed`
    }
  },
  components: {
      appList: List
  }
}
</script>
<style></style>
