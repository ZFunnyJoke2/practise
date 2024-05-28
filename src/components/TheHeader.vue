<template>
  <header>
    <div class="container">
      <div class="header">
        <div class="logo">
          <a href="#"><img src="../assets/img/TheSopranosLogo.jpg" alt="TheSopranos"></a>
        </div>
        <nav>
          <ul class="topmenu">
            <li><a href="" class="down">Seasons</a>
              <ul class="submenu">
                <li><a href="">Season 1</a></li>
                <li><a href="">Season 2</a></li>
                <li><a href="">Season 3</a></li>
                <li><a href="">Season 4</a></li>
                <li><a href="">Season 5</a></li>
                <li><a href="">Season 6</a></li>
              </ul>
            </li>
            <li><router-link :to="{name:''}" class="down">Characters</router-link></li>
            <li><router-link :to="{name:''}">About</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>

</script>

<style>

.container {
  margin: 0 auto;
  box-sizing: border-box;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  height: 110px;
}
.logo img{
  width: 175px;
  height: 75px;
  margin-left: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}
nav{
  margin-right: 150px;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav a {
  display: block;
  text-decoration: none;
  outline: none;
  transition: .4s ease-in-out;
}
.topmenu {
  backface-visibility: hidden;
  background: black;
}
.topmenu > li {
  display: inline-block;
  position: relative;
}
.topmenu > li > a {
  height: 70px;
  line-height: 70px;
  padding: 0 30px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
}
.down:after {
  margin-left: 8px;
}
.topmenu li a:hover { color: #c82222; }
.submenu {
  background: black;
  border: 2px solid #c82222;
  position: absolute;
  left: 0;
  visibility: hidden;
  opacity: 0;
  z-index: 5;
  width: 150px;
  transform: perspective(600px) rotateX(-90deg);
  transform-origin: 0 0;
  transition: .6s ease-in-out;
}
.topmenu > li:hover .submenu{
  visibility: visible;
  opacity: 1;
  transform: perspective(600px) rotateX(0deg);
}
.submenu li a {
  color: white;
  font-size: 18px;
  line-height: 36px;
  padding: 0 25px;
}
</style>