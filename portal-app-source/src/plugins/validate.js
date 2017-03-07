var ValidatePlugin = {
  // [ Moreira Development ] 
  // Author: Lucas Moreira
  // email: lucas@moreiradevelopment.io
  // ------------------------------------|
  // Validation Helper Plugin
  // ------------------------------------|
  //
  // This plugin abstracts some of the 
  // common Auth functions into a single place
  // for ease of use and maintenance.

  validateFields: function(payload){
    // Initiate Loop Var
    var i;
    // Error Flag
    var errorPresent = false;
    
    for (i = 0; i < payload.length; i++){
      if (payload[i].value === ""){
        errorPresent = true;
        $(payload[i]).addClass('mdev-error');
      }
    }

    if (errorPresent === true) {
      return false;
    }
    else {
      return true;
    }
  },

  validateEmail: function(payload) {
    console.log(payload[0].value);
    console.log(payload);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(payload[0].value)){
      return true;
    }
    else {
      return false;
    }
  },

  clearErrors: function(){
    $('.mdev-error').removeClass('mdev-error');
  }

  
};

export default function(Vue){
  Vue.validate = ValidatePlugin;

  Object.defineProperties(Vue.prototype, {
    
    $validate: {
      get: function() {
        return Vue.validate;
      }
    }
  });
};
