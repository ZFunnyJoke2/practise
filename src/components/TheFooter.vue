<script setup>

</script>

<template>
  <div class="footer">
    <div class="first-block">
      <h1 contenteditable>watch all of HBO</h1>
      <p>plus hit series, movies, reality, and more</p>
    </div>
    <div class="second-block">
        <div class="big-links">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">How to watch</a></li>
          </ul>
        </div>
        <div class="small-links">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Ad Choices</a></li>
          </ul>
        </div>
        <div class="copyright">
          <ul>
            <li>
              <p>Copyright 2024</p>
              <p>Home Box Office. Inc. All rights Reserved</p>
            </li>
            <li>
              <p>This website may contain mature content</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<style scoped>
*{
  font-family: Monospace, sans-serif;
}

.footer {
  margin: 0 auto;
  box-sizing: border-box;
}

.first-block {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/img/footer-back.png');
  background-size: cover;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.first-block h1 {
  font-size: 120px;
  text-transform: uppercase;
  letter-spacing: -3px;
  transition: 700ms ease;
  font-variation-settings: "wght" 311;
  margin-bottom: 0.8rem;
  color: #c82222;
  outline: none;
  text-align: center;
}

.first-block h1:hover {
  font-variation-settings: "wght" 582;
  letter-spacing: 1px;
}

.first-block p {
  font-size: 1.2em;
  line-height: 150%;
  text-align: center;
  color: MintCream;
}

.second-block {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: black;
  color: #fff;
}

.second-block .big-links,
.second-block .small-links{
  font-size: 20px;
}
.second-block .big-links ul,
.second-block .small-links ul,
.second-block .copyright ul {
  list-style: none;
  padding: 0;
}

.second-block .big-links ul li,
.second-block .small-links ul li,
.second-block .copyright ul li {
  margin-bottom: 10px;
}

.second-block .big-links a,
.second-block .small-links a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 16px;
}

.second-block .big-links a:hover,
.second-block .small-links a:hover {
  color: #c82222;
}

.second-block .big-links ul li,
.second-block .small-links ul li {
  margin-bottom: 8px;
}

.second-block .copyright p {
  margin: 5px 0;
}

.second-block .copyright {
  font-size: 16px;
  font-weight: bold
}

.second-block .copyright ul li {
  margin-bottom: 5px;
}
</style>