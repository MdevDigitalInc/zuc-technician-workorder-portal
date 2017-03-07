<template>
  <div class="mdev-form-group">
    <h1 class="mdev-form-title">Work Order Portal Login</h1>
    <input data-required v-model="user.email" type="email" placeholder="Email">
    <input data-required v-model="user.password" type="password" placeholder="Password">
    <router-link to="/auth/reset" class="--reset_link">forgot password?</router-link>
    <div class="mdev-action-group u-text-center">
      <button @click="login" class="mdev-base-btn mdev-action-btn"> Log In </button>
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
      if (this.$validate.validateFields(formFields)) {
        if (this.$validate.validateEmail(emailField)) {
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
         else {
          alertify.error(this.$t("validation.errors.email"));
         }
      }
      else {
        alertify.error(this.$t("validation.errors.form"));
      }
    }
   }
  };
</script>

<style lang="scss">

</style>
