<template>
  <div>
    <h2 v-if="!repUrl">正在加载中...</h2>
    <h2 v-else>
      Most Star is <a :href="repUrl">{{ repName }}</a>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      repName: '', //默认是空字符串，发送请求获取数据后里面存储的就是技术的名字
      repUrl: '', //默认是空字符串，发送请求获取数据后里面存储的就是链接地址
    }
  },
  //页面加载后的生命周期
  mounted() {
    //发送异步请求
    //GET /someUrl
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    this.$http
      .get(url)
      .then((response) => {
        const result = response.data.items[0]
        //更新状态数据
        //console.log(result)
        ;(this.repName = result.name), (this.repUrl = result.html_url)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
</style>
