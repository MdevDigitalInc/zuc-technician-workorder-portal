<template>
  <!-- Main Container -->
  <section class="mdev-main-content-frame" aria-labelledby="billing-title">
    <!-- Header [FLEX] -->
    <div class="mdev-frame-header flex flex-hor-start flex-hor-between" aria-labelledby="billingTitle">
      <span id="billing-title">{{ $t("billing.title") }}</span>
      <router-link to="/dashboard/list" title="Back">{{ $t("general.navBack") }}</router-link>
    </div>
    <div class="mdev-billing-header" aria-labelledby="billing-summary">
        <div class="mdev-provider">
          <h3 id="billing-summary">{{ $t("billing.summary") }}</h3>
          <span class="mdev-label">{{ $t("billing.provider") }}</span>
          <span class="mdev-information">{{ billingOrder.serviceProvider }}</span>
          <img :src="loadImage(mainBrand)" alt="Zucora Inc. Logo">
        </div>
        <div class="mdev-billing-period">
          <span class="mdev-label">{{ $t("billing.period") }}</span>
          <span class="mdev-information">{{ billingOrder.periodStart }} - {{ billingOrder.periodEnd  }}</span>
        </div>
    </div>
    <div class="mdev-light-table" aria-labelledby="billing-table">
      <h3 id="billing-table">{{ $t("billing.orders") }}</h3>
        <div class="mdev-light-table-head flex flex-hor-start flex-hor-between">
          <span id="head-1">{{ $t("billing.table.orderId") }}</span>
          <span id="head-2">{{ $t("billing.table.custName") }}</span>
          <span id="head-3">{{ $t("billing.table.dateServ") }}</span>
          <span id="head-4">{{ $t("billing.table.orderVal") }}</span>
          <span id="head-5">{{ $t("billing.table.appVal") }}</span>
        </div>

        <div
          v-for= "order in billingOrder.servicedOrders"
          class="mdev-light-table-row flex flex-hor-start flex-hor-between">
          <span aria-labelled-by="head-1"> {{ order.orderId  }}</span>
          <span aria-labelled-by="head-2"> {{ order.customerName  }}</span>
          <span aria-labelled-by="head-3"> {{ order.dateServiced  }}</span>
          <span aria-labelled-by="head-4"> {{ order.orderValue  }}</span>
          <span aria-labelled-by="head-5"> {{ order.applicationValue }}</span>
        </div>
    </div>
    <!-- Print -->
    <button class="mdev-base-btn" aria-label="Print" title="Print"> {{ $t("general.print") }} </button>
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
        periodStart: "3672618712631",
        periodEnd: "7782987129387213",
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

<style lang="scss">

</style>
