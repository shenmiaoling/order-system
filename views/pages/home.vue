<template>
  <div>
    <navbar></navbar>
    <home></home>
    <building-process></building-process>
    <ad-tracking></ad-tracking>
    <order-system></order-system>
    <webpage-protection></webpage-protection>
    <my-footer></my-footer>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import BuildingProcess from '../components/BuildingProcess'
import AdTracking from '../components/AdTracking'
import OrderSystem from '../components/OrderSystem'
import WebpageProtection from '../components/WebpageProtection'
import MyFooter from '../components/Footer'
export default {
  components:{
    Navbar,
    Home,
    BuildingProcess,
    AdTracking,
    OrderSystem,
    WebpageProtection,
    MyFooter
  }
}
</script>
