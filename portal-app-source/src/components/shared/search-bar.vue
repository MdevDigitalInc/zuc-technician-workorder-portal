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
      font-size: 1.6vw;
    }

    @media screen and ('$laptop-only-comp') {
      padding: 20px 20px 20px 50px
    }

    @media screen and ('$desktop-up-comp') {
      font-size: 1.2vw;
    }
  }

  .--icon-layer{
     font: normal normal normal 14px/1 FontAwesome;
     position: relative;
     &:before {
      content: "\f002";
      display: block;
      z-index: 2;
      position: absolute;
      left: 28px;
      top: 50%;
      transform: translateY(-50%);
      color: $bkg-light-grey;
      font-size: 3vw;

      @media screen and ('$tablet-only-comp') {
        left: 15px;
        font-size: 2.1vw;
      }

      @media screen and ('$laptop-up-comp') {
        left: 18px;
        font-size: 1.4vw;
      }
     }
  }

	/*--------------------------------------*/
</style>
