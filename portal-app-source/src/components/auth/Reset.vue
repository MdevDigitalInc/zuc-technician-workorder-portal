<template>
  <div class="mdev-form-group" @keyup.enter="reset">
    <h1 class="u-text-center">{{ $t("auth.reset.title") }}</h1>
    
    <input
      data-required
      tab-index="1"
      aria-required="true"
      aria-label="Email"
      v-model="user.email"
      type="email"
      placeholder="Email">
    
    <div class="mdev-action-group u-text-center">
      <button
        tab-index="2"
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
        this.$http.post("/auth/sendResetEmail", this.user)
          .then(function(res){
            // Notify User
            alertify.success(res.body.message);
            // Store Token
            // Redirect
            this.$router.push('/auth/login');
          });
       }
    }
   }
  };
</script>

<style lang="scss">

</style>
