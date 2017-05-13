<template>
 <div class="mdev-search --icon-layer">
  <input class="mdev-search-form" 
    type="text"
    v-model="query.search"
    @keyup.enter="sendQuery"
    :placeholder="$t('general.search')"
    aria-label="Search">
  <section v-if="results && searching" class="mdev-main-content-frame" aria-labeledby="dashboard-title">
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
          :class="['mdev-table-cell',{ smallColumn: header.special}]" id="header.ariaId">
            {{ header.title }}
          </span>
      </div>

      <!-- Table Row [FLEX] -->
      <div 
        v-for="result in results"
        class="mdev-table-row flex flex-start"
        v-if="!result.servicedDate">      
        
        <!-- Date Added -->
        <span class="mdev-table-cell" aria-labeledby="dateColumn">
          <span class="u-hidden-desktop mdev-hidden-label" aria-hidde="true">
            Date Added:
          </span>
          {{ (result.workOrderContent.dateAdded) | moment("DD/MM/YYYY")}}
        </span> 

        <!-- Customer Name -->
        <span class="mdev-table-cell --name-modifier" aria-labeledby="customerColumn">
          <router-link :to="{path:'/dashboard/workorder/' + result.workOrderId}" class="mdev-link u-bold">
            {{ result.workOrderContent.custName }}
          </router-link>
        </span>

        <!-- City -->
        <span class="mdev-table-cell" aria-labeledby="cityColumn">
          <span class="u-hidden-desktop mdev-hidden-label --column-modifier" aria-hidde="true">
            City:
          </span>
          {{ result.workOrderContent.city }}
        </span>

        <!-- Address -->
          <span class="mdev-table-cell" aria-labeledby="addresscolumn">
          <span class="u-hidden-desktop mdev-hidden-label --column-modifier" aria-hidde="true">
            Address:
          </span>
            {{ result.workOrderContent.address }}
          </span>
        <!-- Phone -->
        <span class="mdev-table-cell" aria-labeledby="phoneColumn">
          <span class="u-hidden-desktop mdev-hidden-label --column-modifier" aria-hidde="true">
            Phone:
          </span>
        {{ result.workOrderContent.custHomePhone}}
        </span>

        
        <span class="mdev-table-cell --side-modifier" aria-labeledby="serviceColumn">
        <!-- Serviced Component -->
          <serviced-component
            @statusChanged="result.servicedDate = $event"
            :servicedDate="result.servicedDate"
            :orderId="result.workOrderId"></serviced-component>
        </span>

        <span class="mdev-table-cell --side-modifier" aria-labeledby="statusColumn">
        <!-- Unreachable Component -->
        <unreachable-component
          :orderId="result.WorkOrderId"
          :unreachable="result.unreachable"></unreachable-component>
        </span>
        
        <span class="mdev-table-cell --top-modifier smallColumn" aria-labeledby="statusColumn">
          <router-link class="info-icon" :to="{path:'/dashboard/workorder/' + result.workOrderId}">
          <i class="fa fa-fw fa-info"></i>
          </router-link>
        </span>

      </div>
    </div>
    </section>
  </div>
</template>

<script>
  //Local Component Registration
  import servicedComponent    from './serviced.vue';
  import unreachableComponent from './unreachable.vue';

export default {
  name: "search",
  data: function () {
    return {
      searching: false,
      // Header Titles for view. Can be replaced with props.
      tableHeaders: [
        {
          title   : "Date Added:",
          ariaId  : "dateColumn",
          special : false
        },
        {
          title   : "Customer Name:",
          ariaId  : "customerColumn",
          special : false
        },
        {
          title   : "City:",
          ariaId  : "cityColumn",
          special : false
        },
        {
          title   : "Address:",
          ariaId  : "addressColumn",
          special : false
        },
        {
          title   : "Phone:",
          ariaId  : "phoneColumn",
          special : false
        },
        {
          title   : "Serviced Date:",
          ariaId  : "serviceColumn",
          special : false
        },
        {
          title   : "Status:",
          ariaId  : "statusColumn",
          special : false
        },          
        {
          title   : "Info:",
          ariaId  : "infoColumn",
          special : true
        }
      ],      
      query: {
        search: ''
      },
      results: null
    };
  },
  // Watch for route changes and turn on/off the main view
  watch: {
    '$route': 'resetOnNavigate'
  },

  methods: {
    // Search Query API Call
    sendQuery: function() {
      // Send Query
      this.$http.post("/search", this.query)
        .then(function(res){
          // Add response to Data Store
          this.results = res.body.orders;
          // Emit event to hide main view
          this.$emit('userSearch', true);
          // Change searching to true to reveal results
          this.searching = true;
        });
    },
   
    // Reset views on Navigation 
    resetOnNavigate: function () {
      this.searching = false;
      this.$emit('userSearch', false);
    }
  },

  components: {
    'serviced-component'    : servicedComponent,
    'unreachable-component' : unreachableComponent
  }
};

</script>

<style lang="scss" scoped>

/*-----/
Global Main
/-----*/
@import '../../assets/styles/component-lean-main.scss';

/*--------------------------------------*/
/* Main Component Styles                */
/*--------------------------------------*/



.mdev-search-form {
  margin: 5px auto;
  width: 90%;
  position: relative;
  padding: 10px 30px 10px;
  background: $white;
  display: block;
  font-size: 2.6vw;
  z-index: 1;
  
  @media screen and ('$tablet-up-comp') {
    width: 100%;
    margin: 15px 0 0 0;
    padding: 15px 40px 15px;
    font-size: 1.6vw;
  }

  @media screen and ('$laptop-only-comp') {
    padding-left: 50px;
  }

  @media screen and ('$desktop-only-comp') {
    font-size: 1vw;
    padding-left: 50px;
  }

  @media screen and ('$xl-up-comp') {
    font-size: 16px;
    padding-left: 60px;
  }
}


@import '../../assets/styles/mdev-table-style.scss';
/*--------------------------------------*/
</style>
