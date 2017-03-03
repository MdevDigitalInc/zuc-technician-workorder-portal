<template>
 <div class="mdev-main-wrapper">
    <div class="">
      <h2> Reset </h2>
      <input v-model="user.email" type="text" placeholder="Email">
      <button @click="reset"> reset </button>
      <hr>
      <p>
        Don't have an account? <router-link to="/auth/register"> Sign Up! </router-link>
      </p>
    </div>
 </div> 
</template>

<script>
  export default {
   name: "RegisterComponent",

   data: function() {
    return{
      user:{
        email: ""
      }
    };
   },

   methods: {
    register: function() {
      this.$http.post("user.json", this.user)
        .then(function(res){
          alertify.success('You have Successfully Created a User.');
          alertify.success('You will be redirected to Login shortly...');
        });
      console.log(this.user);
    }
   }
  };
</script>

<style lang="scss" scoped>

</style>
