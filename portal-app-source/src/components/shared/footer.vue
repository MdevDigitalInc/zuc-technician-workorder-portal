<template>
  <footer class="mdev-footer">
    <span class="u-bold u-green">
      {{ $t("footer.title") }}
    </span>
    <span class="u-bold">
      {{ $t("footer.action") }}
    </span>
    <span>
      {{ $t("footer.message") }}
    </span>
    <span class="u-bold">
      {{ $t("footer.brand") }}
    </span>
    <span>
      {{ year }}
    </span>
  </footer>
</template>



<script>
  export default{
    name: "mainFooter",
    data: function (){
      return {
        year: ""
      };
    },
    created: function (){
      this.year = new Date().getFullYear();
    }
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
    z-index: 10;
  }
  /*--------------------------------------*/

</style>
