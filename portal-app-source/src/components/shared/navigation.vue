<template>
  <nav class="mdev-main-nav" aria-role="navigation" role="navigation">
    <div class="mdev-main-wrapper flex flex-nowrap flex-hor-between flex-vert-center">
      <a :href="homeLink" :title="homeTitle" class="mdev-main-nav-branding">
        <img class="u-hidden-phone" :src="loadImage(homeBrand)">
        <img class="u-hidden-desktop" :src="loadImage(homeBrandReverse)">
      </a>
      <!-- Navigation Links -->
      <navlinks @showModalParent="showModalMaster" @showShybarChild="showShybar($event)"></navlinks> 
      <div class="u-hidden-desktop reorder">
        <a @click="goBack"
          v-if="showBack"
          class="mdev-back-btn flex flex-hor-between flex-vert-center">
            
            <i class="fa fa-fw fa-chevron-left"></i>
            {{ $t('general.back')}}
        </a>
        <span class="u-white u-bold" v-else>
          {{ $t('general.title') }}
        </span>
      </div>
    </div>
    <!--
    <button @click="change()">CHANGE</button>
    -->
  </nav>
</template>



<script>
  //Import Nav Links
  import NavLinks from './navlinks.vue';

  export default{
    // <router-link> element is a custom element derived from vue-router. use :to - to bind. 
    name: "navigation",

    data: function(){
      return{
        // Refer to routes.js file for available routes.
        homeLink          : '/',
        homeTitle         : 'Home',
        homeBrand         : 'zucora-white.svg',
        homeBrandReverse  : 'zucora-black.svg',
        showBack          : false
      };
    },

    created: function() {
      this.determineVisibility(this.$route.path);
    },
    
    watch: {
      '$route'(to, from) {
        this.determineVisibility(to.path); 
      }
    },
    
    components: {
      'navlinks' : NavLinks
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
      
       // Adjust Padding of the site
        function adjustPadding() {
        // Desired Padding Value
        var desiredPadding = (($(window).width() <= 500) ? 10 : 20);
 
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
      goBack() {
        this.$router.go(-1);
      },
      determineVisibility(path) {
        if (path === "/dashboard/list") {
          this.showBack = false;
        } 
        else {
          this.showBack = true;
        }
      },
      //Show Modal
      showModalMaster(pwdOrContact) {
        this.$emit('showModalContactMain', pwdOrContact);
      },
      showShybar(showShybar) {
        this.$emit('showShybarMain', showShybar);
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



<style lang="scss">

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
    padding: 15px 0;
    z-index: 10;
    transition: all, .3s;
    opacity: 1;
    background: $zucora-blue;
    border-bottom: 1px solid $bkg-light-grey;

    @media screen and ('$tablet-up-comp') {
      background: $white;
      padding: 25px 0;
    }

    img {
      width: 100%;
    }
    
    .mdev-nav-link {
      padding: 6px 5px;
      max-width: 240px;
      @media screen and ('$tablet-only-comp') {
        padding: 6px 3vw;
      }

      @media screen and ('$laptop-only-comp') {
        padding: 6px $large-spacing;
      }
      @media screen and ('$desktop-up-comp') {
        padding: 6px $large-spacing;
      }
      
      /* Important is necessary for override */
      /* stylelint-disable */
      &:last-child {
        padding-right: 0 !important;
      }
      /* stylelint-enable */
      /* Temporary */
      i {
        font-size: 1.5vw;
        padding-right: .2vw;
      }
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
    
    .mdev-icon {
      margin-right: $small-spacing;
    }

    .mdev-main-nav-links {
      display: none;
      color: $inactive-grey;
      font-weight: $body-weight;

      @media screen and ('$tablet-up-comp') {
        display: flex;
      }
    }

    .mdev-main-nav-visibility {
      opacity: .6;
      &:hover {
        opacity: 1;
      }
    }
  }

  .mdev-back-btn {
    color: $white;
    font-weight: $heading-weight;
  }

  @media screen and ('$phone-only-comp') {
    .reorder {
      order: 1;
    }

    .mdev-main-nav-branding {
      order: 2;
    }
  }

  /*--------------------------------------*/

</style>
