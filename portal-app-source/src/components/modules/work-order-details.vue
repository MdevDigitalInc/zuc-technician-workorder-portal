<template>
  <!-- Main Container -->
  <section v-if="orderDetails" class="mdev-main-content-frame" aria-labelledby="details-title">
    <!-- Header [FLEX] -->
    <div class="mdev-frame-header flex flex-hor-start flex-hor-between">
      <span id="details-title">{{ $t("orderDetails.title") }} {{ orderId }}</span>
      <router-link class="flex flex-vert-center" to="/dashboard/list" title="Back">
        <i class="fa fa-fw fa-chevron-left"></i>
        {{ $t("general.navBack") }}</router-link>
    </div>

    <!-- Customer / Appointment [ Top Section ] -->
    <div class="mdev-order-header flex flex-start flex-vert-start">
      <!-- Customer Info -->
      <div class="mdev-half-column" aria-labelledby="customer-details">
        <h3 id="customer-details">{{ $t("orderDetails.custInfo") }}</h3>
        <span class="mdev-customer-name">
          {{ orderDetails.customer.first_name + " " +orderDetails.customer.last_name }}
        </span>
        
        
        <!-- Address -->
        <div class="mdev-info-field">
          <span class="mdev-info-label" id="address">{{ $t("general.address") }}</span>
          <span class="mdev-info-content" aria-labelledby="address">
            {{ orderDetails.customer.street }}
          </span>
        </div>
        
        <!-- Phone -->
        <div class="mdev-info-field">
          <span class="mdev-info-label" id="phone">{{ $t("general.phone") }}</span>
          <span class="mdev-info-content" aria-labelledby="phone">
            {{ formatPhone(orderDetails.customer.phone_number) }}
          </span>
        </div>
        
        <!-- Customer ID: -->
        <div class="mdev-info-field">
          <span class="mdev-info-label" id="custid">{{ $t("general.custId") }}</span>
          <span class="mdev-info-content" aria-labelledby="custid">
            {{ orderDetails.customer.id }}
          </span>
        </div>
        
        <!-- Date Added -->
        <div class="mdev-info-field">
          <span class="mdev-info-label" id="dateadd">{{ $t("general.dateAdd") }}</span>
          <span class="mdev-info-content" aria-labelledby="dateadd">
            {{ orderDetails.work_order_details.created_at | moment("MM/DD/YYYY") }} 
          </span>
        </div>
        <!-- Sort COde -->
        <div class="mdev-info-field" v-if="orderDetails.work_order_details.sort_code">
          <span class="mdev-info-label" id="dateadd">{{ $t("general.sortCode") }}</span>
          <span class="mdev-info-content" aria-labelledby="dateadd">
            {{ orderDetails.work_order_details.sort_code }} 
          </span>
        </div>
      </div>
    
      <!-- Appointment Info -->
      <div class="mdev-half-column flex flex-hor-end --bkg-modifier" aria-labelledby="appdetails-title">
        <div class="mdev-appointment-plugin">
            <h3 id="appdetails-title">{{ $t("orderDetails.apptStatus") }}</h3>
                  <!-- Actions -->
        <div class="mdev-info-actions flex flex-hor-between flex-vert-stretch" aria-label="Actions and Status">
          <!-- Serviced Component -->
          <serviced-component
            v-if="orderDetails.plans.length > 0"
            :servicedDate="orderDetails.plans[0].date_of_delivery"
            :orderId="orderId"></serviced-component> 
          <!-- Unreachable Component -->
          <unreachable-component 
            v-if="orderDetails.plans.length > 0"
            :orderId="orderId" 
            :unreachable="orderDetails.plans[0].wod_status"></unreachable-component>
        </div>
      </div>
      </div>
    </div>

    <!-- Order Information -->
    <div class="mdev-order-info" aria-labelledby="orderinfo-title">
        <div class="mdev-order-wrapper">
          <div class="mdev-half-column">
            <h3 id="orderinfo-title">{{ $t("orderDetails.orderInfo") }}</h3>
            <!-- Delivery -->
            <div class="mdev-info-field">
              <span class="mdev-info-label" id="delivery">{{ $t("general.delivery") }}</span>
              <span class="mdev-info-content" aria-labelledby="delivery"> 
                {{ (orderDetails.work_order_details.date_of_delivery) | moment("MM/DD/YYYY")  }} 
              </span>
            </div>

            <!-- Order Id -->
            <div class="mdev-info-field">
              <span class="mdev-info-label" id="ordernum">{{ $t("general.orderNum") }}</span>
              <span class="mdev-info-content" aria-labelledby="ordernum"> 
                {{ orderDetails.work_order_details.id  }}
              </span>
            </div>

            <!-- Store -->
            <div class="mdev-info-field">
              <span class="mdev-info-label" id="store">{{ $t("general.store") }}</span>
              <span class="mdev-info-content" aria-labelledby="store"> 
                {{ orderDetails.work_order_details.retailer  }}
              </span>
            </div>
          </div>
        <!-- Plans -->
        <h3 class="--spacer" v-if="orderDetails.plans.length > 0"> {{ $t("orderDetails.plans") }} </h3>
        <div class="mdev-light-table" v-if="orderDetails.plans.length > 0">
          <div class="mdev-light-table-head flex flex-hor-start flex-hor-between">
            <span class="mdev-light-cell" id="head-1">{{ $t("orderDetails.table.quantity") }}</span>
            <span  class="mdev-light-cell" id="head-2">{{ $t("orderDetails.table.sku") }}</span>
            <span  class="mdev-light-cell --large-cell" id="head-3">{{ $t("orderDetails.table.description") }}</span>
          </div>
          <div class="mdev-light-table-row flex flex-hor-start" v-if="orderDetails.plans.length === 0"> 
            <div class="mdev-light-cell">
             {{ $t("orderDetails.noPlans") }} 
            </div>
          </div>

          <div
            v-for= "plan in orderDetails.plans"
            class="mdev-light-table-row flex flex-hor-start flex-hor-between">
            <span  class="mdev-light-cell" aria-labelledby="head-1"> 
              {{ plan.quantity  }}
            </span>
            <span  class="mdev-light-cell" aria-labelledby="head-2"> 
              {{ plan.sku  }} 
            </span>
            <span  class="mdev-light-cell --large-cell --limit-text" aria-labelledby="head-3"> 
              {{ plan.name  }}
            </span>
          </div> 
        </div>
        <!-- Items -->
        <h3 class="--spacer" v-if="orderDetails.items.length > 0"> {{ $t("orderDetails.items") }} </h3>
        <div class="mdev-light-table" v-if="orderDetails.items.length > 0">
          <div class="mdev-light-table-head flex flex-hor-start flex-hor-between">
            <span class="mdev-light-cell" id="head-1">{{ $t("orderDetails.table.quantity") }}</span>
            <span  class="mdev-light-cell" id="head-2">{{ $t("orderDetails.table.sku") }}</span>
            <span  class="mdev-light-cell --large-cell" id="head-3">{{ $t("orderDetails.table.description") }}</span>
          </div>

          <div
            v-for= "item in orderDetails.items"
            class="mdev-light-table-row flex flex-hor-start flex-hor-between">
            <span  class="mdev-light-cell" aria-labelledby="head-1"> 
              {{ item.quantity  }}
            </span>
            <span  class="mdev-light-cell" aria-labelledby="head-2"> 
              {{ item.sku  }} 
            </span>
            <span  class="mdev-light-cell --large-cell --limit-text" aria-labelledby="head-3"> 
              {{ item.name  }}
            </span>
          </div> 
        </div>

        <!-- Order Notes -->
        <div v-if="orderDetails.work_order_details.description" class="mdev-order-notes" aria-labelledby="notes">
          <h3 id="notes">{{ $t("orderDetails.notes") }}</h3>
          <p>
            {{ orderDetails.work_order_details.description  }}
          </p>
        </div>

        <!-- Print -->
        <div class="flex flex-hor-end u-hidden-tablet u-hidden-phone --spacer">
          <button class="mdev-base-btn mdev-print-btn"
            aria-label="Print"
            @click="printPage"> 
              {{ $t("general.print") }}
            </button>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
  
  //Local Component Registration
  import servicedComponent    from '../shared/serviced.vue';
  import unreachableComponent from '../shared/unreachable.vue';

  export default {
    name: "workOrderDetail",
    
    // Instance Data Storage
    data: function() {
      return{
        orderId       : this.$route.params.orderId,
        orderDetails  : null,
        loading       : true
      };
    },
    
    // Call fetchData() and retrieve Data from API
    created: function(){
       this.fetchData();
    },

    // Watch for Route Changes and fetchData() 
    watch: {
      '$route'  : 'fetchData',
      'loading' : 'loadAnimDispatcher'
    },

    methods: {

      // Fetch API Data
      fetchData() {
        // Set loading to True
        this.loading = true;
        // Call API
        this.$http.get("/workorders/" + this.orderId)
          .then(function(res){
          this.orderDetails = res.body;
          // Set loading to False
          this.loading = false;
          });
      },

      // Format Phone Numbers
      formatPhone(phone) {
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      },

      // Print Page Command
      printPage() {
        window.print();
      },

      //Dispatch Loading Animation Update to parent
      loadAnimDispatcher() {
        this.$emit('loadingAnim', this.loading);
      }
    },
 
    components: {
      'serviced-component'    : servicedComponent,
      'unreachable-component' : unreachableComponent
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
 
  .mdev-order-header,
  .mdev-order-wrapper {
    padding: 0;

    @media screen and ('$tablet-up-comp') {
      padding: 0 $large-spacing;
    }
  }

  .mdev-order-header {
    flex-wrap: wrap;

    @media screen and ('$tablet-up-comp') {
      flex-wrap: nowrap;
    }
  }

  .mdev-frame-header {
    margin-bottom: $large-spacing;
  }
  .mdev-order-info,
  .mdev-order-header {
    margin-bottom: $large-spacing;
  }

  .mdev-customer-name {
    color: $active-blue;
    font-size: 5.6vw;
    display: block;

    @media screen and ('$tablet-only-comp') {
      font-size: 2.8vw;
    }

    @media screen and ('$laptop-up-comp') {
      font-size: 1.6vw;
    }
  }
  
  .mdev-info-field {
    line-height: 7.3vw;
    margin: 8px 0;
    display: flex;

    @media screen and ('$tablet-only-comp') {
      line-height: 2.5vw;
    }

    @media screen and ('$laptop-up-comp') {
      line-height: 1.3vw;
      display: block;
    }
  }

  h3 {
    margin-bottom: 20px;
  }

  .mdev-info-label {
    display: block;
    width: 30%;

    @media screen and ('$tablet-up-comp') {
      display: inline-block;
    }
  }

  .mdev-info-content {

    @media screen and ('$phone-only-comp') {
      width: 65%;
      display: block;
    }
  }

  .mdev-serviced-plugin,
  .mdev-status-btn {
    margin: 0;
    width: 48%;
    input {
      margin: 0;
    }
  }

  .mdev-info-actions {
    margin-top: $medium-spacing;
  }

  .mdev-appointment-plugin {
    width: 100%;
    padding: 0;
    border-radius: $standard-radius;

    @media screen and ('$tablet-up-comp') {
      border: 2px solid $zucora-blue;
    }

    @media screen and ('$tablet-only-comp') {
      width: 80%;
      padding: $medium-spacing;
    }

    @media screen and ('$laptop-up-comp') {
      padding: 20px;
      width: 60%;
    }
  }

  .mdev-light-cell {
    width: 20%;
    flex-grow: 1;
    
    @media screen and ('$laptop-up-comp') {
      flex-grow: 0;
    }
  }

  .--large-cell {
    flex-grow: 2;

    @media screen and ('$laptop-up-comp') {
      flex-grow: 4;
    }
  }

  .mdev-order-notes {
    padding: 0 $small-spacing;
    margin: $large-spacing 0;

    @media screen and ('$tablet-up-comp') {
      padding: 0;
    }
  }

  .--spacer {
    margin-top: $large-spacing;
  }

  @media screen and ('$phone-only-comp') {
    .--bkg-modifier {
      background: $bkg-light-grey;
    }

    .mdev-half-column {
      padding: $small-spacing;
    }

    .mdev-status-btn {
      font-size: 4vw;
      height: auto;
    }
  }
</style>
