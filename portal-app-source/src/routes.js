// Import Parent Compontents
import Dashboard from './components/parent-templates/dashboard.vue';
import AuthComponent from './components/auth/Authentication.vue';
import LoginComponent from './components/auth/Login.vue';
import RegisterComponent from './components/auth/Register.vue';
import ResetComponent from './components/auth/Reset.vue';
import ChangePwdComponent from './components/auth/ChangePWD.vue';

// Export routes as named constant array.
// Routes consist of desired path + bound parent component
export const routes = [
  {
    path: '',
    redirect: '/auth'
  },
  {
    path:'/auth',
    component: AuthComponent,
    redirect: '/auth/login',
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "reset",
        component: ResetComponent
      }
    ]
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/home1',
    component: Dashboard
  },
  {
    path: '/home2',
    component: Dashboard
  }
];
