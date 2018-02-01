<template>
  <div>
    <nav class="pc-nav">
      <div class="logo">LOGO</div>
      <ul class="nav-item">
        <li class="link-effect">首页</li>
        <li>网站建设</li>
        <li>广告跟踪</li>
        <li>订单系统</li>
        <li>网页防护</li>
      </ul>
    </nav>
    <nav class="mobile-nav">
      <div class="iconfont icon-menu home-icon" @click="handleMenu"></div>
    </nav>
    <div class="mobile-item" v-show="open">
      <ul class="nav-item">
        <li class="link-effect">首页</li>
        <li>网站建设</li>
        <li>广告跟踪</li>
        <li>订单系统</li>
        <li>网页防护</li>
      </ul>
    </div>
  </div>
</template>
<script>
import './styles'
export default {
  data(){
    return {
      open: false
    }
  },
  methods: {
    handleMenu () {
      this.open = !this.open
    }
  }
}
</script>
