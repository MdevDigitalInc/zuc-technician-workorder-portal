<template>
  <div class="mdev-main-nav-links flex flex-nowrap flex-hor-end flex-vert-center u-capitalize">
    <router-link 
      v-for="link in links" 
      :to="link.route"
      class ="mdev-nav-link flex flex-hor-between flex-vert-center u-bold"
      active-class="--active" 
      :title="link.linkTitle" 
      aria-role="menuitem" 
      exact>
        <i :class="['mdev-icon --size-s', link.iconClass ]"></i>
        <span>{{ link.linkName  }}</span>
   </router-link> 
  </div>
</template>



<script>
  export default{
    // <router-link> element is a custom element derived from vue-router. use :to - to bind. 
    name: "navLinks",

    data: function(){
      return{
        // Refer to routes.js file for available routes.
        links: [
          {
            linkName: 'Work Orders',
            linkTitle: 'Available Work Orders',
            iconClass: '--workorder-icon',
            route: '/dashboard/list'
          },
          {
            linkName: 'Billing',
            iconClass: '--billing-icon',
            linkTitle: 'Billing Report',
            route: '/dashboard/billing'
          },
          {
            linkName: 'Contact',
            iconClass: '--contact-icon',
            linkTitle: 'Contact Information',
            route: '#'
          },
          {
            linkName: 'User',
            iconClass: '--user-icon',
            linkTitle: 'User Menu',
            route: '#'
          }
        ]
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

  .mdev-main-nav-links {
    color: $white;
    font-weight: $body-weight;
    
    @media screen and ('$tablet-up-comp') {
      color: $charcoal-grey;
    }
  }

  .mdev-nav-link {
    transition: all, .3s;
    flex-wrap: wrap;
    text-align: center;

    @media screen and ('$tablet-up-comp') {
      flex-wrap: nowrap;
      text-align: left;
    }

    &:hover {
      color: $zucora-green;
    }

    &:last-child {
      margin-right: 0;
    }

    span {
      width: 100%;

      @media screen and ('$tablet-up-comp') {
        width: auto;
      }
    }
  }

  .--active {
    color: $zucora-green;
  }
  /*--------------------------------------*/

</style>
