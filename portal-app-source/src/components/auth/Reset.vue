<template>
  <div class="mdev-form-group">
    <h1>Password Reset</h1>
    <input data-required v-model="user.email" type="email" placeholder="Email">
    <div class="mdev-action-group u-text-center">
      <button @click="reset" class="mdev-base-btn mdev-action-btn"> reset </button>
    </div>
  </div> 
</template>

<script>
  export default {
   name: "RegisterComponent",

   data: function() {
    return{
      user:{
        email : ""
      }
    };
   },

   methods: {
    reset: function() {
      
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
              alertify.success(this.$t("validation.messages.success.reset"));
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
