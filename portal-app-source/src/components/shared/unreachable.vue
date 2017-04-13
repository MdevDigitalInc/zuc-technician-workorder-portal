<template>
  <button 
    @click="unreachableToggle"
    :class="['mdev-base-btn mdev-status-btn',{ unreachable: status}]"> {{ $t("general.unreachable") }} </button>
 
</template>

<script>
  export default {
    name: 'unreachableComponent',
    props: ['unreachable', 'orderId'],
    data: function () {
      return {
        status: '',
        postData: {
          workOrderId: this.orderId,
          serviced: false,
          servicedDate: '',
          unreachable: false
        }
      };
    },

    methods: {
      // Toggle Unreachable Status / API & UI
      unreachableToggle() {
        // Flip the boolean and send it to API.
        this.postData.unreachable = !this.status;
        
        // Update Work Order Status
        this.$http.put("/workorders/status", this.postData)
          .then( function(res) {
          // Only upon successful response, flip the UI
          // We simply pass the same data that was sent to the API.
          this.status = this.postData.unreachable;
        });

      }
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
 

</style>


