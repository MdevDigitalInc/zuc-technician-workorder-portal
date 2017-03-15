<template>
  <!-- Main Container -->
  <section class="mdev-main-content-frame">
    <!-- Header [FLEX] -->
    <div class="mdev-frame-header flex flex-hor-start flex-hor-between">
      <span>Manage Open Work Orders</span>
      <router-link to="/dashboard/list">Back</router-link>
    </div>

    <!-- Customer / Appointment [ Top Section ] -->
    <div class="mdev-order-header flex flex-start flex-vert-start">
      <!-- Customer Info -->
      <div class="mdev-half-column">
        <h3>Customer Information </h3>
        <span class="mdev-customer-name">
          {{ orderDetails.customer.custName }}
        </span>
        
        
        <!-- Address -->
        <div class="mdev-info-field">
          <span class="mdev-info-label">Address:</span>
          <span class="mdev-info-content">
            {{ orderDetails.customer.address  }}
          </span>
        </div>
        
        <!-- Phone -->
        <div class="mdev-info-field">
          <span class="mdev-info-label">Phone:</span>
          <span class="mdev-info-content">
            {{ orderDetails.customer.phone  }}
          </span>
        </div>
        
        <!-- Business Phone -->
        <div class="mdev-info-field">
          <span class="mdev-info-label">Business:</span>
          <span class="mdev-info-content">
            {{ orderDetails.customer.bizPhone  }}
          </span>
        </div>
        
        <!-- Customer ID: -->
        <div class="mdev-info-field">
          <span class="mdev-info-label">Customer ID:</span>
          <span class="mdev-info-content">
            {{ orderDetails.customer.customerId  }}
          </span>
        </div>
        
        <!-- Date Added -->
        <div class="mdev-info-field">
          <span class="mdev-info-label">Date Added:</span>
          <span class="mdev-info-content">
            {{ orderDetails.customer.dateAdded  }}
          </span>
        </div>
      </div>

      <!-- Appointment Info -->
      <div class="mdev-half-column">
        <h3>Appointment Details</h3>
        <!-- Date -->
        <div class="mdev-info-field">
          <span>Date:</span>
          <span> {{ orderDetails.appointment.time }}</span>
        </div>
        <!-- Time -->
        <div class="mdev-info-field">
          <span>Time:</span>
          <span> {{ orderDetails.appointment.time }}</span>
        </div>
        
        <!-- Actions -->
        <div class="mdev-info-field">
            <input type="text" placeholder="DD/MM/YYYY" v-model="orderDetails.serviceDate">
            <button 
              :class="['mdev-base-btn',{ unreachable: orderDetails.unreachable}]">
               Unreachable </button>
  
        </div>

      </div>
    </div>

    <!-- Order Information -->
    <div class="mdev-order-info">
      <h3>Order Information</h3>
      <!-- Delivery -->
      <div class="mdev-info-field">
        <span>Delivery:</span>
        <span> {{ orderDetails.order.deliveryDate  }}</span>
      </div>

      <!-- Order Id -->
      <div class="mdev-info-field">
        <span>Order#:</span>
        <span> {{ orderDetails.order.orderId  }}</span>
      </div>

      <!-- Store -->
      <div class="mdev-info-field">
        <span>Store:</span>
        <span> {{ orderDetails.order.store  }} </span>
      </div>

      <!-- SKU's -->
      <div class="mdev-light-table">
        <div class="mdev-light-table-head flex flex-hor-start flex-hor-between">
          <span>QTY</span>
          <span>SKU</span>
          <span>Description</span>
          <span> Value </span>
        </div>

        <div
          v-for= "sku in orderDetails.order.skus"
          class="mdev-light-table-row flex flex-hor-start flex-hor-between">
          <span> {{ sku.quantity  }}</span>
          <span> {{ sku.sku  }}</span>
          <span> {{ sku.description  }}</span>
          <span> {{ sku.value  }}</span>
        </div>
      </div>
    </div>

    <!-- Order Notes -->
    <div class="mdev-order-notes">
      <h3>Notes</h3>
      <p>
        {{ orderDetails.notes  }}
      </p>
    </div>

    <!-- Print -->
    <button class="mdev-base-btn"> Print </button>


  </section>
</template>

<script>
  export default {
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

</style>
