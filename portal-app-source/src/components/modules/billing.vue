<template>
  <!-- Main Container -->
  <section class="mdev-main-content-frame" aria-labelledby="billing-title">
    <!-- Header [FLEX] -->
    <div class="mdev-frame-header flex flex-hor-start flex-hor-between" aria-labelledby="billingTitle">
      <span id="billing-title">{{ $t("billing.title") }}</span>
      <router-link to="/dashboard/list" title="Back" class="flex flex-vert-center">
        <i class="fa fa-fw fa-chevron-left"></i>
        <!-- Temporary
        <i class="mdev-icon --size-s --back-icon"></i> -->
        {{ $t("general.navBack") }}
      </router-link>
    </div>
    <div class="mdev-billing-wrap"> 
      <div class="mdev-billing-header" aria-labelledby="billing-summary">
          <div class="mdev-provider">
            <h3 id="billing-summary">{{ $t("billing.summary") }}</h3>
            <div class="flex flex-hor-between flex-vert-start">
              <div class="--provider-modifier">
                <span class="mdev-label">{{ $t("billing.provider") }}</span>
                <span class="mdev-information --emphasis-modifier">{{ billingOrder.serviceProvider }}</span>
              </div>
              <img class="u-hidden-phone" :src="loadImage(mainBrand)" alt="Zucora Inc. Logo">
            </div>
          </div>
          <div class="mdev-billing-period">
            <span class="mdev-label">{{ $t("billing.period") }}</span>
            <span class="mdev-information --emphasis-modifier">
              {{ (billingOrder.periodStart * 1000) | moment("MM/DD/YYYY") }} 
              - 
              {{ (billingOrder.periodEnd * 1000) | moment("MM/DD/YYYY") }}</span>
          </div>
      </div>
      <div class="mdev-light-table" aria-labelledby="billing-table">
        <h3 id="billing-table">{{ $t("billing.orders") }}</h3>
          <div class="mdev-light-table-head flex flex-hor-start flex-hor-between">
            <span class="mdev-light-cell" id="head-1">{{ $t("billing.table.orderId") }}</span>
            <span class="u-hidden-phone mdev-light-cell" id="head-2">{{ $t("billing.table.custName") }}</span>
            <span class="mdev-light-cell" id="head-3">{{ $t("billing.table.dateServ") }}</span>
            <span class="mdev-light-cell" id="head-4">{{ $t("billing.table.orderVal") }}</span>
            <span class="mdev-light-cell" id="head-5">{{ $t("billing.table.appVal") }}</span>
          </div>

          <div
            v-for= "order in billingOrder.servicedOrders"
            class="mdev-light-table-row flex flex-hor-start flex-hor-between">
            <span class="mdev-light-cell" aria-labelled-by="head-1"> {{ order.orderId  }}</span>
            <span class="u-hidden-phone mdev-light-cell" aria-labelled-by="head-2"> {{ order.customerName  }}</span>
            <span class="mdev-light-cell" aria-labelled-by="head-3"> {{ order.dateServiced  }}</span>
            <span class="mdev-light-cell" aria-labelled-by="head-4"> {{ order.orderValue  }}</span>
            <span class="mdev-light-cell" aria-labelled-by="head-5"> {{ order.applicationValue }}</span>
          </div>
      </div>
      <!-- Print -->
      <div class="flex flex-hor-end u-hidden-tablet u-hidden-phone">
        <button 
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

  data: function() {
    return{
      mainBrand: 'zucora-white.svg',
      billingOrder: {
        serviceProvider: "Edmonton MagiSeal Service - Leather",
        periodStart: 1488233506,
        periodEnd: 1488406306,
        servicedOrders: [
          {
            orderId: "CA631827361283",
            customerName: "John Santos Smith",
            dateServiced: "12312398712391",
            orderValue: "$10,199.99",
            applicationValue: "399.99"
          },          
          {
            orderId: "CA631827361283",
            customerName: "John Santos Smith",
            dateServiced: "12312398712391",
            orderValue: "$10,199.99",
            applicationValue: "399.99"
          },
          {
            orderId: "CA631827361283",
            customerName: "John Santos Smith",
            dateServiced: "12312398712391",
            orderValue: "$10,199.99",
            applicationValue: "399.99"
          },
        ]
      }
    };
  },

  methods: {
    loadImage(path){
      return require('../../assets/images/' + path);
    },
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
  }

  .mdev-provider {
    img {
      width: 15%;
    }
  }

  .mdev-light-cell {
    width: 20%;
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
