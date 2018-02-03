<template>
  <div>
    <div class="home-bg" id="home-el">
      <img :src="modelImg" class="medel-img"/>
      <div class="title">海量精美模板可供挑选</div>
      <div class="title">快速打造专业网站</div>
      <button class="go-btn">前往体验</button>
    </div>
  </div>
</template>
<script>
import './styles'
export default {
  data() {
    return {
      modelImg: '/assets/' + require('../../../images/model.png')
    }
  }
}
</script>
