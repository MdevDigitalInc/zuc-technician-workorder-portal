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
    date: "Date:",
    time: "Time:",
    back: "Back",
    delivery: "Delivery:",
    orderNum: "Order #",
    store: "Store:",
    search: "Customer Name, Order Number, Date(MM/DD/YYYY)",
    title: "Manage Work Orders"
  },
  auth: {
    register: {
      title: "Work Order Portal Registration",
      action: "register",
      email: "Email",
      firstName: "First Name",
      lastName: "Last Name",
      pwd: "Password"
    },
    login: {
      title: "Work Order Portal Login",
      action: "LogIn",
      reset: "forgot password?",
      email: "Email",
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
      date: "Please ensure the date is in the correct format MM/DD/YYY."
    },
    messages: {
      success: { 
        register: "User successfully created, You will be redirected soon.",
        login: "Success",
        reset: "Password successfully reset.",
        change: "Password successfully changed."
      }
    }
  },
  orderList: {
    title: "Available Work Orders:"
  },
  orderDetails: {
    title: "Wokorder Number: ",
    custInfo: "Customer Information",
    apptDetails: "Appointment Details",
    orderInfo: "Order Information",
    notes: "Notes",
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
    table: {
      orderId: "Order ID",
      custName: "Customer Name",
      orderVal: "Order Val.",
      dateServ: "Date Serviced",
      appVal: "Application Val."
    }
  },
  footer: {
    title: "Questions?",
    action: "Contact Support:",
    message: "1 800.452.0101 | Copyright ©",
    brand: "Zucora"
  }
};
