<template>
  <!-- Main Container -->
  <section v-if="workOrders" class="mdev-main-content-frame" aria-labeledby="dashboard-title">
    <!-- Header [FLEX] -->
    <div class="mdev-frame-header flex flex-start flex-hor-between">
      <span id="dashboard-title">{{ $t("orderList.title") }}</span>
    </div>
    <!-- Table Container --> 
    <div class="mdev-table-container">
      <!-- Table Head [FLEX] -->
      <div class="mdev-table-head flex flex-start">
        <span
          v-for="header in tableHeaders"
          :class="['mdev-table-cell',{ smallColumn: header.special, mediumColumn: header.medium}]" id="header.ariaId">
            {{ header.title }}
          </span>
      </div>

      <!-- Table Row [FLEX] -->
      <div 
        v-for="orders in workOrders"
        class="mdev-table-row flex flex-start"
        v-if="!orders.servicedDate">      
        
        <!-- Date Added -->
        <span class="mdev-table-cell mediumColumn" aria-labeledby="dateColumn">
          <span class="u-hidden-desktop mdev-hidden-label" aria-hidde="true">
            Date Added:
          </span>
          {{ (orders.workOrderContent.dateAdded) | moment("DD/MM/YYYY")}}
        </span> 

        <!-- Customer Name -->
        <span class="mdev-table-cell --name-modifier" aria-labeledby="customerColumn">
          <router-link :to="{path:'/dashboard/workorder/' + orders.workOrderId}" class="mdev-link u-bold">
            {{ orders.workOrderContent.custName }}
          </router-link>
        </span>

        <!-- City -->
        <span class="mdev-table-cell mediumColumn" aria-labeledby="cityColumn">
          <span class="u-hidden-desktop mdev-hidden-label --column-modifier" aria-hidde="true">
            City:
          </span>
          {{ orders.workOrderContent.city }}
        </span>

        <!-- Address -->
          <span class="mdev-table-cell" aria-labeledby="addresscolumn">
          <span class="u-hidden-desktop mdev-hidden-label --column-modifier" aria-hidde="true">
            Address:
          </span>
            {{ orders.workOrderContent.address }}
          </span>
        <!-- Phone -->
        <span class="mdev-table-cell mediumColumn" aria-labeledby="phoneColumn">
          <span class="u-hidden-desktop mdev-hidden-label --column-modifier" aria-hidde="true">
            Phone:
          </span>
        {{ formatPhone(orders.workOrderContent.custHomePhone) }}
        </span>

        
        <span class="mdev-table-cell --side-modifier" aria-labeledby="serviceColumn">
        <!-- Serviced Component -->
          <serviced-component
            @statusChanged="orders.servicedDate = $event"
            :servicedDate="orders.servicedDate"
            :orderId="orders.workOrderId"></serviced-component>
        </span>

        <span class="mdev-table-cell --side-modifier" aria-labeledby="statusColumn">
        <!-- Unreachable Component -->
        <unreachable-component
          :orderId="orders.WorkOrderId"
          :unreachable="orders.unreachable"></unreachable-component>
        </span>
        
        <span class="mdev-table-cell --top-modifier smallColumn" aria-labeledby="statusColumn">
          <router-link class="info-icon" :to="{path:'/dashboard/workorder/' + orders.workOrderId}">
          <i class="fa fa-fw fa-info"></i>
          </router-link>
        </span>

      </div>
    </div>
  </section>
</template>

<script>

  //Local Component Registration
  import servicedComponent    from '../shared/serviced.vue';
  import unreachableComponent from '../shared/unreachable.vue';

  export default {
    name: "workOrderList",

    // Instance Data Storage
    data: function (){
      return{
        // Header Titles for view. Can be replaced with props.
        tableHeaders: [
          {
            title   : "Date Added:",
            ariaId  : "dateColumn",
            special : false,
            medium  : true
          },
          {
            title   : "Customer Name:",
            ariaId  : "customerColumn",
            special : false,
            medium  : false
          },
          {
            title   : "City:",
            ariaId  : "cityColumn",
            special : false,
            medium  : true
          },
          {
            title   : "Address:",
            ariaId  : "addressColumn",
            special : false,
            medium  : false
          },
          {
            title   : "Phone:",
            ariaId  : "phoneColumn",
            special : false,
            medium  : true
          },
          {
            title   : "Serviced Date:",
            ariaId  : "serviceColumn",
            special : false,
            medium  : false
          },
          {
            title   : "Status:",
            ariaId  : "statusColumn",
            special : false,
            medium  : false
          },          
          {
            title   : "Info:",
            ariaId  : "infoColumn",
            special : true,
            medium  : false
          }
        ],

        workOrders: null,
        loading: true
      };
    },
    
    // Call fetchData() To retrieve information from API
    created: function(){
       this.fetchData();
    },

    // Watch for Route Changes and fetch data 
    watch: {
      '$route'  : 'fetchData',
      'loading' : 'loadAnimDispatcher'
    },

    methods: {
      // Call API and Retrieve Data
      fetchData() {
        // Set loading to True
        this.loading = true;
        // Call API
        this.$http.get("/workorders/list")
          .then(function(res){
            this.workOrders = res.body.orders;
            // Set Loading to False
            this.loading = false;
          });
      },
      // Format Phone Numbers
      formatPhone(phone) {
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
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
 
  @import '../../assets/styles/mdev-table-style.scss';

</style>
