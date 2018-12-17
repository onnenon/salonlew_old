<template>
  <div class="wrapper">
    <img alt="salon lew logo" src="../assets/logo.png">
    <div class="links">
      <div class="address">
        <i class="fa fa-map-marker-alt"/>
        <div>6630 Mills Civic Parkway, Suite 3106
          <br>West Des Moines, Iowa 50266
        </div>
      </div>
      <div class="phone">
        <i class="fa fa-phone"/>
        <div>515-273-5391</div>
      </div>
      <div class="email">
        <i class="fa fa-envelope"/>
        <a href="mailto:laine.wright12@gmail.com">Email Us</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  padding: 1em;
  max-width: 961px;
  margin: 0 auto;
  height: 4.5em;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 0.85em;
}
.links {
  display: flex;
  justify-content: flex-end;
}
.address,
.phone,
.email {
  display: flex;
  text-align: left;
  color: #282327;
  padding-left: 2em;
  align-items: center;
}
i {
  padding: 1em;
  color: #853179;
}
a {
  text-decoration: none;
  color: #282327;
}
a:visited {
  color: #2d2d2d;
}
img {
  height: 100%;
  object-fit: contain;
}
</style>
