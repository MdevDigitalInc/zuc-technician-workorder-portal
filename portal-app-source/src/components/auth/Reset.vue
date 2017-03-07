<template>
  <div class="mdev-form-group">
    <h1>Password Reset</h1>
    <input v-model="user.email" type="email" placeholder="Email">
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
        alertify.error('Please make sure to fill in your email');
      }
    }
   }
  };
</script>

<style lang="scss">

</style>
