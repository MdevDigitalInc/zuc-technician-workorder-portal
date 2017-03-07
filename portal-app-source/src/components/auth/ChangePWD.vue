<template>
  <div class="mdev-form-group">
    <h1>Change Password</h1>
    <input v-model="user.oldPassword" type="email" placeholder="Old Password">
    <input v-model="user.newPassword" type="password" placeholder="New Password">
    <input v-model="user.newPasswordConfirm" type="password" placeholder="Confirm New Password">
    <div class="mdev-action-group u-text-center">
      <button @click="changePwd" class="mdev-base-btn mdev-action-btn"> Change </button>
    </div>
  </div> 
</template>

<script>
  export default {
   name: "ChangePwdComponent",

   data: function() {
    return{
      user:{
        oldPassword         : "",
        newPassword         : "",
        newPasswordConfirm  : ""
      }
    };
   },

   methods: {
    changePwd: function() {

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
        alertify.error('Please make sure the form is correct.');
      }
    }
   }
  };
</script>

<style lang="scss">

</style>
