<template>
  <!-- Main Container -->
  <section class="mdev-main-content-frame" aria-labelledby="details-title">
    <!-- Header [FLEX] -->
    <div class="mdev-frame-header flex flex-hor-start flex-hor-between">
      <span id="details-title">{{ $t("orderDetails.title") }}</span>
      <router-link to="/dashboard/list" title="Back">{{ $t("general.navBack") }}</router-link>
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
      <div class="mdev-half-column" aria-labelledby="appdetails-title">
        <h3 id="appdetails-title">{{ $t("orderDetails.apptDetails") }}</h3>
        <!-- Date -->
        <div class="mdev-info-field">
          <span id="date">{{ $t("general.date") }}</span>
          <span aria-labelledby="date"> {{ orderDetails.appointment.time }}</span>
        </div>
        <!-- Time -->
        <div class="mdev-info-field">
          <span id="time">{{$t("general.time") }}</span>
          <span aria-labelledby="time"> {{ orderDetails.appointment.time }}</span>
        </div>
        
        <!-- Actions -->
        <div class="mdev-info-field" aria-label="Actions and Status">
            <input type="text" placeholder="DD/MM/YYYY" v-model="orderDetails.serviceDate">
            <button 
              :class="['mdev-base-btn',{ unreachable: orderDetails.unreachable}]">
               {{ $t("general.unreachable") }} </button>
  
        </div>

      </div>
    </div>

    <!-- Order Information -->
    <div class="mdev-order-info" aria-labelledby="orderinfo-title">
        <div class="mdev-order-wrapper">
          <h3 id="orderinfo-title">{{ $t("orderDetails.orderInfo") }}</h3>
          <!-- Delivery -->
          <div class="mdev-info-field">
            <span id="delivery">{{ $t("general.delivery") }}</span>
            <span aria-labelledby="delivery"> {{ orderDetails.order.deliveryDate  }}</span>
          </div>

          <!-- Order Id -->
          <div class="mdev-info-field">
            <span id="ordernum">{{ $t("general.orderNum") }}</span>
            <span aria-labelledby="ordernum"> {{ orderDetails.order.orderId  }}</span>
          </div>

          <!-- Store -->
          <div class="mdev-info-field">
            <span id="store">{{ $t("general.store") }}</span>
            <span aria-labelledby="store"> {{ orderDetails.order.store  }} </span>
          </div>
        <!-- SKU's -->
        <div class="mdev-light-table">
          <div class="mdev-light-table-head flex flex-hor-start flex-hor-between">
            <span id="head-1">{{ $t("orderDetails.table.quantity") }}</span>
            <span id="head-2">{{ $t("orderDetails.table.sku") }}</span>
            <span id="head-3">{{ $t("orderDetails.table.description") }}</span>
            <span id="head-4">{{ $t("orderDetails.table.value") }}</span>
          </div>

          <div
            v-for= "sku in orderDetails.order.skus"
            class="mdev-light-table-row flex flex-hor-start flex-hor-between">
            <span aria-labelledby="head-1"> {{ sku.quantity  }}</span>
            <span aria-labelledby="head-2"> {{ sku.sku  }}</span>
            <span aria-labelledby="head-3"> {{ sku.description  }}</span>
            <span aria-labelledby="head-4"> {{ sku.value  }}</span>
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
        <button class="mdev-base-btn" aria-label="Print"> {{ $t("general.print") }} </button>
      </div>
    </div>


  </section>
</template>

<script>
  export default {
    name: "workOrderDetail",

    data: function() {
      return{
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
          notes: "Customer notes in play text come in through here please",
          unreachable: false,
          serviceDate: ""
        }
      };
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
 
  .mdev-frame-header {
    margin-bottom: $large-spacing;
  }

  .mdev-order-header, .mdev-order-wrapper {
    padding: 0 $large-spacing;
  }

  .mdev-order-info, .mdev-order-header {
    margin-bottom: $large-spacing;
  }
</style>
