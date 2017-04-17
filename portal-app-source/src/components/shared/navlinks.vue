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
        
        <i :class="['fa fa-fw', link.iconFa]"></i>
        <span>{{ link.linkName  }}</span>
     </router-link> 
     <!-- Set Modal -->
     <a @click="showModalChild(false)" class="mdev-nav-link flex flex-hor-between flex-vert-center u-bold">
        
        <i :class="['fa fa-fw', contact.iconFa]"></i>
        <span>{{ contact.linkName  }}</span>
   </a>
   <a @click="showShybar(!showShybarBool)" class="mdev-nav-link flex flex-hor-between flex-vert-center u-bold">
        
        <i :class="['fa fa-fw', user.iconFa]"></i>
        <span>{{ user.linkName  }}</span>
   </a>
  </div>
</template>



<script>
  // Local registration

  export default {
    // <router-link> element is a custom element derived from vue-router. use :to - to bind. 
    name: "navLinks",

    data: function(){
      return{
        showModal       : false,
        showShybarBool  : false,
        // Refer to routes.js file for available routes.
        links: [
          {
            linkName    : 'Work Orders',
            linkTitle   : 'Available Work Orders',
            iconClass   : '--workorder-icon',
            iconFa      : 'fa-file-text',
            route       : '/dashboard/list'
          },
          {
            linkName    : 'Billing',
            iconClass   : '--billing-icon',
            iconFa      : 'fa-bar-chart',
            linkTitle   : 'Billing Report',
            route       : '/dashboard/billing'
          }
        ],
        contact: {
            linkName    : 'Contact',
            iconClass   : '--contact-icon',
            iconFa      : 'fa-envelope',
            linkTitle   : 'Contact Information',
          },
        user: {
            linkName    : 'User',
            iconClass   : '--user-icon',
            iconFa      : 'fa-user',
            linkTitle   : 'User Menu',
          }
      };
    },

    methods: {
      // This is a Boolean, True or false fed by the
      // Link. True will show the PWD Change screen in the modal, False will show the Contact.
      showModalChild(pwdOrContact) {
        this.$emit('showModalParent', pwdOrContact);
      },
      showShybar(showShybar) {
        this.$emit('showShybarChild', showShybar);
        this.showShybarBool = showShybar;
      }
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
    color: $bkg-light-grey;
    cursor: pointer;

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
