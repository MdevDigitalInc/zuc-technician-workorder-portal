<template>
  <div class="mdev-form-group" @keyup.enter="register">
    <h1 class="u-text-center">{{ $t("auth.register.title") }}</h1>
    <!-- Email -->
    <input 
      data-required
      tab-index="1"
      aria-required="true"
      aria-label="Email Field"
      v-model="user.email" 
      type="email" 
      :placeholder="$t('auth.register.email')" >
    <!-- First Name -->
    <input 
      data-required
      tab-index="2"
      aria-required="true"
      aria-label="First Name"
      v-model="user.firstname" 
      type="text" 
      :placeholder="$t('auth.register.firstName')" >
    <!-- Last Name -->
    <input 
      data-required
      tab-index="3"
      aria-required="true"
      aria-label="Last Name"
      v-model="user.lastname" 
      type="text" 
      :placeholder="$t('auth.register.lastName')" >
    <!-- Password -->
    <input 
      data-required
      tab-index="4"
      aria-required="true"
      aria-label="Password"
      v-model="user.password" 
      type="password" 
      :placeholder="$t('auth.register.pwd')" >
    <!-- Action -->
    <div class="mdev-action-group u-text-center">
      <button
        tab-index="5"
        aria-label="Submit Registration"
        @click="register" 
        class="mdev-base-btn mdev-action-btn">{{ $t("auth.register.action") }}</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "RegisterComponent",

    // Instance Data Storage
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
      
      // Register Function
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
          this.$http.post("/auth/register", this.user)
            .then(function(res){
              // Notify User
              alertify.success(res.body.response + " " + this.$t("redirect.toLogin"));
              // Store Token
              this.$router.push('/auth/login');
            });
        }
      }
    }
  };
</script>

<style lang="scss"></style>
