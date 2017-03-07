<template>
  <div class="mdev-form-group">
    <h1>Work Order Portal Registration</h1>

    <input data-required v-model="user.email" type="email" placeholder="Email" >
    <input data-required v-model="user.firstname" type="text" placeholder="First name" >
    <input data-required v-model="user.lastname" type="text" placeholder="Last name" >
    <input data-required v-model="user.password" type="password" placeholder="Password" >
    <div class="mdev-action-group u-text-center">
      <button @click="register" class="mdev-base-btn mdev-action-btn">Register</button>
    </div>
  </div>
</template>

<script>
  export default {
   name: "RegComponent",

   data: function(){
    return{
      user: {
        email     : "",
        firstname : "",
        lastname  : "",
        password  : ""
      }
    };
   },
   methods: {
    register: function() {

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
              alertify.success(this.$t("validation.messages.success.register"));
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
