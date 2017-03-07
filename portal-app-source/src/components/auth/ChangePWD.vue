<template>
  <div class="mdev-form-group">
    <h1>Change Password</h1>
    <input data-required v-model="user.oldPassword" type="email" placeholder="Old Password">
    <input data-required v-model="user.newPassword" type="password" placeholder="New Password">
    <input data-required v-model="user.newPasswordConfirm" type="password" placeholder="Confirm New Password">
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
      var formFields = $('[data-required]');
      
      // Validate Fields
      if (this.$validate.validateFields(formFields)) {
        if (this.$validate.validateMatch(this.user.newPassword, this.user.newPasswordConfirm)) {
          this.$http.post("user.json", this.user)
            .then(function(res){
              // Notify User
              alertify.success(this.$t("validation.messages.success.change"));
              // Store Token
              this.$auth.setToken('abcd', Date.now() + 14400000);
              // Redirect
              //this.$router.push('/auth/reset');
            });
        }
        else {
          alertify.error(this.$t("validation.errors.match"));   
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
