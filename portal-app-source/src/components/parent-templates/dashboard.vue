<template>
  <section class="mdev-main-content mdev-main-wrapper">
    <!-- Search Component -->
    <search-component @userSearch="searchResults = $event"></search-component>
    <!-- Rendering Slot -->
    <router-view @loadingAnim="loading = $event" v-if="!searchResults"></router-view>
    <i v-if="loading" class="mdev-loader fa fa-refresh fa-spin fa-3x fa-fw"></i>
  </section>
</template>




<script>
  
  //Local Component registration
  import SearchComponent  from '../shared/search-bar.vue';
  
  export default{
    name: "dashboard",
    data: function () {
      return {
        loading: true,
        searchResults: false
      };
    },
    components: {
      'search-component'  : SearchComponent
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
.mdev-main-content-frame {
  background: $white;
}

.mdev-main-content {
  position: relative;
  @media screen and ('$phone-only-comp') {
    width: 100%;
  }  
}

.mdev-loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

/*--------------------------------------*/

</style>
