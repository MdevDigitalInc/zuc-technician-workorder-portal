<template>
  <div :class="['mdev-serviced-plugin flex flex-hor-between flex-vert-center',{activeInput : successClass} ]">
    <i v-if="!showSpinner" class="fa fa-fw fa-calendar"></i>
    <i v-if="showSpinner" class="fa fa-circle-o-notch fa-spin fa-fw"></i>
    
    <datepicker v-if="!hideInput"
      placeholder="Select Date"
      input-class="mdev-date-picker-input"
      wrapper-class="mdev-date-picker"
      @selected="statusChange"
      :format="format"
      :value="postData.servicedDate"> </datepicker>
    
    <span class="--success-active" v-if="hideInput"> SERVICED </span>
  </div>
</template>

<script>
  // Date Picker
  import Datepicker from 'vuejs-datepicker';
  
  export default {
    name: 'ServicedComponent',

    props: ['servicedDate', 'orderId'],

    data: function() {
      return {
        format: 'dd/MM/yyyy',
        showSpinner: false,
        hideInput: false,
        successClass: false,

        postData: {
          workOrderId   : this.orderId,
          serviced      : false,
          servicedDate  : new Date(),
          unreachable   : false
        }
      };
    },

    methods: {
      console(thing) {
        console.log(thing);
        console.log(this.postData.servicedDate);
      },
      // Update Serviced Status
      statusChange() {
        // Start Spinner
        this.showSpinner = true;
        // Set Object
        this.postData.serviced = true;
        this.postData.unreachable = false;
        //Submit & Emit Event
        this.$http.put("/workorders/status", this.postData)
          .then( function(res) {
            this.successDisplay();
        });
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
        this.$emit('statusChanged', this.postData.servicedDate); 
        alertify.success("Order marked as SERVICED and removed from active work orders.");
      }
    },
    components: {
      'datepicker':Datepicker
    }
  };  
</script>

<style lang="scss">
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
    overflow: visible;
    padding: 3px;
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

      @media screen and ('$tablet-only-comp') {
        font-size: 11px;
        margin: 0 2px;
      }
    }

    .no-spin {
      display: none;
    }

    input {
      margin-top: 0;
      width: 100%;
      font-size: 3.4vw;
      padding: 8px;
      position: relative;
      background: $white;
      border: none;

      @media screen and ('$tablet-only-comp') {
        font-size: .8vw;
        padding: 3px;
      }

      @media screen and ('$laptop-only-comp') {
        font-size: 1vw;
        padding: 3px;
      }

      @media screen and ('$desktop-only-comp') {
        font-size: .8vw;
        padding: 7px;
      }

      @media screen and ('$xl-up-comp') {
        font-size: 16px;
        padding: 10px;
      }

      &:hover,
      &:focus,
      &:active {
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


