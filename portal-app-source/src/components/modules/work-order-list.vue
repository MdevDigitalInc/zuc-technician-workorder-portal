<template>
  <!-- Main Container -->
  <section class="mdev-main-content-frame" aria-labeledby="dashboard-title">
    <!-- Header [FLEX] -->
    <div class="mdev-frame-header flex flex-start flex-hor-between">
      <span id="dashboard-title">{{ $t("orderDetails.title") }}</span>
    </div>
    <!-- Table Container --> 
    <div class="mdev-table-container">
      <!-- Table Head [FLEX] -->
      <div class="mdev-table-head flex flex-start">
        <span
          v-for="header in tableHeaders"
          class="mdev-table-cell" id="header.ariaId">
            {{ header.title }}
          </span>
      </div>

      <!-- Table Row [FLEX] -->
      <div 
        v-for="orders in workOrders"
        class="mdev-table-row flex flex-start">      
        
        <!-- Date Added -->
        <span class="mdev-table-cell" aria-labeledby="dateColumn">
          {{ orders.orderContent.dateAdded   }}
        </span> 

        <!-- Customer Name -->
        <span class="mdev-table-cell" aria-labeledby="customerColumn">
          {{ orders.orderContent.custName }}
        </span>

        <!-- City -->
        <span class="mdev-table-cell" aria-labeledby="cityColumn">
          {{ orders.orderContent.city }}
        </span>

        <!-- Address -->
          <span class="mdev-table-cell" aria-labeledby="addresscolumn">
            {{ orders.orderContent.address }}
          </span>
        <!-- Phone -->
        <span class="mdev-table-cell" aria-labeledby="phoneColumn">
        {{ orders.orderContent.phone}}
        </span>

        
        <span class="mdev-table-cell" aria-labeledby="serviceColumn">
          <input type="text" placeholder="DD/MM/YYYY" v-model="orders.serviceDate">
        </span>

        <span class="mdev-table-cell" aria-labeledby="statusColumn">
          <button 
            :class="['mdev-base-btn',{ unreachable: orders.unreachable}]"> {{ $t("general.unreachable") }} </button>
        </span>
        
        <span class="mdev-table-cell" aria-labeledby="statusColumn">
          <router-link :to="{ path:'/dashboard/workorder/' + orders.orderId}">
            <i class="mdev-icon --size-s --info"></i>
          </router-link>
        </span>

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "workOrderList",

    data: function (){
      return{
        // Header Titles for view. Can be replaced with props.
        tableHeaders: [
          {
            title   : "Date Added",
            ariaId  : "dateColumn"
          },
          {
            title: "Customer Name",
            ariaId  : "customerColumn"
          },
          {
            title: "City",
            ariaId: "cityColumn"
          },
          {
            title: "Address",
            ariaId: "addressColumn"
          },
          {
            title: "Phone",
            ariaId: "phoneColumn"
          },
          {
            title: "Serviced Date",
            ariaId: "serviceColumn"
              
          },
          {
            title: "Status",
            ariaId: "statusColumn"
          },          
          {
            title: "Info",
            ariaId: "infoColumn"
          }
        ],

        workOrders: [
          {
            orderContent: {
              dateAdded: "03/04/2017",
              custName: "John Santos Smith",
              city: "Victoria",
              address: "202-111 Oak Bay Avenue",
              phone: "1-519-555-55555"
            },
            serviceDate: "",
            orderId: "38827199271",
            unreachable: false
          },
          {
            orderContent: {
              dateAdded: "03/04/2017",
              custName: "John Santos Smith",
              city: "Victoria",
              address: "202-111 Oak Bay Avenue",
              phone: "1-519-555-55555"
            },
            serviceDate: "",
            orderId: "3768279198",
            unreachable: true
          },          {
            orderContent: {
              dateAdded: "03/04/2017",
              custName: "John Santos Smith",
              city: "Victoria",
              address: "202-111 Oak Bay Avenue",
              phone: "1-519-555-55555"
            },
            serviceDate: "",
            orderId: "111111",
            unreachable: false
          },
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .mdev-table-cell {
    width: 14%;

    input {
      margin-top: 0;
    }
  }

</style>
