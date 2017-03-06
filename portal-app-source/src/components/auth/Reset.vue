<template>
  <div class="mdev-form-group">
    <h1>Password Reset</h1>
    <input v-model="user.email" type="text" placeholder="Email">
    <div class="mdev-action-group u-text-center">
      <button @click="reset" class="mdev-base-btn mdev-action-btn"> reset </button>
    </div>
  </div> 
</template>

<script>
  export default {
   name: "RegisterComponent",

   data: function() {
    return{
      user:{
        email : ""
      }
    };
   },

   methods: {
    reset: function() {
      this.$http.post("user.json", this.user)
        .then(function(res){
          alertify.success('You have Successfully Reset your Password');
        });
      console.log(this.user);
    }
   }
  };
</script>

<style lang="scss">

</style>
