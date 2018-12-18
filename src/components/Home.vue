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
    <div class="about">
      <div class="hours-wrapper">
        <div class="hours-inner-col">
          <h3>SALON HOURS</h3>
          <div class="hours-inner">
            <div class="hours">
              <div class="hour" v-for="(value,key) in hours">
                {{key}}
                <br>
              </div>
            </div>
            <div class="times">
              <div class="time" v-for="(value,key) in hours">
                {{value}}
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-wrapper">
        <div class="about-wrapper-col">
          <p>
            salon lew is Laine’s baby. Laine Elizabeth Wright—"lew"—is the owner of salon lew, and has envisioned running
            her own business for as long as she can remember. Keep clients happy, and making people laugh have always been
            a top priority to Laine. She loves keeping up with the newest trends for each season! Stop in today and book
            your appointment with Laine!
          </p>
          <img src="../assets/i2.jpg">
          <h3>Laine Wright</h3>
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
  name: "Home",
  data() {
    return {
      hours: {
        Monday: "noon - 5 pm",
        Tuesday: "9 am - 7 pm",
        Wednesday: "10 am - 8 pm",
        Thursday: "9 am - 7 pm",
        Friday: "9 am - 5 pm",
        Saturday: "8 am - 3 pm",
        Sunday: "Closed"
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Pacifico");

h3 {
  margin: 0;
  padding: 1em;
}
.home {
  display: flex;
  background-image: url("../assets/p1.jpg");
  background-size: cover;
  flex: 1 1 100vw;
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
.hours-inner-col {
  display: flex;
  flex-direction: column;
}
.hours-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #282327;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  padding: 2em;
  flex: 0 1 40vw;
}
.about-wrapper-col {
  max-width: 600px;
  padding: 2em;
}
.about-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 50vw;
  background: #f4f4f4;
  min-height: 21em;
  align-items: flex-start;
  justify-content: center;
}
.about-wrapper p {
  color: #7c7c7c;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5em;
  font-size: 0.9em;
  display: flex;
  flex: 0 1 60%;
  padding: 2em;
  margin: 0;
}
.about-wrapper img {
  width: 100px;
  border-radius: 150px;
}
.about-wrapper h3 {
  font-family: "Pacifico", sans-serif;
  font-weight: 400;
  font-feature-settings: "liga";
}
.hours-inner {
  display: flex;
  padding: 1em;
  font-size: 0.9em;
}
.hour,
.time {
  padding: 0.2em 1em;
  text-align: left;
}
.about {
  display: flex;
  flex: 0 1 auto;
  justify-content: space-between;
  align-items: center;
  background: #282327;
  flex-wrap: wrap;
  min-height: 21em;
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
.map {
  display: flex;
  flex: 1 1 auto;
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
  .hours-wrapper {
    flex: 0 1 100%;
    justify-content: center;
  }
  .about-wrapper {
    flex: 0 1 100%;
    justify-content: center;
    align-items: center;
  }
  .hours,
  .time {
    font-size: 0.7em;
  }
}
</style>
