<template>
  <div class="mdev-auth-module">
  <!-- Brand -->
    <div class="mdev-auth-brand">
      <img :src="loadImage(mainBrand)">
    </div>
    <!-- Form  -->
    <router-view class="mdev-auth-forms"></router-view>
    <!-- Reset -->
    <router-link v-if="showRegister" to="/auth/register"> register </router-link>
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
        if (path === "/auth/register") {
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
  .mdev-auth-module {
    $top-padding-var: 35px;
    $border-top-size: 8px;
    position:absolute;
    min-width: 320px;
    max-width: 380px;
    width: 40%;
    padding:($top-padding-var + $border-top-size) 30px 30px 30px;
    margin: 0 auto;
    text-align: center;
    background: $white;
    border-radius: 4px;
    border-top: solid $border-top-size $zucora-green;
    top: 50%;
    left: 50%;
    transform: translate3D(-50%, -50%, 0);


    h1 {
      font-size: 20px;
      margin-bottom: 15px;

    }

    a {
      font-size: 12px;
      line-height: 14px;
    }

    .--reset_link {
      width: 100%;
      display: block;
      text-align: right;
    }
  }

  .mdev-auth-forms {
    text-align: left;
  }

  .mdev-auth-brand {
    width: 60%;
    margin: 0 auto 30px auto;
  }

  .mdev-action-group {
    margin: 20px 0 10px 0;
  }


  /*--------------------------------------*/


</style>
