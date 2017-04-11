<template>
  <div class="mdev-form-group" @keyup.enter="login">
    <h1 class="mdev-form-title u-text-center">{{ $t("auth.login.title") }}</h1>
    <!-- Email -->    
    <input 
      data-required
      tab-index="1"
      aria-required="true"
      aria-label="Email"
      v-model="user.email"
      type="email"
      :placeholder="$t('auth.login.email')">
    <!-- Password -->
    <input
      data-required
      tan-index="2"
      aria-required="true"
      aria-label="Password"
      v-model="user.password"
      type="password"
      placeholder="Password">
    <!-- Reset -->
    <router-link 
      to="/auth/reset"
      tab-index="4"
      class="--reset_link u-bold"
      title="Reset your password.">{{ $t("auth.login.reset") }}</router-link>
    <!-- Action -->
    <div class="mdev-action-group u-text-center">
      <button 
        tab-index="3"
        aria-label="Login To Zucora Technician Work Order Portal"
        @click="login" 
        class="mdev-base-btn mdev-action-btn"> {{ $t("auth.login.action") }} </button>
    </div>

  </div> 
</template>

<script>
  export default {
    name: "LoginComponent",

    // Instance Data Storage
    data: function() {
      return{
        user:{
          email     : "",
          password  : ""
        }
      };
    },

    methods: {
    
      // Login Function
      login: function() {

        // Clear Any Errors
        this.$validate.clearErrors();
        // Collect Fields
        var formFields = $('[data-required]');
        var emailField = $('input[type="email"]');
      
        // Validate Fields
        if (
          this.$validate.validateFields(formFields, this.$t("validation.errors.form")) &&
          this.$validate.validateEmail(emailField, this.$t("validation.errors.email"))
        ){
          // Call API with User Object
          this.$http.post("/auth/login", this.user)
            .then(function(res){
              // Store Token
              this.$auth.setToken(res.body.token, Date.now() + 14400000);
              // Redirect
              this.$router.push('/dashboard');
            });
          }
        }
      }
   };
</script>

<style lang="scss">

</style>
