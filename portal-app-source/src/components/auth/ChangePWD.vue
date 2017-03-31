<template>
  <div class="mdev-form-group" @keyup.enter="changePwd">
    <h1 class="u-text-center">{{ $t("auth.change.title") }}</h1>
    
    <input
      data-required
      tab-index="1"
      aria-required="true"
      aria-label="Old Password"
      v-model="user.oldPassword"
      type="email"
      :placeholder="$t('auth.change.oldPwd')">
    
    <input
      data-required
      tab-index="2"
      aria-required="true"
      aria-label="New password"
      v-model="user.newPassword"
      type="password"
      :placeholder="$t('auth.change.newPwd')">
    
    <input
      data-required
      tab-index="3"
      aria-required="true"
      aria-label="Confirm new password"
      v-model="newPasswordConfirm"
      type="password"
      :placeholder="$t('auth.change.confirm')">
    
    <div class="mdev-action-group u-text-center">
      <button
        tab-index="4"
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
      },
      newPasswordConfirm    : ""
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
        this.$validate.validateMatch(this.user.newPassword, this.newPasswordConfirm, this.$t("validation.errors.match"))
      ){

        this.$http.post("/auth/changepwd", this.user)
          .then(function(res){
            // Notify User
            alertify.success(this.$t("validation.messages.success.change"));
            // Redirect
            this.$router.push('/');
          });
      }
    }
   }
  };
</script>

<style lang="scss">

</style>
