<template>
  <div class="defense" id="webpage-el">
    <div class="title">网页智能防御</div>
    <div class="defense-container">
      <div class="defense-card card-space">
        <div class="iconfont icon-tags tags1"></div>
        <div><span class="enlarge1">绝</span><span class="defense-text">对防御</span></div>
        <p>—— 所有访客只能看到防御页面</p>
      </div>
      <div class="defense-card card-space">
        <div class="iconfont icon-tags tags2"></div>
        <div><span class="enlarge2">正</span><span class="defense-text">常防御</span></div>
        <p>—— 所有屏蔽地区访客只能看到防御页面，未屏蔽地区访客只能看到真实页面。</p>
      </div>
      <div class="defense-card">
        <div class="iconfont icon-tags tags3"></div>
        <div><span class="enlarge3">关</span><span class="defense-text">闭防御</span></div>
        <p>—— 所有访客只能看到真实页面</p>
      </div>
    </div>
  </div>
</template>
<script>
import './styles'

export default {

}
</script>
