<template>
  <div>
    <div class="home-bg" id="home-el">
      <img :src="modelImg" class="medel-img"/>
      <div class="title-content">
        <div class="title">海量精美模板可供挑选</div>
        <div class="title">快速打造专业网站</div>
        <button class="go-btn">前往体验</button>
      </div>
    </div>
    <div class="mb-menu">
      <div class="menu-item item-border"
      v-scroll-to="'#build-el'"
      @click="selected = 1"
      v-bind:class="{'click-effect': selected == 1}">
        <div class="iconfont icon-web-build"
        v-bind:class="{'click-effect': selected == 1}"></div>
        <div class="title">网站建设</div>
      </div>
      <div class="menu-item item-border"
      v-scroll-to="'#ad-el'"
      @click="selected = 2"
      v-bind:class="{'click-effect': selected == 2}">
        <div class="iconfont icon-ad-track"
        v-bind:class="{'click-effect': selected == 2}"></div>
        <div class="title">广告跟踪</div>
      </div>
      <div class="menu-item item-border"
      v-scroll-to="'#order-el'"
      @click="selected = 3"
      v-bind:class="{'click-effect': selected == 3}">
        <div class="iconfont icon-jiesuanqingdan"
        v-bind:class="{'click-effect': selected == 3}"></div>
        <div class="title">订单系统</div>
      </div>
      <div class="menu-item"
      v-scroll-to="'#webpage-el'"
      @click="selected = 4"
      v-bind:class="{'click-effect': selected == 4}">
        <div class="iconfont icon-safe"
        v-bind:class="{'click-effect': selected == 4}"></div>
        <div class="title">网页防护</div>
      </div>
    </div>
    <div class="customer">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=2438537296&site=qq&menu=yes">
        <div class="iconfont icon-qq"></div>
        在线客服
      </a>
    </div>
  </div>
</template>
<script>
import './styles'
export default {
  data() {
    return {
      modelImg: '/assets/' + require('../../../images/model.png'),
      selected: 1
    }
  }
}
</script>
