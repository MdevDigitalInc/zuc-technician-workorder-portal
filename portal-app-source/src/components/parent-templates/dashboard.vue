<template>
  <section class="mdev-main-content mdev-main-wrapper">
    <search-component></search-component>
    <router-view></router-view>
  </section>
</template>




<script>
  
  //Local Component registration
  import SearchComponent  from '../shared/search-bar.vue';
  
  export default{

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

  .unreachable {
    background: orange;
  }

	/*--------------------------------------*/

</style>
