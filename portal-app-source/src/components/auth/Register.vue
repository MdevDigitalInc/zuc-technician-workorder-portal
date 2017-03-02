<template>
  <div class="mdev-main-wrapper">
    <h2>Register</h2>

    <input v-model="user.email" type="email" placeholder="Email" >
    <input v-model="user.username" type="text" placeholder="Username" >
    <input v-model="user.password" type="password" placeholder="Password" >
    <button @click="register">Register</button>
    <hr>
    <p>
      Already have an account? <router-link to="/auth/login">Login! </router-link>
    </p>
  </div>
</template>

<script>
  export default {
   name: "RegComponent",

   data: function(){
    return{
      user: {
        email: "",
        username: "",
        password: ""
      }
    };
   },
   methods: {
    register: function() {
      this.$http.post("user.json", this.user)
        .then(function(res){
          //Success
          console.log('success');
        })
        .catch(function(res){
          //Fail
          console.log('fail');
        });
      
      console.log(this.user);
    }
   }
  };
</script>

<style lang="scss" scoped>

</style>
