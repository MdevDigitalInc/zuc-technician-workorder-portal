// [ Moreira Development ] Project Entry --------------------------
// Author: Lucas Moreira - l.moreira@live.ca

// [ Vue.js ] -------------------------------------------
import Vue          from 'vue';
import VueI18n      from 'vue-i18n';
import VueResource  from 'vue-resource';
import VueRouter    from 'vue-router';
import App          from './App.vue';

// Import Routes & Central Stores
import { routes  }  from './routes.js';
//import store from './store/store.js';

// Import Auth Plugin
import Auth         from './plugins/auth.js';
import Validate     from './plugins/validate.js';

// [ i18n - Internationalization ] ----------------------

// Configure I18n Internationalization Locales
import en from './locales/en.js';

const locales = {
  en
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

// [ Vue Resource ] ------------------------------------

// Set Global HTTP Request Intercept 
Vue.http.interceptors.push( (request, next) => {
  
  // All paths starting with '/' will default to API server
  if (request.url[0] === '/'){
    // Point Requests to API server
    request.url = "http://getpaid.zucora.com:5003" + request.url;
    // Get Token and attach to header
    var token = Vue.auth.getToken();
    if (token) {
      request.headers.set('Authorization', token);
    }
  }
  next( function(response){
    // If server responds with Error Code display error
    if (response.status >= 400){
      alertify.error(response.body.error);
      
      // If Server responds with invalid session token
      if (response.status === 422) {
        // Remove current token storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('authTokenExpiration');
        alertify.error("We're sorry but your session expired. Please Login to resume.");
        //location.reload();
        router.push('/');
      }
    }
  }); 
});
//--------------------------------------[ vue-resource ]


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
