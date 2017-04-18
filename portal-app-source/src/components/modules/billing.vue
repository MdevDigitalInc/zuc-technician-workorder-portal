<template>
  <!-- Main Container -->
  <section class="mdev-main-content-frame" aria-labelledby="billing-title">
    
    <!-- Header [FLEX] -->
    <div class="mdev-frame-header flex flex-hor-start flex-hor-between" aria-labelledby="billingTitle">
      <span id="billing-title"> {{ $t("billing.title") }} </span>
      <router-link to="/dashboard/list" title="Back" class="flex flex-vert-center">
        <i class="fa fa-fw fa-chevron-left"></i>
        {{ $t("general.navBack") }}
      </router-link>
    </div>
    
    <!-- Main Wrapper Content -->
    <div class="mdev-billing-wrap"> 
      
      <!-- Billing Header -->
      <div class="mdev-billing-header" aria-labelledby="billing-summary">
          <div class="mdev-provider">
            <h3 id="billing-summary">{{ $t("billing.summary") }}</h3>
            <div class="flex flex-hor-between flex-vert-start">
              <div class="--provider-modifier">
                <span class="mdev-label"> {{ $t("billing.provider") }} </span>
                <span class="mdev-information --emphasis-modifier">
                  {{ billing.billingWorkOrder.serviceProvider }}
                </span>
              </div>
              <img class="u-hidden-phone" :src="loadImage(mainBrand)" alt="Zucora Inc. Logo">
            </div>
          </div>
          <div class="mdev-billing-period">
            <span class="mdev-label">{{ $t("billing.period") }}</span>
            <span class="mdev-information --emphasis-modifier">
            
            <!-- Previous Billing -->
            <i v-if="billingIndex <= periods.length"
              @click="billingPeriod(1)"
              class="fa fa-fw fa-chevron-left mdev-billing-control"></i>
              
              {{ (billing.billingWorkOrder.periodStart ) | moment("MM/DD/YYYY") }} 
              - 
              {{ (billing.billingWorkOrder.periodEnd ) | moment("MM/DD/YYYY") }}
            
            <!-- Next Billing -->
            <i v-if="billingIndex > 0"
              @click="billingPeriod(-1)"
              class="fa fa-fw fa-chevron-right mdev-billing-control"></i>
            </span>
          </div>
      </div>
      
      <!-- Orders Table -->
      <div class="mdev-light-table" aria-labelledby="billing-table">
        <h3 id="billing-table">{{ $t("billing.orders") }}</h3>
          <div class="mdev-light-table-head flex flex-hor-start flex-hor-between">
            <span class="mdev-light-cell" id="head-1"> 
              {{ $t("billing.table.orderId") }} 
            </span>
            <span class="u-hidden-phone mdev-light-cell" id="head-2"> 
              {{ $t("billing.table.custName") }} 
            </span>
            <span class="mdev-light-cell" id="head-3"> 
              {{ $t("billing.table.dateServ") }} 
            </span>
            <span class="mdev-light-cell u-hidden-phone" id="head-4"> 
              {{ $t("billing.table.authMileage") }}
            </span>
            <span class="mdev-light-cell u-hidden-phone" id="head-5">
              {{ $t("billing.table.authService") }}
            </span>
            <span class="mdev-light-cell" id="head-6">
              {{ $t("billing.table.workOrderVal") }}
            </span>
          </div>

          <div
            v-for="order in billing.billingWorkOrder.workOrders"
            class="mdev-light-table-row flex flex-hor-start flex-hor-between">
            <span class="mdev-light-cell" aria-labelled-by="head-1">
              {{ order.workOrderId  }}
            </span>
            <span class="u-hidden-phone mdev-light-cell" aria-labelled-by="head-2">
              {{ order.customerName  }}
            </span>
            <span class="mdev-light-cell" aria-labelled-by="head-3">
              {{ order.dateServiced  }}
            </span>
            <span class="mdev-light-cell u-hidden-phone" aria-labelled-by="head-4">
              {{ order.authorizedMileage  }}
            </span>
            <span class="mdev-light-cell u-hidden-phone" aria-labelled-by="head-5">
              {{ order.authorizedService }}
            </span>
            <span class="mdev-light-cell" aria-labelled-by="head-6">
              {{ order.workOrderTotal }}
            </span>
          </div>

          <!-- TOTAL -->
          <div class="flex flex-hor-end">
            <div class="mdev-total-value flex flex-hor-center flex-vert-center">
              <span class="h3"> {{ $t("billing.total") }} </span> 
              <span> {{ billing.billingWorkOrder.total }} </span>
            </div>
          </div>
      </div>
      
      <!-- Print -->
      <div class="flex flex-hor-end u-hidden-tablet u-hidden-phone">
        <button 
          @click="printPage"
          class="mdev-base-btn mdev-print-btn"
          aria-label="Print" 
          title="Print"> 
          
          {{ $t("general.print") }} 
        </button>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "billing",

    // Instance Data Storage
    data: function() {
      return{
        mainBrand     : 'zucora-white.svg',
        billingIndex  : 0,
        billing       : null,
        periods       : null
      };
    },
    
    // Call fetchData() and retrieve info from API
    created: function() {
       this.fetchData();
    },

    // Watch for Route Changes and call fetchData() 
    watch: {
      '$route': 'fetchData'
    },

    methods: {
      // Image Loader For Webpack
      loadImage(path) {
        return require('../../assets/images/' + path);
      },
      
      // Fetch Data from API
      fetchData() {
        // Reset billingIndex to "0" since fetchData is only called on refreshes
        this.billingIndex = 0;
        // Call API with GET request
        this.$http.get('/billing')
          .then(function(res){
          this.billing = res.body;
          // Save out an array of available billing periods
          this.periods = this.billing.billingPeriods;
          });
      },
      
      // [ Change Billing Period ] -------------------------------------------------
      // This function is designed to take the array of available billing periods given by
      // the API and save it in memory.
      // It then loops through the array until it reaches the end, at which point it resets 
      // the array by calling the API to retrieve any updates.
      //
      // Note: The action for saving out the array is contained in the fetchData() method.

      billingPeriod(step) {
        // When the user hits the beginning of the array, go to the end of the array.
        if (step + this.billingIndex < 0) {
          this.billingIndex = this.periods.length;
        }
        // When the user hits the end of the array, fetch the very first record.
        else if (step + this.billingIndex > this.periods.length) {
          this.fetchData();
          return;
        }
        // If the user still hasn't hit an endpoint just go to the next item in the array.
        else {
          this.billingIndex += step;
        }
        // Retrieve specific Billing Period leaving this.periods array intact
        this.$http.post('/billing', this.periods[this.billingIndex])
          .then(function(res){
          this.billing = res.body;
        });

      },
      
      // Print Page Command
      printPage() {
        window.print();
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
 
 
  .mdev-frame-header,
  .mdev-provider,
  .mdev-light-table,
  .mdev-billing-header {
    margin-bottom: $large-spacing;
  }

  h3 {
    margin-bottom: $medium-spacing;
  }

  .mdev-billing-wrap {
    padding: $small-spacing;

    @media screen and ('$desktop-up-comp') {
      padding: 0 $large-spacing $large-spacing $large-spacing;
    }
  }

  .mdev-label {
    display: block;
    color: $active-grey;
    font-weight: $heading-weight;

    @media screen and ('$phone-only-comp') {
      margin-bottom: 10px;
    }
  }

  .mdev-provider {
    img {
      width: 15%;
    }
  }

  .mdev-light-cell {
    width: 20%;
  }

  .mdev-total-value {
    width: 100%;
    margin-top: $medium-spacing;
    padding: $large-spacing;
    border: 2px solid $zucora-blue;
    border-radius: 3px;

    @media screen and ('$tablet-up-comp') {
      width: 20%;
    }

    span {
      margin-left: $medium-spacing;
      font-size: 7vw;

      @media screen and ('$tablet-up-comp') {
        font-size: 1vw;
      }
    }

    .h3 {
      @media screen and('$phone-only-comp') {
        font-size: 7vw;
      }
    }
  }

  .mdev-billing-control {
    cursor: pointer;
    transition: all, .3s;

    &:hover,
    &:focus,
    &:active {
      color: $zucora-green;
    }
  }

  @media screen and ('$tablet-only-comp') {
    .mdev-light-table-head,
    .mdev-light-table-row {
      font-size: 1.6vw; 
    }
  }

  @media screen and ('$phone-only-comp') {
    .mdev-light-table-head {
      padding: 0 5px;
      font-size: 2.6vw;
    }

    .mdev-light-table-row {
      padding-left: 5px;
      padding-right: 5px;
      font-size: 2.6vw;
    }

    .mdev-light-cell {
      width: 25%;
    }
  }

</style>
