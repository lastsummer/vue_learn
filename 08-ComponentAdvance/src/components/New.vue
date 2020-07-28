<template>
  <div>
    <button @click="counter++">Increase!</button>
    <h3>New Quote</h3>
    {{ counter }}
  </div>
</template>

<script>
  export default{
    data: function(){
      return{
        counter: 0
      }
    },
    destroyed(){
      console.log('Destroyed!')
    },
    deactivated(){
      console.log('Deactivated!')
    },
    activated(){
      console.log('Activated!')
    }
  }
</script>

<style scoped>
</style>