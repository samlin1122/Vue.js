new Vue({
  el: "#app",
  data: {
    show: false,
    player: 100,
    monster: 100,
  },
  methods: {
    start() {
      this.show = true;
      this.player = 100;
      this.monster = 100;
    },
    attack() {
      this.monster -= this.caculate(10, 3);
      if (this.checkwin()) { return }
      this.monsterattack()
    },
    specialattack() {
      this.monster -= this.caculate(20, 10);
      if (this.checkwin()) { return }
      this.monsterattack()
    },
    monsterattack() {
      this.player -= this.caculate(13, 5);
      this.checkwin()
    },
    heal() {
      this.player <= 90 ? this.player += 10 : this.player = 100;
      this.monsterattack()
    },
    giveup() {
      confirm("Do you want to finish?") ? this.show = false : ""
    },
    caculate(max, min) {
      return Math.max(Math.floor(Math.random() * max), min)
    },
    checkwin() {
      if (this.monster <= 0) {
        confirm("You won ! New game?") ? this.start() : this.show = false;
        return true
      } else if (this.player <= 0) {
        confirm("You lost ... New game?") ? this.start() : this.show = false;
        return true
      }
      return false
    }
  },
})