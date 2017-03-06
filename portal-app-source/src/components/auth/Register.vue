<template>
  <div class="mdev-form-group">
    <h1>Work Order Portal Registration</h1>

    <input v-model="user.email" type="email" placeholder="Email" >
    <input v-model="user.firstname" type="text" placeholder="First name" >
    <input v-model="user.lastname" type="text" placeholder="Last name" >
    <input v-model="user.password" type="password" placeholder="Password" >
    <div class="mdev-action-group u-text-center">
      <button @click="register" class="mdev-base-btn mdev-action-btn">Register</button>
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
      this.$http.post("/user.json", this.user)
        .then(function(res){
          alertify.success('You have Successfully Created a User.');
          alertify.success('You will be redirected to Login shortly...');
        }).done();
      
      console.log(this.user);
    }
   }
  };
</script>

<style lang="scss">

</style>
