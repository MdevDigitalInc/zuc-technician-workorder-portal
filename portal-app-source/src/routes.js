// Import Parent Compontents
import Dashboard from './components/parent-templates/dashboard.vue';
import Auth from './components/auth/Authentication.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Reset from './components/auth/Reset.vue';
import ChangePwd from './components/auth/ChangePWD.vue';
import WorkOrderList from './components/modules/work-order-list.vue';
import WorkOrderDetail from './components/modules/work-order-details.vue';
import BillingView from './components/modules/billing.vue';
import ErrorComponent from './components/parent-templates/errorpage.vue';

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
        component: Login,
        meta: { requiresGuest: true }
      },
      {
        path: "register",
        component: Register,
        meta: { requiresGuest: true }
      },
      {
        path: "reset",
        component: Reset,
        meta: { requiresGuest: true }
      },
      {
        path: "changepwd",
        component: ChangePwd,
        meta: { requiresAuth: true }
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
        component: WorkOrderList,
        meta: { requiresAuth: true }
      },
      {
        name: "details",
        path: 'workorder/:orderId',
        component: WorkOrderDetail,
        meta: { requiresAuth: true }
      },
      {
        path: 'billing',
        component: BillingView,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '*',
    component: ErrorComponent
  }

];
