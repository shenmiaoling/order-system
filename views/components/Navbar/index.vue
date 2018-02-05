<template>
  <div>
    <nav class="pc-nav" id="mynav">
      <div class="logo">LOGO</div>
      <ul class="nav-item">
        <li v-scroll-to="'#home-el'" @click="selected = 1" v-bind:class="{'link-effect': selected == 1}">首页</li>
        <li v-scroll-to="{el:'#build-el',offset: -90}" @click="selected = 2" v-bind:class="{'link-effect': selected == 2}">网站建设</li>
        <li v-scroll-to="{el:'#ad-el',offset: -90}" @click="selected = 3" v-bind:class="{'link-effect': selected == 3}">广告跟踪</li>
        <li v-scroll-to="{el:'#order-el',offset: -90}" @click="selected = 4" v-bind:class="{'link-effect': selected == 4}">订单系统</li>
        <li v-scroll-to="{el:'#webpage-el',offset: -90}" @click="selected = 5" v-bind:class="{'link-effect': selected == 5}">网页防护</li>
      </ul>
    </nav>
    <header class="mobile-head">
      <span>LOGO</span>
      <span class="phone-number">
        <span class="iconfont icon-phone"></span>
        <a href="tel:13688888888">
          <span>13688888888</span>
        </a>
      </span>
    </header>
  </div>
</template>
<script>
import './styles'
export default {
  data(){
    return {
      open: false,
      selected: 1
    }
  },
  methods: {
    handleMenu () {
      this.open = !this.open
    },
    handleScroll () {
      var myPcNav = document.getElementById('mynav')
      if (window.scrollY > 0 ) {
        myPcNav.classList.add("nav-colored")
        myPcNav.classList.remove("nav-transparent")
      }
      else {
          myPcNav.classList.add("nav-transparent")
          myPcNav.classList.remove("nav-colored")
      }
    },
    handleJump(){
      console.log();
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
