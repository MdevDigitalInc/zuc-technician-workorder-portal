<template>
  <div class="mdev-form-group">
    <h1>{{ $t("auth.reset.title") }}</h1>
    
    <input
      data-required
      aria-required="true"
      aria-label="Email"
      v-model="user.email"
      type="email"
      placeholder="Email">
    
    <div class="mdev-action-group u-text-center">
      <button
        @click="reset"
        aria-label="Reset Password"
        class="mdev-base-btn mdev-action-btn"> {{ $t("auth.reset.action") }} </button>
    </div>
  </div> 
</template>

<script>
  export default {
   name: "ResetComponent",

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
      if (
        this.$validate.validateFields(formFields, this.$t("validation.errors.form")) &&
        this.$validate.validateEmail(emailField, this.$t("validation.errors.email"))
      ){
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
    }
   }
  };
</script>

<style lang="scss">

</style>
