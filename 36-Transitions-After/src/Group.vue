<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <ul class="list-group">
          <transition-group name="list">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              :key="number"
              @click="removeItem(index)"
              style="cursor: pointer"
            >
              {{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
      nextNum: 5
    }
  },
  methods: {
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(pos, 0,  ++this.nextNum)
    },
    removeItem(index) {
      this.numbers.splice(index, 1)
    }
  }
}
</script>

<style>
.list-enter {
  opacity: 0;
}
.list-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
.list-leave {
}
.list-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
.list-move {
  transition: transform 1s;
}

</style>
