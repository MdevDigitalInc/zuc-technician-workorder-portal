<template>
  <div class="mdev-form-group">
    <h1 class="mdev-form-title">Work Order Portal Login</h1>
    <input v-model="user.email" type="email" placeholder="Email">
    <input v-model="user.password" type="password" placeholder="Password">
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
      var formFields = $('input:not([type="submit"]):not([type="button"])');
      var emailField = $('input[type="email"]');
      
      // Validate Fields
      if (this.$validate.validateFields(formFields)) {
        if (this.$validate.validateEmail(emailField)) {
          this.$http.post("user.json", this.user)
            .then(function(res){
              // Notify User
              alertify.success('You have Successfully Created a User.');
              // Store Token
              this.$auth.setToken('abcd', Date.now() + 14400000);
              // Redirect
              //this.$router.push('/auth/reset');
            });
         }
         else {
          alertify.error('Please use a valid e-mail address.');
         }
      }
      else {
        alertify.error('Please check the form and try again.');
      }
    }
   }
  };
</script>

<style lang="scss">

</style>
