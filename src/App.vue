<template>
  <TheHeader/>
  <MainInformation/>
<RouterView/>
</template>
<script>
import TheHeader from './components/TheHeader.vue'
import MainInformation from './components/MainInformantion.vue'
export default {
  components: {TheHeader,MainInformation}
}
</script>