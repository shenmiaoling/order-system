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
    <nav class="mobile-nav" id="my-mobile-nav">
      <div class="iconfont icon-menu home-icon" @click="handleMenu"></div>
    </nav>
    <div class="mobile-item" v-show="open">
      <ul class="nav-item">
        <li v-scroll-to="'#home-el'" @click="selected = 1,open=false" v-bind:class="{'link-effect': selected == 1}">首页</li>
        <li v-scroll-to="{el:'#build-el',offset: -50}" @click="selected = 2,open=false" v-bind:class="{'link-effect': selected == 2}">网站建设</li>
        <li v-scroll-to="{el:'#ad-el',offset: -50}" @click="selected = 3,open=false" v-bind:class="{'link-effect': selected == 3}">广告跟踪</li>
        <li v-scroll-to="{el:'#order-el',offset: -50}" @click="selected = 4,open=false" v-bind:class="{'link-effect': selected == 4}">订单系统</li>
        <li v-scroll-to="{el:'#webpage-el',offset: -50}" @click="selected = 5,open=false" v-bind:class="{'link-effect': selected == 5}">网页防护</li>
      </ul>
    </div>
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
      var myMobileNav = document.getElementById('my-mobile-nav')
      if (window.scrollY > 0 ) {
        myPcNav.classList.add("nav-colored")
        myPcNav.classList.remove("nav-transparent")
        myMobileNav.classList.add("mobile-nav-colored")
        myMobileNav.classList.remove("nav-transparent")
      }
      else {
          myPcNav.classList.add("nav-transparent")
          myPcNav.classList.remove("nav-colored")
          myMobileNav.classList.add("nav-transparent")
          myMobileNav.classList.remove("mobile-nav-colored")
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
