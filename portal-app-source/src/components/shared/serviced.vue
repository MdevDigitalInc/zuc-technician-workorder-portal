<template>
  <div :class="['mdev-serviced-plugin flex flex-hor-between flex-vert-center',{activeInput : successClass} ]">
    <!-- Temporary
    <i class="mdev-icon --rounded-icon --size-m --date-icon"></i>
    -->
    <i v-if="!showSpinner" class="fa fa-fw fa-calendar"></i>
    <i v-if="showSpinner" class="fa fa-circle-o-notch fa-spin fa-fw"></i>
    <input v-if="!hideInput" @keyup.enter="statusChange" type="text" placeholder="DD/MM/YYYY" v-model="date">
    <span class="--success-active" v-if="hideInput"> SUCCESS </span>
  </div>
</template>

<script>
  export default {
    name: 'ServicedComponent',

    props: ['servicedDate', 'orderId'],

    data: function() {
      return {
        date: '',
        showSpinner: false,
        hideInput: false,
        successClass: false
      };
    },

    methods: {
      statusChange() {
        // Validate Date
        if ( this.$validate.validateDate(this.date, this.$t("validation.errors.date"))) {
            // Start Spinner
            this.showSpinner = true;
            //Submit & Emit Event
            //TODO - Add Event Submit via $http

            // Once Success Call function to reset
            setTimeout(this.successDisplay,2000);
        }
      },
      successDisplay() {
        // Show User Visually
        this.showSpinner = false;
        this.hideInput = true;
        this.successClass = true;

        //call Emit
        setTimeout(this.successEmit, 1000);
      },
      successEmit() {
        // emit to parent so it can eliminate row
        this.$emit('statusChanged', this.date); 
      }

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

    i {
      color: $white;
      margin: 0 5px;
      font-size: 178%;
      position: relative;

      /*&:before {
        display: block;
        position: relative;
        top: 50%;
        transform: translate3d(0, -50%, 0);
      }*/
    }

    .no-spin {
      display: none;
    }

    input {
      margin-top: 0;
      width: 80%;
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

    

    .--success-active {
      display: inline-block;
      /*padding-top: 7px;*/
      text-align: center;
      width: 80%;
      color: $white;
      font-weight: $heading-weight;
      font-size: 1vw;
    }
  }

  /* Important is necessary for override */
  /* stylelint-disable */  
  .activeInput {
    background: $zucora-green !important;
  }
  /* stylelint-enable */
</style>


