var DatePlugin = {
  // [ Moreira Development ] 
  // Author: Lucas Moreira
  // email: lucas@moreiradevelopment.io
  // ------------------------------------|
  // Date Helper Plugin
  // ------------------------------------|
  //
  // This plugin abstracts some of the 
  // common Auth functions into a single place
  // for ease of use and maintenance.
  
  // Retrieve Date from Storage
  getDate: function (timeStamp){
    // Create Date Object
    var options = {timeZone: 'America/Toronto', hour12: true}
    var time = new Date(timeStamp * 1000);
    var formattedDate = time.toLocaleDateString('en-CA', options);
    return{
      formattedDate
    };
  },
  getTime: function (timeStamp){
    // Create Date Object
    var options = {timezone: 'Toronto', hour12: true}
    var time = new Date(timeStamp * 1000);
    var formattedTime = time.toLocaleTimeString('en-CA', options);
    return{
      formattedTime
    };
  }
  // Retrieve Time
};

export default function(Vue){
  Vue.datePlugin = DatePlugin;

  Object.defineProperties(Vue.prototype, {
    
    $datePlugin: {
      get: function() {
        return Vue.datePlugin;
      }
    }
  });
};
