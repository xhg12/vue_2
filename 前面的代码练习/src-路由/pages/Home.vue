<template>
  <div>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/Home/news">News</router-link>
      </li>
      <li>
        <router-link to="/Home/message">Message</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {},
}
</script>

<style scoped>
</style>
