<template>
<!--  <div class="container">-->
<!--    <div class="characters-block">-->
<!--      <div class="characters" v-for="(characters, index) in characters" :key="index">-->
<!--        <img :src="characters.image" :alt="characters.name">-->
<!--        <p>{{ characters.name }}</p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->


  <div class="container">
    <h1>Main characters</h1>
    <div class="card__container">
      <div v-for="(character, index) in visibleCharacters" :key="index" class="card">
        <img :src="character.image" alt="изображение">
        <div class="card__content">
          <p class="card__name">{{ character.name }}</p>
        </div>
      </div>
    </div>
    <button v-if="!showingAll" @click="showAll">Показать все</button>
    <button v-if="showingAll" @click="showLess">Показать меньше</button>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import charactersData from '/src/data/characters.json';

const characters = ref(charactersData);
const visibleCharacters = ref(characters.value.slice(0, 5));
const showingAll = ref(false);

const showAll = () => {
  visibleCharacters.value = characters.value;
  showingAll.value = true;
};

const showLess = () => {
  visibleCharacters.value = characters.value.slice(0, 5);
  showingAll.value = false;
};
</script>
<style scoped>
.container h1{
  color: #c82222;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
}
.card__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: rgba(242, 242, 242, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px rgba(242, 242, 242, 0.1);;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card img {
  width: 100%;
  object-fit: cover;
  fill: #333;
  transition: all 0s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(242, 242, 242, 0.1);
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__name{
  margin: 0;
  font-size: 24px;
  color: #c82222;
  font-weight: 700;
}

.card:hover img {
  scale: 0;
}

button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #555;
}
</style>