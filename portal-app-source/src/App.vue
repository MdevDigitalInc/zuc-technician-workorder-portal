<template>
  <main id="app">
    <main-navigation v-if="showNav" @showModalContactMain="showModalOn($event,true)"></main-navigation>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <main-footer></main-footer>
    <mobile-navigation v-if="showNav" @showModalContactMain="showModalOn($event,true)"></mobile-navigation>
    <modal-panel :pwdOrContact="pwdOrContact" v-if="showModal" @close="showModalOn($event,false)">
    </modal-panel>
  </main>
</template>




<script>
  
  //Local Component registration
  import MainNavigation from './components/shared/navigation.vue';
  import MobileNavigation from './components/shared/mobile-navigation.vue';
  import MainFooter from './components/shared/footer.vue';
  import ModalPanel from './components/shared/modal.vue';
  
  export default{
    name: 'AppMain',

    data: function() {
      return{
        showNav: true,
        showModal: false,
        pwdOrContact: true
      };
    },
    
    watch: {
      '$route'(to, from) {
        this.determineVisibility(to.path);
      }
    },
    
    mounted: function(){
      this.determineVisibility(this.$route.path);
    },

    methods: {
      determineVisibility(path) {
        if ( path.includes("auth") ) {
          this.showNav = false;
        }
        else {
          this.showNav = true;
        }
      },
      showModalOn( pwdOrContact, state ) {
      // Pass new prop to child
      this.pwdOrContact = pwdOrContact;
        
        if (state) {
          this.showModal = true;
          $('body').addClass('u-freeze-scroll');
        }
        else {
          this.showModal = false;
          $('body').removeClass('u-freeze-scroll');
        }
      }
    },

    components: {
      'main-navigation'   : MainNavigation,
      'mobile-navigation' : MobileNavigation,
      'main-footer'       : MainFooter,
      'modal-panel'       : ModalPanel
    }
  };
</script>



<style lang="scss">

  /*-----/
  Global Main
  /-----*/
  @import './assets/styles/global-main.scss';

  /*--------------------------------------*/
  /* Main Component Styles                */
  /*--------------------------------------*/

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>
