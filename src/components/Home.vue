<template>
  <div class="home">
    <div class="hero">
      <div class="home-width">
        <div class="home-wrapper">
          <img alt="salon lew logo" src="../assets/salonlew_logo_white_large.png">
          <div class="hero-text">
            <p>
              You'll be in good hands with experienced professionals. Whether it’s a haircut, color or spa treatment —
              you'll leave feeling as good on the inside as you look on the outside.
              <br>
            </p>
            <h3>Come experience salon lew!</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="map">
      <iframe
        class="actAsDiv"
        width="100%"
        height="347"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;q=6630%20Mills%20Civic%20ParkwaySuite%203106%C2%A0West%20Des%20Moines%2C%20Iowa%2050266&amp;aq=0&amp;ie=UTF8&amp;t=m&amp;z=13&amp;iwloc= &amp;output=embed"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

.home {
  display: flex;
  background-image: url("../assets/p1.jpg");
  background-size: cover;
  flex: 0 1 100vw;
  min-height: 85vh;
  justify-content: center;
  flex-direction: column;
}
.home-width {
  display: flex;
  flex: 0 1 961px;
  justify-content: flex-end;
}
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 0.85em;
  flex: 1 1 15em;
}
.hero {
  background-image: url("../assets/hair-header.jpg");
  background-size: cover;
  display: flex;
  flex: 0 1 90vh;
  min-height: 85vh;
  justify-content: center;
}
.hero img {
  width: 20em;
  max-width: 90vw;
  padding: 8em 1em 1em 0;
}
.hero-text {
  padding: 1em;
  display: flex;
  flex-direction: column;
  flex: 1 1 15em;
  width: 40%;
  color: #949494;
  text-align: right;
  font-size: 1.2em;
  font-family: "Open Sans", sans-serif;
}
@media screen and (max-width: 805px) {
  .home-wrapper {
    background: rgba(0, 0, 0, 0.7);
  }
  .hero-text {
    color: #949494;
    width: 60%;
    font-size: 1em;
  }
}
</style>
