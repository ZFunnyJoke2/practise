<template>
  <div class="container">
    <div class="slider">
      <div class="slide" v-for="(video, index) in videos" :key="index" :class="{ active: index === currentIndex }">
        <iframe width="560" height="315" :src="video.url" frameborder="0" allowfullscreen></iframe>
        <p>{{ video.description }}</p>
      </div>
      <button class="prev" @click="prevSlide">&#10094;</button>
      <button class="next" @click="nextSlide">&#10095;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          url: "https://www.youtube.com/watch?v=wrN2k3qGbVA",
          description: "Season 1"
        },
        {
          url: "https://www.youtube.com/watch?v=HoXr3dKgwwc",
          description: "Season 2"
        },
        {
          url: "https://www.youtube.com/watch?v=Gp-za6RqOl0",
          description: "Season 3"
        },
        {
          url: "https://www.youtube.com/watch?v=lmC4c68HM54",
          description: "Season 4"
        },
        {
          url: "https://www.youtube.com/watch?v=y4tqo1ajeUk",
          description: "Season 5"
        },
        {
          url: "https://www.youtube.com/watch?v=faRl5Bea-Go",
          description: "Season 6"
        }
      ],
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.videos.length;
    }
  }
};
</script>

<style scoped>
.container{
  padding-top: 100px;
}
.slider {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.slide {
  display: none;
}
.slide p{
  text-align: center;
  padding-top: 20px;
  color: #c82222;
  font-size: 30px;
  font-family: Monospace, sans-serif;
}
.slide.active {
  display: block;
}

iframe {
  width: 100%;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  color: black;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>