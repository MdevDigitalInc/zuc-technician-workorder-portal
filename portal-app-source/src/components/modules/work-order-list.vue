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
          :class="['mdev-table-cell',{ smallColumn: header.special}]" id="header.ariaId">
            {{ header.title }}
          </span>
      </div>

      <!-- Table Row [FLEX] -->
      <div 
        v-for="orders in workOrders"
        class="mdev-table-row flex flex-start"
        v-if="!orders.serviceDate">      
        
        <!-- Date Added -->
        <span class="mdev-table-cell" aria-labeledby="dateColumn">
          <span class="u-hidden-desktop mdev-hidden-label" aria-hidde="true">
            Date Added:
          </span>
          {{ (orders.orderContent.dateAdded * 1000) | moment("DD/MM/YYYY")}}
        </span> 

        <!-- Customer Name -->
        <span class="mdev-table-cell --name-modifier" aria-labeledby="customerColumn">
          <router-link :to="{path:'/dashboard/workorder/' + orders.orderId}" class="mdev-link u-bold">
            {{ orders.orderContent.custName }}
          </router-link>
        </span>

        <!-- City -->
        <span class="mdev-table-cell" aria-labeledby="cityColumn">
          <span class="u-hidden-desktop mdev-hidden-label --column-modifier" aria-hidde="true">
            City:
          </span>
          {{ orders.orderContent.city }}
        </span>

        <!-- Address -->
          <span class="mdev-table-cell" aria-labeledby="addresscolumn">
          <span class="u-hidden-desktop mdev-hidden-label --column-modifier" aria-hidde="true">
            Address:
          </span>
            {{ orders.orderContent.address }}
          </span>
        <!-- Phone -->
        <span class="mdev-table-cell" aria-labeledby="phoneColumn">
          <span class="u-hidden-desktop mdev-hidden-label --column-modifier" aria-hidde="true">
            Phone:
          </span>
        {{ orders.orderContent.phone}}
        </span>

        
        <span class="mdev-table-cell --side-modifier" aria-labeledby="serviceColumn">
        <!-- Serviced Component -->
          <serviced-component @statusChanged="orders.serviceDate = $event" :servicedDate="orders.servicedDate" :orderId="orders.orderId"></serviced-component>
        </span>

        <span class="mdev-table-cell --side-modifier" aria-labeledby="statusColumn">
        <!-- Unreachable Component -->
        <unreachable-component :orderId="orders.orderId" :unreachable="orders.unreachable"></unreachable-component>
        </span>
        
        <span class="mdev-table-cell --top-modifier smallColumn" aria-labeledby="statusColumn">
          <router-link class="info-icon-test" :to="{ path:'/dashboard/workorder/' + orders.orderId}">
          <i class="fa fa-fw fa-info"></i>
            <!-- Temporary
            <i class="mdev-icon --rounded-icon --size-l --info-icon"></i>
            -->
          </router-link>
        </span>

      </div>
    </div>
  </section>
</template>

<script>

  //Local Component Registration
  import servicedComponent from '../shared/serviced.vue';
  import unreachableComponent from '../shared/unreachable.vue';

  export default {
    name: "workOrderList",

    data: function (){
      return{
        // Header Titles for view. Can be replaced with props.
        tableHeaders: [
          {
            title   : "Date Added:",
            ariaId  : "dateColumn",
            special : false
          },
          {
            title: "Customer Name:",
            ariaId  : "customerColumn",
            special : false
          },
          {
            title: "City:",
            ariaId: "cityColumn",
            special : false
          },
          {
            title: "Address:",
            ariaId: "addressColumn",
            special : false
          },
          {
            title: "Phone:",
            ariaId: "phoneColumn",
            special : false
          },
          {
            title: "Serviced Date:",
            ariaId: "serviceColumn",
            special : false
          },
          {
            title: "Status:",
            ariaId: "statusColumn",
            special : false
          },          
          {
            title: "Info:",
            ariaId: "infoColumn",
            special : true
          }
        ],

        workOrders: [
          {
            orderContent: {
              dateAdded: 1490651987,
              custName: "John Santos Smith",
              city: "Victoria",
              address: "202-111 Oak Bay Avenue",
              phone: "1-519-555-55555"
            },
            serviceDate: false,
            orderId: "38827199271",
            unreachable: false
          },
          {
            orderContent: {
              dateAdded: 1318781876,
              custName: "John Santos Smith",
              city: "Victoria",
              address: "202-111 Oak Bay Avenue",
              phone: "1-519-555-55555"
            },
            serviceDate: false,
            orderId: "3768279198",
            unreachable: true
          },          {
            orderContent: {
              dateAdded: 1318781876,
              custName: "John Santos Smith",
              city: "Victoria",
              address: "202-111 Oak Bay Avenue",
              phone: "1-519-555-55555"
            },
            serviceDate: false,
            orderId: "111111",
            unreachable: false
          },
        ]
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
 
  .mdev-table-cell {
    width: 14%;

    input {
      margin-top: 0;
    }
  }

  .smallColumn {
    width: 4%;
  }

  .mdev-serviced-plugin {
    margin-left: 0;
  }

  .info-icon-test {
    display: inline-block;
    border-radius: 3px;
    padding: 8px;
    background: $active-blue;
    color: $white;
  }



  @media screen and ('$phone-only-comp') {
    .mdev-table-cell {
      width: 100%;
      padding: 5px 0;
    }
    
    .mdev-table-row {
      flex-wrap: wrap;
      position: relative;
    }
    
    .mdev-table-head {
      display: none;
    }
    
    .--side-modifier {
      width: 50%;
      padding: 0;
      margin-top: 10px;
    }
    
    .--top-modifier {
      position: absolute;
      top: $large-spacing;
      padding: 0;
      right: -87%;
    }

    .--name-modifier {
      font-size: 6vw;
      margin-bottom: 8px;
    }

    .--column-modifier {
      width: 24%;
      display: inline-block;
    }

    .mdev-status-btn {
      height: 10.2vw;
      margin: 0 0 0 5px;
      font-size: 3.4vw;
      width: 100%;
    }
  }
</style>
