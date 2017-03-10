// Import Parent Compontents
import Dashboard from './components/parent-templates/dashboard.vue';
import Auth from './components/auth/Authentication.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Reset from './components/auth/Reset.vue';
import ChangePwd from './components/auth/ChangePWD.vue';
import WorkOrderList from './components/modules/work-order-list.vue';
import WorkOrderDetail from './components/modules/work-order-details.vue';

// Export routes as named constant array.
// Routes consist of desired path + bound parent component
export const routes = [
  {
    path: '',
    redirect: '/auth'
  },
  {
    path:'/auth',
    component: Auth,
    redirect: '/auth/login',
    children: [
      {
        path: "login",
        component: Login
      },
      {
        path: "register",
        component: Register
      },
      {
        path: "reset",
        component: Reset
      },
      {
        path: "changepwd",
        component: ChangePwd
      }
    ]
  },
  {
    path: '/dashboard',
    component: Dashboard,
    redirect: 'dashboard/list',
    children: [
      {
        path: 'list',
        component: WorkOrderList
      },
      {
        path: 'workorder/:id',
        component: WorkOrderDetail
      }
    ]
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
