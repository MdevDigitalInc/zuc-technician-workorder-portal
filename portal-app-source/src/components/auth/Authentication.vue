<template>
  <div class="mdev-auth-wrapper">
    <div class="mdev-auth-module" aria-label="Authentication Form">
    <!-- Brand -->
      <router-link class="mdev-auth-brand" 
        to="/auth" 
        title="Zucora Inc. Technician Work Order Portal" 
        aria-label="Technician Work Order Portal Home Link.">
          <img :src="loadImage(mainBrand)" alt="Zucora Inc. Logo" >
      </router-link>
      <!-- Form  -->
      <router-view class="mdev-auth-forms" aria-label="Primary Form Window"></router-view>
      <!-- Reset -->
      <router-link 
        v-if="showRegister" 
        to="/auth/register"
        class="u-bold"
        title="Register new technician account." 
        aria-label="Register new technician account."> 
          {{ $t("auth.register.action") }} 
      </router-link>
    </div>
    <div class="mdev-splash-bkg"></div>
  </div>
</template>

<script>
  export default {
    name: "AuthComponent",
    
    data: function() {
      return {
        mainBrand     : 'zucora-white.svg',
        showRegister  : true
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
      loadImage(path){
        return require('../../assets/images/' + path);
      },
      determineVisibility(path) {
        if (path === "/auth/register" || path === "/auth/changepwd") {
          this.showRegister = false;
        } 
        else {
          this.showRegister = true;
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
  .mdev-auth-wrapper {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
  }
  .mdev-auth-module {
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

    @media screen and ('$tablet-up-comp'){
      background: $white;
      border-radius: 4px;
      border-top: solid $border-top-size $zucora-blue;
      padding:($top-padding-var + $border-top-size) 30px 30px 30px;
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

    .--reset_link {
      width: 100%;
      display: block;
      text-align: right;
      margin-top: 10px;
    }

    .mdev-base-btn{
      width: 100%;
    }
  }

  .mdev-auth-forms {
    text-align: left;
  }

  .mdev-auth-brand {
    display: block;
    width: 60%;
    margin: 0 auto 70px auto;
  }

  .mdev-action-group {
    margin: 20px 0 10px 0;
  }

  .mdev-splash-bkg {
    position: absolute;
    top: 0;
    left: 0;
    background: url("../../assets/images/login-bkg.jpg");
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    filter: blur(2px);

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: $white;
      opacity: .5;
      width: 100vw;
      height: 100vh;
    }
  }
  
  // Hack to Fix Color On Input
  @media scree and ('$phone-only-comp'){
    input{
      background-color: $white;
    }      
  }
  /*--------------------------------------*/


</style>
