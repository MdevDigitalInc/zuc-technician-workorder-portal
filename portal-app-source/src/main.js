// [ Moreira Development ] Project Entry --------------------------
// Author: Lucas Moreira - l.moreira@live.ca

// [ Vue.js ] -------------------------------------------
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';

// Import Routes & Central Stores
import { routes  } from './routes.js';
//import store from './store/store.js';

// Import Auth Plugin
import Auth from './plugins/auth.js';
import Validate from './plugins/validate.js';

// [ i18n - Internationalization ] ----------------------

// Configure I18n Internationalization Locales
import en from './locales/en.js';
import pt from './locales/pt.js';
const locales = {
  en,
  pt
};

// Initialize vue-resource | vue-router | vue-i18n
Vue.use(VueI18n);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Auth);
Vue.use(Validate);
Vue.use(require('vue-moment'));

// Set Language Default [ ENGLISH ]
Vue.config.lang = 'en';

// Create Global Method for accepting language change
Vue.prototype.$locale = {
  change (lang) {
    Vue.config.lang = lang;
  },
  current () {
    return Vue.config.lang;
  }
};

// Set Key:value pairs for translation keys
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang]);
});
//-----------------------------------------------[ i18n ]

// [ Vue Resource ] ------------------------------------

// Set Global Intercept 
Vue.http.interceptors.push( (request, next) => {
  console.log(request);
  // To use when defining a single API that is not firebase
  if (request.url[0] === '/'){
    // Point Requests to API server
    request.url = "http://getpaid.zucora.com:5003" + request.url;
    // Attach header
    var token = Vue.auth.getToken();
    if (token) {
      request.headers.set('Authorization', token);
    }
  }
  next( function(response){
    console.log(response);
    if (response.status == 422){
      alertify.error(response.body.error);
    }
  }); 
});
//--------------------------------------[ vue-resource ]

// [ Vue-Router ] ------------------------------------
// --------------------------------
// Server must be set to AWLAYWAS return
// [index.html] file for history mode to work.
//
// History mode in vue-router permits forgoing
// the ugly "#" hash syntax on Url's.
//
const router = new VueRouter ({
  routes: routes,
  mode: 'history',

  //Control Scrolling Behavior
  scrollBehavior( to, from, savedPOsition ){
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  }
});

// Navigation Guards
router.beforeEach(function( to, from, next){
  // If user is Logged In and tries to reach Login Page - redirect to Dashboard
  if (to.matched.some( function(record) { return record.meta.requiresGuest; } ) && Vue.auth.loggedIn()) {
    next({
      path: '/dashboard'
    });
  }
  else if (to.matched.some( function(record) { return record.meta.requiresAuth; } ) && !Vue.auth.loggedIn()) {
    next({
      path: '/'
    });
  }
  else {
    next();
  }

});

//--------------------------------------[ vue-router ]



// [ Main Vue Instance ] ----------------------------
new Vue({
  el: '#app',
  http: {
    root: '/root',
    headers: {
      Authorization: 'Basic YXBp0nBhc3N3b3Jk'
    }
  },
  router,
  //store,
  render: h => h(App)
});
