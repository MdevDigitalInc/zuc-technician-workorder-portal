<template>
  <div class="mdev-search-form">
    <input type="text" :placeholder="placeholder" aria-label="Search">
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      placeholder : "Customer Name, Order Number, Date(MM/DD/YYYY)"
    };
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



  .mdev-search-form {
    margin: 15px 0;
    width: 100%;
    padding: 15px 15px 15px 50px;
    border-radius: 3px;
    background: $white;
  
    input {
      background: transparent;
      border: none;
      margin-bottom: 0;
    }
  }

	/*--------------------------------------*/
</style>
