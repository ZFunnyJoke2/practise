<template>
  <div class="container">
    <h1>The Sopranos News</h1>
    <div v-if="news.length">
      <div v-for="item in news" :key="item.title" class="news-item">
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data() {
    return {
      news: []
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const response = await fetch('/src/data/news.json');
        const data = await response.json();
        this.news = data.news;
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
  }
};
</script>

<style scoped>
.container{
  max-width: 1200px;
}
.news-item {
  margin-bottom: 20px;
  font-size: 18px;
}
.news-item h2{
  color: #c82222;
}
</style>
