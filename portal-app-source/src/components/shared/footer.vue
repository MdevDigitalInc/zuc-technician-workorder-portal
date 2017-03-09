<template>
  <footer class="mdev-footer">
    Footer Content goes Here
  </footer>
</template>



<script>
  export default{
   
  };

</script>



<style lang="scss" scoped>

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
  .mdev-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: center;
    background: $zucora-blue;
    padding: 1vw 0;
    color: $white;
  }
  /*--------------------------------------*/

</style>
