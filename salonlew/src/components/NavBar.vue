<template>
  <div class="bar">
    <div class="wrapper">
      <div class="nav-bar">
        <div class="links">
          <div class="nav-link">
            <a href>HOME</a>
          </div>
          <div class="nav-link">
            <a href>ABOUT US</a>
          </div>
          <div class="nav-link">
            <a href>SERVICES</a>
          </div>
          <div class="nav-link">
            <a href>PRODUCTS</a>
          </div>
          <div class="nav-link">
            <a href>CONTACTS</a>
          </div>
        </div>
        <div class="social-links">
          <a href="https://facebook.com/salonlew">
            <i class="fa fa-facebook"/>
          </a>
          <a href="https://twitter.com/salon_lew">
            <i class="fa fa-twitter"/>
          </a>
          <a href="https://instagram.com/salon.lew">
            <i class="fa fa-instagram"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  background-color: #282327;
  display: flex;
  flex-direction: row;
}
.wrapper {
  flex-basis: 961px;
  margin: 0 auto;
  height: 4em;
  font-size: 0.85em;
  align-items: center;
  align-content: center;
}
.nav-bar {
  display: flex;
}
.links {
  display: flex;
}
.nav-link {
  display: flex;
  width: 150px;
  align-items: left;
}
.social-links {
  display: flex;
}
a {
  text-decoration: none;
  color: #ffffff;
  size: 2em;
}
a:active {
  color: #853179;
}
a:hover {
  color: #853179;
}
img {
  height: 100%;
  object-fit: contain;
}
</style>