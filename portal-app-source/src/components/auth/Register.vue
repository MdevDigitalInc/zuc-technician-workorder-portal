<template>
  <div class="mdev-form-group">
    <h1 class="u-text-center">{{ $t("auth.register.title") }}</h1>

    <input 
      data-required
      aria-required="true"
      aria-label="Email Field"
      v-model="user.email" 
      type="email" 
      :placeholder="$t('auth.register.email')" >

    <input 
      data-required
      aria-required="true"
      aria-label="First Name"
      v-model="user.firstname" 
      type="text" 
      :placeholder="$t('auth.register.firstName')" >

    <input 
      data-required 
      aria-required="true"
      aria-label="Last Name"
      v-model="user.lastname" 
      type="text" 
      :placeholder="$t('auth.register.lastName')" >
    
    <input 
      data-required 
      aria-required="true"
      aria-label="Password"
      v-model="user.password" 
      type="password" 
      :placeholder="$t('auth.register.pwd')" >
    
    <div class="mdev-action-group u-text-center">
      <button
        aria-label="Submit Registration"
        @click="register" 
        class="mdev-base-btn mdev-action-btn">{{ $t("auth.register.action") }}</button>
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
      var formFields = $('[data-required]');
      var emailField = $('input[type="email"]');
      
      // Validate Fields
      if (
        this.$validate.validateFields(formFields, this.$t("validation.errors.form")) &&
        this.$validate.validatePassword(this.user.password, this.$t("validation.errors.pwdTooShort")) &&
        this.$validate.validateEmail(emailField, this.$t("validation.errors.email"))
      ){      
        this.$http.post("user.json", this.user)
          .then(function(res){
            // Notify User
            alertify.success(this.$t("validation.messages.success.register"));
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
