<template>
  <!-- Main Container -->
  <section class="mdev-main-content-frame" aria-labelledby="details-title">
    <!-- Header [FLEX] -->
    <div class="mdev-frame-header flex flex-hor-start flex-hor-between">
      <span id="details-title">{{ $t("orderDetails.title") }} {{ orderId }}</span>
      <router-link class="flex flex-vert-center" to="/dashboard/list" title="Back">
        <i class="fa fa-fw fa-chevron-left"></i>
        <!-- Temporary
        <i class="mdev-icon --size-s --back-icon"></i> -->
        {{ $t("general.navBack") }}</router-link>
    </div>

    <!-- Customer / Appointment [ Top Section ] -->
    <div class="mdev-order-header flex flex-start flex-vert-start">
      <!-- Customer Info -->
      <div class="mdev-half-column" aria-labelledby="customer-details">
        <h3 id="customer-details">{{ $t("orderDetails.custInfo") }}</h3>
        <span class="mdev-customer-name">
          {{ orderDetails.customer.custName }}
        </span>
        
        
        <!-- Address -->
        <div class="mdev-info-field">
          <span class="mdev-info-label" id="address">{{ $t("general.address") }}</span>
          <span class="mdev-info-content" aria-labelledby="address">
            {{ orderDetails.customer.address  }}
          </span>
        </div>
        
        <!-- Phone -->
        <div class="mdev-info-field">
          <span class="mdev-info-label" id="phone">{{ $t("general.phone") }}</span>
          <span class="mdev-info-content" aria-labelledby="phone">
            {{ orderDetails.customer.phone  }}
          </span>
        </div>
        
        <!-- Business Phone -->
        <div class="mdev-info-field">
          <span class="mdev-info-label" id="business">{{ $t("general.business") }}</span>
          <span class="mdev-info-content" aria-labelledby="business">
            {{ orderDetails.customer.bizPhone  }}
          </span>
        </div>
        
        <!-- Customer ID: -->
        <div class="mdev-info-field">
          <span class="mdev-info-label" id="custid">{{ $t("general.custId") }}</span>
          <span class="mdev-info-content" aria-labelledby="custid">
            {{ orderDetails.customer.customerId  }}
          </span>
        </div>
        
        <!-- Date Added -->
        <div class="mdev-info-field">
          <span class="mdev-info-label" id="dateadd">{{ $t("general.dateAdd") }}</span>
          <span class="mdev-info-content" aria-labelledby="dateadd">
            {{ orderDetails.customer.dateAdded  }}
          </span>
        </div>
      </div>

      <!-- Appointment Info -->
      <div class="mdev-half-column flex flex-hor-end --bkg-modifier" aria-labelledby="appdetails-title">
        <div class="mdev-appointment-plugin">
            <h3 id="appdetails-title">{{ $t("orderDetails.apptDetails") }}</h3>
            <!-- Date -->
          <div class="mdev-info-field flex flex-vert-center --emphasis-modifier">
            <span id="date" class="u-hidden" aria-hidden="true">{{ $t("general.date") }}</span>
            <!-- Temporary
            <i class="mdev-icon --size-l --date-icon"></i> -->
            <i class="fa fa-fw fa-clock-o"></i>
            <span aria-labelledby="date"> {{ orderDetails.appointment.time }}</span>
          </div>
          <!-- Time -->
          <div class="mdev-info-field flex flex-vert-center --emphasis-modifier">
            <span id="time" class="u-hidden" aria-hidden="true">{{$t("general.time") }}</span>
            <!-- Temporary
            <i class="mdev-icon --size-l --time-icon"></i> -->
            <i class="fa fa-fw fa-calendar"></i>
            <span aria-labelledby="time"> {{ orderDetails.appointment.time }}</span>
          </div>
        <!-- Actions -->
        <div class="mdev-info-actions flex flex-hor-between flex-vert-stretch" aria-label="Actions and Status">
          <!-- Serviced Component -->
          <serviced-component :servicedDate="orderDetails.serviceDate" :orderId="orderId"></serviced-component> 
          <!-- Unreachable Component -->
          <unreachable-component :orderId="orderId" :unreachable="orderDetails.unreachable"></unreachable-component>
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
              <span class="mdev-info-content" aria-labelledby="delivery"> {{ orderDetails.order.deliveryDate  }}</span>
            </div>

            <!-- Order Id -->
            <div class="mdev-info-field">
              <span class="mdev-info-label" id="ordernum">{{ $t("general.orderNum") }}</span>
              <span class="mdev-info-content" aria-labelledby="ordernum"> {{ orderDetails.order.orderId  }}</span>
            </div>

            <!-- Store -->
            <div class="mdev-info-field">
              <span class="mdev-info-label" id="store">{{ $t("general.store") }}</span>
              <span class="mdev-info-content" aria-labelledby="store"> {{ orderDetails.order.store  }} </span>
            </div>
          </div>
        <!-- SKU's -->
        <div class="mdev-light-table">
          <div class="mdev-light-table-head flex flex-hor-start flex-hor-between">
            <span class="mdev-light-cell" id="head-1">{{ $t("orderDetails.table.quantity") }}</span>
            <span  class="mdev-light-cell" id="head-2">{{ $t("orderDetails.table.sku") }}</span>
            <span  class="mdev-light-cell --large-cell" id="head-3">{{ $t("orderDetails.table.description") }}</span>
          </div>

          <div
            v-for= "sku in orderDetails.order.skus"
            class="mdev-light-table-row flex flex-hor-start flex-hor-between">
            <span  class="mdev-light-cell" aria-labelledby="head-1"> {{ sku.quantity  }}</span>
            <span  class="mdev-light-cell" aria-labelledby="head-2"> {{ sku.sku  }}</span>
            <span  class="mdev-light-cell --large-cell" aria-labelledby="head-3"> {{ sku.description  }}</span>
          </div>
        </div>
        <!-- Order Notes -->
        <div class="mdev-order-notes" aria-labelledby="notes">
          <h3 id="notes">{{ $t("orderDetails.notes") }}</h3>
          <p>
            {{ orderDetails.notes  }}
          </p>
        </div>

        <!-- Print -->
        <div class="flex flex-hor-end u-hidden-tablet u-hidden-phone">
          <button class="mdev-base-btn mdev-print-btn" aria-label="Print"> {{ $t("general.print") }} </button>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
  
  //Local Component Registration
  import servicedComponent from '../shared/serviced.vue';
  import unreachableComponent from '../shared/unreachable.vue';

  export default {
    name: "workOrderDetail",

    data: function() {
      return{
        orderId: this.$route.params.orderId,
        orderDetails: {
          customer: {
            custName: "John Santos Smith",
            address: "201-111 something something street",
            city: "Victoria",
            province: "BC",
            postalCode: "N5B1B1",
            phone: "1-519-555-5555",
            bizPhone: "1-888-555-5555",
            customerId: "1377981269882371",
            dateAdded: "1489164300"
          },
          appointment: {
            time: "1490201100" 
          },
          order: {
            deliveryDate: "1489164300",
            orderId: "87372918623",
            store: "Leons - Victoria",

            skus: [
              {
                sku: "41239879798211",
                quantity: "4",
                value: "89.99",
                description: "This is a sku description"
              },
              {
                sku: "41239879798211",
                quantity: "4",
                value: "89.99",
                description: "This is a sku description"
              },
              {
                sku: "41239879798211",
                quantity: "4",
                value: "89.99",
                description: "This is a sku description"
              }
            ]
          },
          notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper vel nisl non interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique diam eu efficitur facilisis. In ac metus sit amet quam semper lobortis. Etiam nec orci ac mi dictum varius. Nulla diam mi, accumsan at risus et, iaculis laoreet ipsum. Phasellus dui mauris, dapibus id vestibulum et, venenatis in erat. Praesent eu nulla sit amet sem volutpat lobortis at id ex. Nullam et dolor aliquam, pellentesque nisl quis, porttitor enim. In sed tortor metus. Donec consequat, ex quis venenatis rutrum, mauris lacus imperdiet erat, et blandit urna leo sit amet nisi. Pellentesque tempus eros eget nisl mollis, et maximus libero tincidunt.",
          unreachable: false,
          serviceDate: ""
        }
      };
    },

    components: {
      'serviced-component'  : servicedComponent,
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
 
  .mdev-order-header, .mdev-order-wrapper {
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
  .mdev-order-info, .mdev-order-header {
    margin-bottom: $large-spacing;
  }

  .mdev-customer-name {
    color: $active-blue;
    font-size: 5.6vw;
    margin: 0 0 20px 0;
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

  .mdev-serviced-plugin, .mdev-status-btn {
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
    background: $bkg-light-grey;
    border-radius: $standard-radius;

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
