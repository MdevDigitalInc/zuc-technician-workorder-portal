<template>
  <div class="mdev-shybar" aria-label="User Menu" aria-hidden="true">
    <div class="mdev-main-wrapper flex flex-ver-center flex-hor-end">
      <a class="mdev-shybar-action"
          @click="showModalMaster(true)">
        {{ $t("general.changePwd") }} 
      </a>
      <a class="mdev-shybar-actions"
         @click="logMeOut">
        {{ $t("general.logout") }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shybar',

  methods: {
    logMeOut() {
      this.$auth.destroyToken();
      this.$router.push('/');
    },
    showModalMaster(pwdOrContact) {
      console.log(pwdOrContact);
      this.$emit('showModalContactMain', pwdOrContact);
    }

  },
  
  mounted: function () {
    // Get Window Width
    var windowSize = $(window).width();
    var desiredTravel = 50;

    console.log(windowSize);
    if (windowSize > 641) {
      // Get height of Top Nav
      var navHeight = $('.mdev-main-nav')[0].getBoundingClientRect().height;
      
      // Offset move by Desired Travel for Animation
      $('.mdev-shybar').css({
        "top": (navHeight - desiredTravel) + 'px'
      });

      // Send it to it's resting place
      setTimeout(function(){
        console.log('me');
        $('.mdev-shybar').css({
          "top": navHeight + 'px'
        }); 
      }), 100;
    }
    else {
      console.log('Else here');
      // Get height of Lower Nav
      var navHeight = $('.mdev-mobile-nav')[0].getBoundingClientRect().height;
      
      // Offset move by Desired Travel for Animation
      $('.mdev-shybar').css({
        "bottom": (navHeight - desiredTravel) + 'px'
      });

      // Send it to it's resting place
      setTimeout(function(){
        console.log('me');
        $('.mdev-shybar').css({
          "bottom": navHeight + 'px'
        }); 
      }), 100;
    }
    // Get height of Nav and position
    console.log(navHeight);
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
  
  .mdev-shybar {
    width: 100%;
    background: $active-grey;
    position: absolute;
    left: 0;
    transition: all, .3s;
  }

</style>
