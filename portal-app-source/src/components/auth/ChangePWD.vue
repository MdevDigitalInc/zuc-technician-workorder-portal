<template>
  <div class="mdev-form-group">
    <h1>{{ $t("auth.change.title") }}</h1>
    
    <input
      data-required
      aria-required="true"
      aria-label="Old Password"
      v-model="user.oldPassword"
      type="email"
      :placeholder="$t('auth.change.oldPwd')">
    
    <input
      data-required
      aria-required="true"
      aria-label="New password"
      v-model="user.newPassword"
      type="password"
      :placeholder="$t('auth.change.newPwd')">
    
    <input
      data-required
      aria-required="true"
      aria-label="Confirm new password"
      v-model="user.newPasswordConfirm"
      type="password"
      :placeholder="$t('auth.change.confirm')">
    
    <div class="mdev-action-group u-text-center">
      <button
        aria-label="Change Password"
        @click="changePwd"
        class="mdev-base-btn mdev-action-btn"> {{ $t("auth.change.action") }} </button>
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
      if (
        this.$validate.validateFields(formFields, this.$t("validation.errors.form")) &&
        this.$validate.validatePassword(this.user.newPassword, this.$t("validation.errors.pwdTooShort")) &&
        this.$validate.validateMatch(this.user.newPassword, this.user.newPasswordConfirm, this.$t("validation.errors.match"))
      ){

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
    }
   }
  };
</script>

<style lang="scss">

</style>
