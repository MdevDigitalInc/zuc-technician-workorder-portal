<template>
  <nav class="mdev-main-nav" aria-role="navigation" role="navigation">
    <div class="mdev-main-wrapper flex flex-nowrap flex-hor-between flex-vert-end">
      <a :href="homeLink" :title="homeTitle" class="mdev-main-nav-branding">
        <img :src="loadImage(homeBrand)">
      </a>
      <div class="mdev-main-nav-links u-capitalize">
        <router-link 
          v-for="link in links" 
          :to="link.route"
          class ="mdev-nav-link"
          active-class="--active" 
          :title="link.linkTitle" 
          aria-role="menuitem" 
          exact>
            {{ link.linkName  }}
       </router-link> 
      </div>
    </div>
    <!--
    <button @click="change()">CHANGE</button>
    -->
  </nav>
</template>



<script>
  export default{
    // <router-link> element is a custom element derived from vue-router. use :to - to bind. 
    name: "navigation",

    data: function(){
      return{
        // Refer to routes.js file for available routes.
        links: [
          {
            linkName: 'Work Orders',
            linkTitle: 'Available Work Orders',
            route: '/dashboard/list'
          },
          {
            linkName: 'Billing',
            linkTitle: 'Billing Report',
            route: '/dashboard/billing'
          },
          {
            linkName: 'Contact',
            linkTitle: 'Contact Information',
            route: '#'
          },
          {
            linkName: 'User',
            linkTitle: 'User Menu',
            route: '#'
          }
        ],

        homeLink: '/',
        homeTitle: 'Home',
        homeBrand: 'zucora-white.svg'
      };
    },

    mounted: function(){
        // Resize Timer
        var resizeTimerNav = null;        
        // Show Hide Nav
      $(document).scroll(function(event) {

        // Distance Scrolled
        var distanceTop = $(window).scrollTop();

        if(distanceTop >= 250) {
          $('.mdev-main-nav').addClass('mdev-main-nav-visibility');
        }
        else {
          $('.mdev-main-nav').removeClass('mdev-main-nav-visibility');
        }
      });

      // Give padding according to Nav Height IIFE
      (function(){
      
        // Desired Padding Value
        var desiredPadding = 20;
        // Adjust Padding of the site
        function adjustPadding() {
          var navHeight = $('.mdev-main-nav')[0].getBoundingClientRect().height;
        
          $('#app').css({
            "padding-top": desiredPadding + navHeight + 'px'
          });
        }
        // Trigger with Debouce
        $(window).resize(function(){
          clearTimeout(resizeTimerNav);
          resizeTimerNav = setTimeout(adjustPadding, 800);
        }); 
        // Adjust Padding on Load
        adjustPadding();
      })();
    },

    methods: {
      loadImage(path){
        return require('../../assets/images/' + path);
      },
      // Change Language METHOD
      change () {
        let current = this.$locale.current();
        if (current === 'en') {
          this.$locale.change('pt');
        } else {
          this.$locale.change('en');
        }
      }
    }
  };

</script>



<style lang="scss" scoped>

  /*--------------------------------------*/
  /* Lean Import for Components           */
  /*--------------------------------------*/

  /* Disable because they are already linted */
  /* stylelint-disable */
  @import '../../assets/styles/component-lean-main.scss';
  /* stylelint-enable */

  /*--------------------------------------*/
  /* Main Component Styles                */
  /*--------------------------------------*/
  .mdev-main-nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 35px 0;
    z-index: 10;
    transition: all, .3s;
    opacity: 1;
    background: $white;

    img{
      width: 100%;
    }

    .mdev-main-nav-branding {
      max-width: 125px;
      min-width: 73px;
      height: auto;
      width: 10%;
      opacity: 1;
      transition: all, .3s;

      &:hover {
        cursor: pointer;
        opacity: .8;
      }
    }

    .mdev-main-nav-links {
      color: $charcoal-grey;
      font-weight: $body-weight;
    }

    .mdev-nav-link {
      margin: 0 5px;
      transition: all, .3s;
      padding: 6px 15px;
      background: rgba(230,231,233, 0);
      border-radius: 3px;

      @media screen and ('$tablet-up-comp') {
        margin: 0 15px;
      }

      &:hover {
        background: rgba(230,231,233, 1);
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .--active {
      background: rgba(230,231,233, 1);
    }
  }

  .mdev-main-nav-visibility {
    opacity: .6;
    &:hover {
      opacity: 1;
    }
  }

  /*--------------------------------------*/

</style>
