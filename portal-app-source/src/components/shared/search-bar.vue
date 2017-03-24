<template>
 <div class="--icon-layer">
  <input class="mdev-search-form" type="text" :placeholder="$t('general.search')" aria-label="Search">
  </div>
</template>

<script>

export default {
  name: "search"
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



  .mdev-search-form{
    margin: 5px auto;
    width: 90%;
    position: relative;
    padding: 10px 10px 10px 30px;
    background: $white;
    display: block;
    font-size: 2.6vw;
    z-index: 1;
    
    @media screen and ('$tablet-up-comp') {
      width: 100%;
      margin: 15px 0 0 0;
      padding: 20px 20px 20px 40px;
      font-size: 1.2vw;
    }

    @media screen and ('$laptop-only-comp') {
      padding: 20px 20px 20px 50px
    }
  }

  .--icon-layer{
     &:before {
      content: ' ';
      display: block;
      z-index: 10;
      position: absolute;
      width: 6vw;
      height: 6vw;
      background: red;
      left: 25px;
      top: 9px;

      @media screen and ('$tablet-up-comp') {
        width: 3vw;
        height: 3vw;
        left: 12px;
        top: 19px;
      }

      @media screen and ('$laptop-only-comp') {
        width: 2vw;
        height: 2vw;
        left: 15px;
        top: 25px;

      }
      @media screen and ('$desktop-up-comp') {
        width: 1vw;
        height: 1vw;
      }

     }
  }

	/*--------------------------------------*/
</style>
