<template>
  <button 
    :class="['mdev-base-btn mdev-status-btn',{ unreachable: unreachable}]"> {{ $t("general.unreachable") }} </button>
 
</template>

<script>
  export default {
    name: 'unreachableComponent',
    props: ['unreachable', 'orderId'],
    data: function () {
      return {
        status: ''
      };
    },

    created: function(){
      console.log('----Unreachable Component---');
      console.log('orderId: ' + this.orderId);
      console.log('unreachableStatus' + this.unreachable);
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
 

</style>


