<template>
  <div>
    <div class="container"></div>
    <Search />
    <Main />
  </div>
</template>

<script>
//引入Search组件
import Search from './components/Search.vue'
//引入Main组件
import Main from './components/Main.vue'
export default {
  name: '',
  data() {
    return {}
  },
  components: {
    Search,
    Main,
  },
}
</script>

<style scoped>
</style>
