<template>
  <input class="mdev-search-form" type="text" :placeholder="$t('general.search')" aria-label="Search">
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



  input{
    margin: 5px auto;
    width: 90%;
    padding: 10px;
    background: $white;
    display: block;
    
    @media screen and ('$tablet-up-comp') {
      margin: 15px 0 0 0;
      padding: 20px;
    }
  }

	/*--------------------------------------*/
</style>
