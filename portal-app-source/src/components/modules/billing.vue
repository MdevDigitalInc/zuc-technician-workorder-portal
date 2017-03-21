<template>
  <!-- Main Container -->
  <section class="mdev-main-content-frame">
    <!-- Header [FLEX] -->
    <div class="mdev-frame-header flex flex-hor-start flex-hor-between">
      <span>{{ $t("billing.title") }}</span>
      <router-link to="/dashboard/list">{{ $t("general.navBack") }}</router-link>
    </div>
    <div class="mdev-billing-header">
        <div class="mdev-provider">
          <h3>{{ $t("billing.summary") }}</h3>
          <span class="mdev-label">{{ $t("billing.provider") }}</span>
          <span class="mdev-information">{{ billingOrder.serviceProvider }}</span>
          <img :src="loadImage(mainBrand)" alt="Zucora Inc. Logo">
        </div>
        <div class="mdev-billing-period">
          <span class="mdev-label">{{ $t("billing.period") }}</span>
          <span class="mdev-information">{{ billingOrder.periodStart }} - {{ billingOrder.periodEnd  }}</span>
        </div>
    </div>
    <div class="mdev-light-table">
      <h3>{{ $t("billing.orders") }}</h3>
        <div class="mdev-light-table-head flex flex-hor-start flex-hor-between">
          <span>{{ $t("billing.table.orderId") }}</span>
          <span>{{ $t("billing.table.custName") }}</span>
          <span>{{ $t("billing.table.dateServ") }}</span>
          <span>{{ $t("billing.table.orderVal") }}</span>
          <span>{{ $t("billing.table.appVal") }}</span>
        </div>

        <div
          v-for= "order in billingOrder.servicedOrders"
          class="mdev-light-table-row flex flex-hor-start flex-hor-between">
          <span> {{ order.orderId  }}</span>
          <span> {{ order.customerName  }}</span>
          <span> {{ order.dateServiced  }}</span>
          <span> {{ order.orderValue  }}</span>
          <span> {{ order.applicationValue }}</span>
        </div>
    </div>
    <!-- Print -->
    <button class="mdev-base-btn"> {{ $t("general.print") }} </button>
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
