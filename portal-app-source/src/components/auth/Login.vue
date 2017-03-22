<template>
  <div class="mdev-form-group">
    <h1 class="mdev-form-title u-text-center">{{ $t("auth.login.title") }}</h1>
    
    <input 
      data-required
      aria-required="true"
      aria-label="Email"
      v-model="user.email"
      type="email"
      :placeholder="$t('auth.login.email')">
    
    <input
      data-required
      aria-required="true"
      aria-label="Password"
      v-model="user.password"
      type="password"
      placeholder="Password">
    
    <router-link to="/auth/reset" class="--reset_link u-bold" title="Reset your password.">{{ $t("auth.login.reset") }}</router-link>
    
    <div class="mdev-action-group u-text-center">
      <button 
        aria-label="Login To Zucora Technician Work Order Portal"
        @click="login" 
        class="mdev-base-btn mdev-action-btn"> {{ $t("auth.login.action") }} </button>
    </div>
  </div> 
</template>

<script>
  export default {
   name: "LoginComponent",

   data: function() {
    return{
      user:{
        email     : "",
        password  : ""
      }
    };
   },

   methods: {
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
        this.$http.post("user.json", this.user)
          .then(function(res){
            // Notify User
            alertify.success(this.$t("validation.messages.success.login"));
            // Store Token
            this.$auth.setToken('abcd', Date.now() + 14400000);
            // Redirect
            //this.$router.push('/auth/reset');
          });
      }
    }
   }
  };
</script>

<style lang="scss">

</style>
