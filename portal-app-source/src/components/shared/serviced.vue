<template>
  <div class="mdev-serviced-plugin flex flex-hor-between flex-vert-stretch">
    <i class="mdev-icon --rounded-icon --size-m --date-icon"></i>
    <input type="text" placeholder="DD/MM/YYYY" v-model="date">
  </div>
</template>

<script>
  export default {
    name: 'ServicedComponent',

    props: ['servicedDate', 'orderId'],

    data: function() {
      return {
        date: ''
      };
    },

    created: function(){
      console.log('----Serviced Component----');
      console.log('Date: ' + this.date);
      console.log('ServicedDate: ' + this.servicedDate);
      console.log('orderId: ' + this.orderId);
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
 /* Serviced Plugin General */
  .mdev-serviced-plugin {
    margin: 0 5px 0 0;
    background: $active-grey;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    padding: 2px;
    height: 10.2vw;

    @media screen and ('$tablet-up-comp') {
      margin: 0 $small-spacing;
      height: 2vw;
    }

    &:hover {
      background: $zucora-green;
    }

    input {
      margin-top: 0;
      width: 80%;
      margin-left: 5px;
      font-size: 3.4vw;
      padding: 5px;
      position: relative;
      background: $white;
      border: none;

      @media screen and ('$tablet-up-comp') {
        font-size: 1vw;
      }

      &:hover {
        border: none;
      }
    }
  }

</style>


