new Vue({
  el: '#app',
  data: {
    playerHealth:100,
    monsterHealth:100,
    gameIsRunning: false,
    turns:[]
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = []
    },
    attack: function(){
      if(this.monsterattacks(3,10)) return 
      this.playerAttacks()
    },
    specialAttack: function(){
      if(this.monsterattacks(10,20)) return 
      this.playerAttacks()
    },
    monsterattacks: function(min, max){
      let damage = this.calculateDamage(min,max)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      })
      return this.checkWin()
    },
    playerAttacks: function(){
      let damage = this.calculateDamage(5,12)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage
      })
      this.checkWin()
    },
    heal: function(){
      let recover = this.playerHealth<=90 ? 10 : (100-this.playerHealth)
      this.playerHealth += recover
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for ' + recover
      })
      this.playerAttacks()
    },
    giveUp: function(){
      this.gameIsRunning = false
    },
    calculateDamage: function(min, max){
      return Math.max(Math.floor(Math.random() * max) + 1, min) // get number between min~max
    },
    confirmMessage: function(message){
      if(confirm(message)){
        this.startGame()
      }else{
        this.gameIsRunning = false
      }
    },
    checkWin: function(){
      let result = false
      if(this.monsterHealth <= 0){
        this.confirmMessage('You won! New Game?')
        result = true
      }else if(this.playerHealth <= 0){
        this.confirmMessage('You lost! New Game?')
        result = true
      }
      return result
    }
  }
});