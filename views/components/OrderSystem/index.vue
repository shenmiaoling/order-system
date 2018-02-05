<template>
  <div class="order-container" id="order-el">
    <div class="order-img">
      <img :src="computerImg"/>
    </div>
    <div class="order-intro">
      <div class="order-title">订单系统</div>
      <div class="sub-title">3D立体化订单系统</div>
      <p>收集订单用户的具体信息，并提供在线订单处理功能，从网民下单开始，到快递面单在线打印。一站式便捷服务，提供在线金算盘功能，可以直接在线核算成本。</p>
      <div class="sub-title">收集每个订单的信息来源</div>
      <p>标记每个订单的 IP、地区、时间、广告位置等详细信息，为您的网站订单效果保驾护航，提高您的每一分汗水的投入产出比。</p>
  </div>
</div>
</template>
<script>
import './styles'
export default {
  data() {
    return {
      computerImg: '/assets/' + require('../../../images/computer.png')
    }
  }
}
</script>
