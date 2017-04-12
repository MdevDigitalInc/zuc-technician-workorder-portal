<template>
  <section class="mdev-main-content mdev-main-wrapper">
    <div class="mdev-vert-align">
      <router-link class="mdev-auth-brand" 
        to="/" 
        title="Zucora Inc. Technician Work Order Portal" 
        aria-label="Technician Work Order Portal Home Link.">
          <img :src="loadImage(mainBrand)" alt="Zucora Inc. Logo" >
      </router-link>
      <h1 class="u-text-center"> {{ $t("general.title404") }} </h1>
    </div>
  </section>
</template>




<script>
  
  //Local Component registration
  import SearchComponent  from '../shared/search-bar.vue';
  
  export default{
    name: "404Page",
    
    // Instance Data Storage
    data: function () {
      return {
        mainBrand: 'zucora-white.svg'
      };
    },

    methods: {
      // Retrieve Images
      loadImage(path) {
        return require('../../assets/images/' + path);
      }
    },
    components: {
      'search-component'  : SearchComponent
    }
  };
</script>



<style lang="scss" scoped>

/*-----/
Global Main
/-----*/
@import '../../assets/styles/component-lean-main.scss';

/*--------------------------------------*/
/* Main Component Styles                */
/*--------------------------------------*/
.mdev-main-content {
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}

.mdev-main-content {
  @media screen and ('$phone-only-comp') {
    width: 100%;
  }  
}

.mdev-vert-align {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d( -50%, -50%, 0 );
}

.mdev-auth-brand {
  width: 40%;
  margin: 5vh auto;
}

/*--------------------------------------*/

</style>
