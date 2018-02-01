<template>
  <div>
    <navbar></navbar>
    <home></home>
    <building-process></building-process>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import BuildingProcess from '../components/BuildingProcess'
export default {
  components:{
    Navbar,
    Home,
    BuildingProcess
  }
}
</script>
