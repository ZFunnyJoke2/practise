<script>
import TheHeader from '../components/TheHeader.vue'
import MainInformation  from '../components/MainInformantion.vue'
import VideoBlock from '../components/VideoBlock.vue'
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    MainInformation,
    VideoBlock,
    TheFooter
  }
}
</script>

<template>
    <TheHeader/>
    <div class="parallax">
      <div class="mask">
        <div class="shadow-back">
          <MainInformation/>
          <VideoBlock/>
        </div>
      </div>
    </div>
    <TheFooter/>
</template>

<style scoped>
.parallax {
  background: url(../assets/img/Background-image.jpg) fixed no-repeat;
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