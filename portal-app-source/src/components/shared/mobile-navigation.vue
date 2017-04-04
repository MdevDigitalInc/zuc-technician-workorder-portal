<template>
  <div class="mdev-mobile-nav u-hidden-desktop" aria-role="navigation" aria-hidden="true" role="navigation">
    <div class="mdev-main-wrapper flex flex-nowrap flex-hor-between flex-vert-center">
      <!-- -->
      <navlinks @showModalParent="showModalMaster" @showShybarChild="showShybar($event)"></navlinks>  
    </div>
  </div>
</template>

<script>
  //Import Nav Links
  import NavLinks from './navlinks.vue';
  
  export default {
    name: "mobilenav",

    components: {
      'navlinks' : NavLinks
    },

    methods: {
      //Show Modal
      showModalMaster(pwdOrContact) {
        console.log(pwdOrContact);
        this.$emit('showModalContactMain', pwdOrContact);
      },
      showShybar(showShybar) {
        this.$emit('showShybarMain', showShybar);
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
  
  .mdev-mobile-nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    background: $zucora-blue;
    padding: $small-spacing 0;
    z-index: 2;
    left: 0;

    .mdev-main-nav-links {
      width: 100%;
      justify-content: space-between;
      margin: 0;
    }

    .mdev-icon {
      margin: 0 auto $medium-spacing auto;
    }

    .mdev-nav-link {
      width: 25%;
      
      /* Temporary as frig */
      i {
        display: block;
        margin: 0 auto 3vw auto;
        font-size: 7vw;
      }
    }
  }

  
</style>
