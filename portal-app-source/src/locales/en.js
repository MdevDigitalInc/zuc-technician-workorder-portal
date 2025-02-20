export default {
  general: {
    navBack: "Back",
    print: "Print",
    serviced: "Serviced",
    unreachable: "Unreachable",
    address: "Address:",
    phone: "Phone:",
    business: "Business:",
    custId: "Customer ID:",
    dateAdd: "Date Added:",
    sortCode: "Sort Code:",
    date: "Date:",
    time: "Time:",
    back: "Back",
    delivery: "Delivery:",
    orderNum: "Order #",
    store: "Store:",
    search: "Customer Name, Order Number, Date(MM/DD/YYYY)",
    title: "Manage Work Orders",
    title404: "We're sorry but that URL doesn't exist.",
    changePwd: "Change Password",
    invoice: "Invoice Number",
    logout: "Logout"
  },
  redirect: {
    toLogin: "You Will Be Redirected to Login Shortly..."
  },
  auth: {
    register: {
      title: "Work Order Portal Registration",
      action: "register",
      email: "Email Address",
      firstName: "First Name",
      lastName: "Last Name",
      pwd: "Password"
    },
    login: {
      title: "Work Order Portal Login",
      action: "LogIn",
      reset: "forgot password?",
      email: "Email Address",
      pwd: "Password"
    },
    change:{
      title: "Change Password",
      action: "change",
      oldPwd: "Old Password",
      newPwd: "New Password",
      confirm: "Confirm New Password"
    },
    reset: {
      title: "Password Reset",
      action: "reset",
      email: "Email"
    }
  },
  validation: {
    errors: {
      form: "I think you missed something, please check the form.",
      email: "Please provide a valid Email address.",
      match: "New Passwords do not match.",
      pwdTooShort: "Passwords need a minimum of 6 characters.",
      date: "Please ensure the date is in the correct format MM/DD/YYYY."
    },
    messages: {
      success: { 
        register: "User successfully created, You will be redirected soon.",
        login: "Success",
        reset: "Password successfully reset.",
        change: "Password successfully changed.",
        statusChange: "Order Marked as Serviced and Removed From Active Work Orders."
      }
    }
  },
  orderList: {
    title: "Open Work Orders"
  },
  orderDetails: {
    title: "Wokorder Number: ",
    custInfo: "Customer Information",
    apptStatus: "Appointment Status",
    orderInfo: "Order Information",
    plans: "Plans",
    items: "Items",
    notes: "Notes",
    noPlans: "No Plans Available.",
    table: {
      quantity: "QTY",
      sku: "SKU",
      description: "Description",
      value: "Value"
    }
  },
  billing: {
    title: "Billing",
    summary: "Billing Summary",
    provider: "Service Provider",
    period: "Billing Period",
    orders: "Serviced Orders",
    total: "Total:",
    table: {
      orderId: "Order ID",
      custName: "Customer Name",
      workOrderVal: "Order Val.",
      dateServ: "Date Serviced",
      authMileage: "Mileage",
      authService: "Service"
    }
  },
  footer: {
    title: "Questions?",
    action: "Contact Support:",
    message: "1 800.388.2640 | Copyright ©",
    brand: "Zucora"
  }
};
