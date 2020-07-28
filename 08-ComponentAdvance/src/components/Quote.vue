<template>
  <div>
    <div class="title">
      <slot name="title" />
      <span style="color: #ccc">
        <slot name="subtitle">test</slot>
      </span>
    </div>
    <hr>
    <div>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  props:['quote']
}
</script>

<style scoped>
  div{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  h2{
    color: red
  }

</style>