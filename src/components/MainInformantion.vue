<script >

</script>

<template>
  <div class="parallax">
    <div class="mask">
      <div class="container">

      </div>
    </div>
  </div>
</template>

<style>
.parallax {
  background-image: url(../assets/img/Background-image.jpg);
  height: 2000px;
  background-attachment: fixed;
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

</style>