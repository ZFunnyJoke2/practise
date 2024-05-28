<template>
  <div class="container">
    <div class="h2">
      <h2>Trailer</h2>
    </div>
    <div class="video-container">
      <video controls width="600" height="400">
        <source src="../assets/video/The Sopranos - Trailer (1999).mp4" type="video/mp4" />
      </video>
    </div>
    <div class="playlist">
      <div class="img">
        <img src="../assets/img/playlist.png" alt="playlist">
      </div>
      <div class="text">
        <h3>The Official playlist</h3>
        <p>Check out The Sopranos official playlist on Spotify to hear the<br>
          songs featured throughout the series.</p>
        <a href="https://open.spotify.com/">LISTEN ON SPOTIFY</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playlist{
  padding-top: 200px;
  display: flex;
}
.text{
  padding-top: 100px;
  padding-left: 40px;
  font-size: 30px;
}
.text a{
  text-decoration: none;
  color: white;
}
.text h3{
  color: #c82222;
}
.img img{
  margin-left: 100px;
  width: 700px;
  height: 500px;
  object-fit: cover;
  border: 5px solid black;
}
.h2{
  padding-top: 100px;
  display: flex;
  justify-content: center;
  color: #c82222;
}
.video-container {
  padding-top: 100px;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
.video-container video {
  width: 700px;
  border-radius: 5%;
  border: 5px solid black;
}
</style>

<script>
export default {
  name: 'VideoComponent'
};
</script>