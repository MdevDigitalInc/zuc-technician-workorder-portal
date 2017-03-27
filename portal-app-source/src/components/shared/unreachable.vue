<template>
  <button 
    @click="unreachableToggle"
    :class="['mdev-base-btn mdev-status-btn',{ unreachable: status}]"> {{ $t("general.unreachable") }} </button>
 
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

    methods: {
      unreachableToggle() {
        this.status = !this.status; 


      }
    },

    created: function(){
      this.status = this.unreachable;
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


