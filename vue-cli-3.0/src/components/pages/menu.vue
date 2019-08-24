<template>
  <div class="hello">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to='/page/'>卡片1</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to='/page/child2'>卡片2</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to='/page/child3'>卡片3</router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="updatePath">切換到指定頁面</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="beforePath">上一頁</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="afterPath">下一頁</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return { pages: 0 }
  },
  methods: {
    updatePath () {
      this.$router.push('/page/child2')
    },
    beforePath () {
      this.$router.back()
    },
    afterPath () {
      this.$router.forward()
    },
  }
}
</script>
