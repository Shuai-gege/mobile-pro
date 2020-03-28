<template>
  <div class="Home">
    <div class="con">
      <h1>{{date|timeFilter}}</h1>
      <h1>{{name|nameHide}}</h1>
      <button @click="tiao">跳转hot</button>
    </div>
  </div>
</template>

<script>
import router from '../../router.js'
export default {
  data() {
    return {
      date: new Date().getTime(),
      name: '季帅帅'
    }
  },
  created() {
    // 路由守卫
    /**
     * @param {to} 将要去的路由
     * @param {from} 出发的路由
     * @param {next} 执行下一步
     */
    router.beforeEach((to, form, next) => {
      // 如果进去到的页面是登录或者注册页面
      if (to.path == '/login' || to.path == '/register') {
        next()
      } else if (!localStorage.getItem('token')) {
        alert('还没登录，请先登录/注册')
        next('/login') //转入登陆/注册页面
      } else {
        next()
      }
    })
  },
  mounted() {},
  methods: {
    tiao() {
      this.$router.push({
        name: 'hot',
        params: {
          name: 'hot',
          id: 1
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.Home {
  .con {
  }
}
</style>