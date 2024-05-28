<script setup>

import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import DescriptionOfCharacters from "@/components/CharactersComponents/DescriptionOfCharacters.vue";
import BecomeAFan from "@/components/CharactersComponents/BecomeAFan.vue";
</script>

<template>
 <TheHeader/>
  <div class="parallax">
    <div class="mask">
      <div class="shadow-back">
        <DescriptionOfCharacters/>
        <BecomeAFan></BecomeAFan>
      </div>
    </div>
  </div>
<TheFooter/>
</template>

<style scoped>
*{
  margin: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: 'Monospace';
  src: url(../assets/fonts/MonospaceRegular.ttf);
}
.parallax {
  background: url(../assets/img/CharactersBack.png) fixed no-repeat;
  background-size: cover;
  height: 2500px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-size: 60px;
  align-items: center;
  position: relative;
}
.parallax .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.6);
  z-index: 2;
}
.shadow-back{
  height: 2500px;
  width: 90%;
  margin-left: 5%;
  background:rgba(0,0,0,0.5);
}
</style>