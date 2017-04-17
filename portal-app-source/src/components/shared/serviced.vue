<template>
  <div :class="['mdev-serviced-plugin flex flex-hor-between flex-vert-center',{activeInput : successClass} ]">
    <i v-if="!showSpinner" class="fa fa-fw fa-calendar"></i>
    <i v-if="showSpinner" class="fa fa-circle-o-notch fa-spin fa-fw"></i>
    
    <input v-if="!hideInput"
      @keyup.enter="statusChange"
      type="text" placeholder="DD/MM/YYYY"
      v-model="postData.servicedDate">
    
    <span class="--success-active" v-if="hideInput"> SERVICED </span>
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
        successClass: false,

        postData: {
          workOrderId   : this.orderId,
          serviced      : false,
          servicedDate  : '',
          unreachable   : false
        }
      };
    },

    created: function() {
      // Set Today's date as the default value for all of the 
      // "Serviced" toggle instances

      // Get Today's Date
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      
      // Format it as DD/MM/YYYY
      var today = dd + '/' + mm + '/' + yyyy;

      // Assign Today's Date as Default
      this.postData.servicedDate = today;
    },

    methods: {
      // Update Serviced Status
      statusChange() {
        // Validate Date
        if ( this.$validate.validateDate(this.postData.servicedDate, this.$t("validation.errors.date"))) {
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
         }
      },
      successDisplay() {
        // Show User Visually
        this.showSpinner = false;
        this.hideInput = true;
        this.successClass = true;

        //call Emit
        setTimeout(this.successEmit, 600);
      },
      successEmit() {
        // emit to parent so it can eliminate row
        this.$emit('statusChanged', this.postData.servicedDate); 
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
      padding: 8px;
      position: relative;
      background: $white;
      border: none;

      @media screen and ('$tablet-only-comp') {
        font-size: .8vw;
        padding: 3px;
        width: 88%;
      }

      @media screen and ('$laptop-only-comp') {
        font-size: 1vw;
        padding: 3px;
      }

      @media screen and ('$desktop-only-comp') {
        font-size: 1vw;
        padding: 3px;
      }

      @media screen and ('$xl-up-comp') {
        font-size: 16px;
        padding: 10px;
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


