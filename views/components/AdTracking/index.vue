<template>
  <div class="ad-container">
    <div class="ad-intro">
      <div class="intro-title">广告跟踪服务流程</div>
      <p>精确跟踪地域 / 时间 / 媒体 / 频道 / 关键词 / 广告位置等</p>
      <p>提供广告效果诊断报告，评估广告投放效果及给出优化方案。</p>
  </div>
  <div class="ad-img">
    <img :src="adProcessImg"/>
  </div>
</div>
</template>
<script>
import './styles'
export default {
  data() {
    return {
      adProcessImg: '/assets/' + require('../../../images/ad-process.png')
    }
  }
}
</script>
