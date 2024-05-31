<template>
  <TheHeader/>
  <div class="parallax">
    <div class="mask">
      <div class="shadow-back">
        <BecomeAFan/>
      </div>
    </div>
  </div>
  <TheFooter/>
</template>

<script setup>
import BecomeAFan from "@/components/AboutComponents/BecomeAFan.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue"
</script>

<style scoped>
@font-face {
  font-family: 'Monospace';
  src: url(../assets/fonts/MonospaceRegular.ttf);
}

@font-face {
  font-family: 'MonospaceBold';
  src: url(../assets/fonts/MonospaceBold.ttf);
}
.parallax {
  background: url(../assets/img/Background-image.jpg) fixed no-repeat;
  background-size: cover;
  height: 2500px;
  color: #ffffff;
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