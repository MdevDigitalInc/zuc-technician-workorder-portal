<template>
  <div class="mdev-shybar" aria-label="User Menu" aria-hidden="true">
    <div class="mdev-main-wrapper flex flex-ver-center flex-hor-end">
      <a class="mdev-shybar-action"
          @click="showModalMaster(true)">
        {{ $t("general.changePwd") }} 
      </a>
      <a class="mdev-shybar-action"
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
      this.$emit('closeMe');
    },
    showModalMaster(pwdOrContact) {
      this.$emit('showModalContactMain', pwdOrContact);
      this.$emit('closeMe');
    }

  },
  
  mounted: function () {
    // Get Window Width
    var windowSize = $(window).width();
    var desiredTravel = 50;

    if (windowSize > 641) {
      // Get height of Top Nav
      var navHeight = $('.mdev-main-nav')[0].getBoundingClientRect().height;
      
      // Offset move by Desired Travel for Animation
      $('.mdev-shybar').css({
        "top"     : navHeight + 'px',
        "height"     : '0',
        "opacity" : "0"
      });

      // Send it to it's resting place
      setTimeout(function(){
        $('.mdev-shybar').css({
          "height"     : '',
          "opacity" : "1"
        }); 
      }), 50;
    }
    else {
      // Get height of Lower Nav
      var navHeight = $('.mdev-mobile-nav')[0].getBoundingClientRect().height;
      
      // Offset move by Desired Travel for Animation
      $('.mdev-shybar').css({
        "opacity" : "0",
        "bottom"  : (navHeight - desiredTravel) + 'px'
      });

      // Send it to it's resting place
      setTimeout(function(){
        $('.mdev-shybar').css({
          "opacity" : "1",
          "bottom"  : navHeight + 'px'
        }); 
      }), 50;
    }

    $(window).resize(function(){
      console.log(resize);
      this.$emit('closeMe');
    });
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
    background: $inactive-grey;
    position: fixed;
    left: 0;
    transition: all, .3s;
    padding: $small-spacing;
    opacity: 0;
    z-index: 5;

    @media screen and ('$tablet-up-comp') {
      padding: $medium-spacing;
      z-index: 15;
    }
    
    .mdev-main-wrapper:before {
      content: '';
      position:  absolute;
      width: 20px;
      height: 20px;
      background: $inactive-grey;
      top: -20px;
      right: 20px;
      transform: rotate( 45deg );

      @media screen and ('$tablet-up-comp') {
        display: block;
      }
    }

    .mdev-shybar-action {
      padding: 0 $small-spacing;
      color: $white;
      font-weight: $heading-weight;
      transition: all, .3s;

      @media screen and ('$tablet-up-comp') {
        padding: 0 $medium-spacing;
        font-size: .8vw;
      }

      &:last-child {
        padding-right: 0;
      }

      &:hover,
      &:active,
      &:focus {
        cursor: pointer;
        color: $zucora-green;
      }
    }

  }

</style>
