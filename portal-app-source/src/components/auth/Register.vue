<template>
  <div class="mdev-form-group">
    <h1>Work Order Portal Registration</h1>

    <input v-model="user.email" type="email" placeholder="Email" >
    <input v-model="user.firstname" type="text" placeholder="First name" >
    <input v-model="user.lastname" type="text" placeholder="Last name" >
    <input v-model="user.password" type="password" placeholder="Password" >
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
      var formFields = $('input:not([type="submit"]):not([type="button"])');
      
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
        alertify.error('Please ensure the form is completely filled in.');
      }
    }
   }
  };
</script>

<style lang="scss">

</style>
