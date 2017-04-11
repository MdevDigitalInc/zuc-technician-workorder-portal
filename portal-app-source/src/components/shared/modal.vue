<template>
  <div class="mdev-modal-frame mdev-modal-bkg" @click.stop="closeMe">
    <div class="mdev-modal-content" @click.stop="">
      <a @click="closeMe" class="mdev-close-modal" aria-label="Close Modal">
        <i class="fa fa-fw fa-times-circle"></i> 
      </a>
      <change-pwd v-if="pwdOrContactShow" @closeModal="closeMe"></change-pwd>
      <div class="mdev-contact-info" v-if="!pwdOrContactShow">
        <h1> Contact Information </h1>
      </div>
      <slot></slot>    
    </div>
  </div>
</template>

<script>

  import ChangePwd from '../../components/auth/ChangePWD.vue';
  
  export default {
    name: 'ModalComponent',

    data: function() {
      return{
        pwdOrContactShow: null
      };
    },

    props: ['pwdOrContact'],
    
    // Decide between which Modal to show
    created: function () {
      this.pwdOrContactShow = this.pwdOrContact;
    },
    
    // Watch for changes on desired Modal
    watch: {
      pwdOrContact: function() {
        this.pwdOrContactShow = this.pwdOrContact;
      }
    },
    
    // Close Modal emitter
    methods: {
      closeMe() {
        this.$emit('close');
      }
    },

    components: {
      'change-pwd'  : ChangePwd
    }
  };
</script>

<style lang="scss">

/*-----/
Global Main
/-----*/
@import '../../assets/styles/component-lean-main.scss';

/*--------------------------------------*/
/* Main Component Styles                */
/*--------------------------------------*/

.mdev-modal-frame {
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.mdev-modal-bkg {
  background: rgba(0,0,0,.9);
}

.mdev-modal-content {
    $top-padding-var: 35px;
    $border-top-size: 8px;
    position: absolute;
    min-width: 300px;
    max-width: 380px;
    margin: 0 auto;
    width: 80%;
    text-align: center;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate3D(-50%, -50%, 0);
    background: $white;
    border-radius: $standard-radius;
    border-top: solid $border-top-size $zucora-blue;
    padding: ($top-padding-var + $border-top-size) 30px 30px 30px;
    
    @media screen and ('$tablet-up-comp') {  
      width: 40%;
    }
    


    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    a {
      font-size: 12px;
      line-height: 14px;
    }

    .mdev-base-btn {
      width: 100%;
    }

    .mdev-close-modal {
      position: absolute;
      right: 10px;
      top: 10px;
      color: $active-grey;
      font-size: 20px;

    }

}

</style>
