<template>
  <div class="mdev-form-group">
    <h1>Change Password</h1>
    <input v-model="user.oldPassword" type="text" placeholder="Old Password">
    <input v-model="user.newPassword" type="password" placeholder="New Password">
    <input v-model="user.newPasswordConfirm" type="password" placeholder="Confirm New Password">
    <div class="mdev-action-group u-text-center">
      <button @click="login" class="mdev-base-btn mdev-action-btn"> Log In </button>
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
    login: function() {
      this.$http.post("user.json", this.user)
        .then(function(res){
          // Notify User
          alertify.success('You have Successfully Created a User.');
          // Store Token
          this.$auth.setToken('abcd', Date.now() + 14400000);
          // Redirect
          this.$router.push('/auth/reset');
        });
      console.log(this.user);
    }
   }
  };
</script>

<style lang="scss">

</style>
