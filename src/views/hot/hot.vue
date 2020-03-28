<template>
  <div class="box">
    <div class="con">
      <h1>接收到HOME传来的参数{{id}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  mounted() {
    this.id = this.$route.params.id
    console.log(this.id)
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.box {
  .con {
  }
}
</style>