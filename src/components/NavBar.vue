<template>
  <div class='navigation'>
    <div class='bar'>
      <div class='nav-wrapper'>
        <div class='nav-links'>
          <div class='nav-link' v-for='(value,key) in nav_links'>
            <router-link :to='value'>{{ key }}</router-link>
          </div>
        </div>
        <div class='social-links'>
          <div v-for='l in social_links'>
            <a :href='l.link '>
              <i :class='l.icon'/>
            </a>
          </div>
        </div>
      </div>
      <div class='mobile-nav-wrapper'>
        <img alt='salon lew logo' src='../assets/salonlew_logo_white_small.png'>
        <i :class='mobile_icon[mobile_icon_index]' @click='toggle_menu'/>
      </div>
    </div>
    <div class='mobile-link-wrapper' v-show='display_menu'>
      <div class='mobile-link' v-for='(value,key) in nav_links'>
        <router-link v-on:click.native='toggle_menu' :to='value'>{{ key }}</router-link>
      </div>
      <div class='mobile-social'>
        <div class='mobile-social-link' v-for='l in social_links'>
          <a :href='l.link '>
            <i :class='l.icon'/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      display_menu: false,
      mobile_icon: ['fas fa-bars', 'fas fa-times'],
      mobile_icon_index: 0,
      social_links: {
        facebook: {
          icon: 'fab fa-facebook-f',
          link: 'https://facebook.com/salonlew'
        },
        twitter: {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/salon_lew'
        },
        instagram: {
          icon: 'fab fa-instagram',
          link: 'https://instagram.com/salon.lew'
        }
      },
      nav_links: {
        HOME: '/',
        'ABOUT US': '/about',
        SERVICES: '/services',
        PRODUCTS: '/products',
        CONTACT: '/contact'
      }
    }
  },
  methods: {
    toggle_menu () {
      console.log('toggled')
      this.mobile_icon_index = (this.mobile_icon_index + 1) % 2
      this.display_menu = !this.display_menu
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.bar {
  background-color: #282327;
  display: flex;
  height: 3.5em;
  align-items: center;
  flex: 0 1 100vw;
  flex-wrap: wrap;
}
.nav-wrapper {
  display: flex;
  flex: 0 1 961px;
  margin: 0 auto;
  font-size: 0.9em;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1em;
}
.nav-links {
  display: flex;
  flex: 0 1 80%;
  justify-content: space-between;
}
.nav-link {
  display: flex;
  flex: 0 1 20%;
  flex-wrap: wrap;
  align-items: center;
}
.social-links {
  display: flex;
  flex: 0 1 20%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
i {
  font-size: 1.5em;
}
a {
  display: flex;
  text-decoration: none;
  color: #ffffff;
}
a:active {
  color: #853179;
}
a:hover {
  color: #853179;
}

.mobile-nav-wrapper {
  display: none;
}
.mobile-link-wrapper {
  display: none;
}
@media screen and (max-width: 770px) {
  .nav-wrapper {
    display: none;
  }
  .bar {
    height: 5.5em;
  }
  .mobile-nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 1 100%;
  }
  .mobile-link-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #ececec;
    padding: 1em;
    align-items: center;
    transition: all 0.3s ease;
    height: auto;
    overflow: hidden;
    flex: 1;
  }
  .mobile-link-wrapper.folded {
    flex: 0;
  }
  .mobile-link a {
    color: #2d2d2d;
    padding: 0.5em;
    font-size: 1.3em;
  }
  .mobile-link a:hover {
    color: #853179;
  }
  .mobile-social {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
  }
  .mobile-social-link {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  img {
    height: 3em;
    width: auto;
    object-fit: contain;
    padding-left: 1.5em;
  }
  i {
    font-size: 2em;
    padding-right: 1em;
    color: #ececec;
  }
}
.mobile-social i {
  color: #2d2d2d;
  font-size: 1.5em;
  padding: 0.5em;
}
</style>
