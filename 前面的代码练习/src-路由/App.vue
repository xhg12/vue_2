<template>
  <div>
    <!--路由链接-->
    <!-- <router-link to="/About">About</router-link> -->
    <!-- <router-link to="/Home">Home</router-link> -->
    <!--路由视图-->
    <!-- <router-view></router-view> -->
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a href="/about" class="list-group-item router-link-exact-active router-link-active">About</a>
          <a href="/home" class="list-group-item">Home</a>-->

          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--缓存路由组件-->
            <keep-alive>
              <!-- 路由视图是可以进行传递数据的，可以传到某个组件内部，该组件内部需要通过props来进行接收后，就可以使用了 -->
              <router-view xhg="123jy"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {},
}
</script>

<style scoped>
</style>

