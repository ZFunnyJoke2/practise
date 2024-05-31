<script setup>

import Seasons from "@/components/SeasonsComponent/Seasons.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue"
</script>

<template>
  <TheHeader/>
  <div class="parallax">
    <div class="mask">
      <div class="shadow-back">
        <Seasons/>
      </div>
    </div>
  </div>
  <TheFooter/>
</template>

<style scoped>

</style>