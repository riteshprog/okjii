/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.jsx";
import RetailerShop from "./views/retailShop/retailerShop.jsx";
import AddNewShop from "./views/retailShop/addNewShop.jsx";
import SingleShop from "./views/retailShop/./viewSingleShop.jsx";
import { MyFancyComponent } from "./adminComponents/googleMap/googleMap";
import AddProductToShop from "./views/retailShop/addItemsToShop";
import PreReg from "./views/preRegistration/preReg";
import Users from "./views/userManagement/users";
import SingleShopEdit from "./views/retailShop/singleShopEdit";
import CustomerDetails from "./views/customer/CustomerDetails";
import ViewDetailsCustomer from "./views/customer/ViewDetailsCustomer.jsx";
import Categories from "./views/category/viewAllCategories.jsx";
import BlogDetails from "./views/blog/BlogDetails";
import BlogAdd from "./views/blog/BlogAdd.jsx";
import StoreDetails from "./views/store/StoreDetails.jsx";
import ViewStoreDetails from "./views/store/ViewStoreDetails.jsx";
import Wallet from "./views/wallet/wallet";
import Foodji from "./views/foodJi/foodji";
import OkkjiSelect from "./views/okkjiSelect/okkjiSelect";
import Order from "./views/order/order";
import Payment from "./views/payment/payment";
import Setting from "./views/settings/setting";
import StoreSettelment from "./views/storeSettelment/storeSettelment";
import TotalSale from "./views/totalSale/totalSale";
import Notification from "./views/notification/notification";
import EmailNotification from "./views/notification/EmailNotification.jsx";
import { notification } from "antd";

var routes = [
  /* --------------------Side Bar Routes Starts-------------------- */
  {
    path: "/dashboard",
    onSideBar: true,
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/shops",
    onSideBar: true,
    name: "Retailer Shop",
    icon: "nc-icon nc-shop",
    accessTo: ["admin", "market"],
    component: RetailerShop,
    layout: "/admin"
  },
  {
    path: "/customer",
    onSideBar: true,
    name: "Customer",
    icon: "far fa-user",
    component: CustomerDetails,
    accessTo: ["admin"],
    layout: "/admin"
  },
  {
    path: "/store",
    onSideBar: true,
    name: "Store",
    icon: "nc-icon nc-shop",
    accessTo: ["admin", "market"],
    component: StoreDetails,
    layout: "/admin"
  },
  {
    path: "/category",
    onSideBar: true,
    name: "Store Catalogue",
    icon: "nc-icon nc-tag-content",
    accessTo: ["admin", "market"],
    component: Categories,
    layout: "/admin"
  },
  {
    path: "/user",
    onSideBar: true,
    name: "User",
    icon: "nc-icon nc-satisfied",
    component: Users,
    accessTo: ["admin"],
    layout: "/admin"
  },
  {
    path: "/Order",
    onSideBar: true,
    name: "Order",
    icon: "nc-icon nc-app",
    component: Order,
    layout: "/admin"
  },
  {
    path: "/TotalSale",
    onSideBar: true,
    name: "Total Sale",
    icon: "fa fa-pie-chart",
    component: TotalSale,
    layout: "/admin"
  },
  {
    path: "/notification",
    onSideBar: true,
    name: "Push Notification",
    icon: "far fa-bell",
    component: Notification,
    layout: "/admin"
  },
  {
    path: "/EmailNotification",
    onSideBar: true,
    name: "Email Notification",
    icon: "far fa-bell",
    component: EmailNotification,
    layout: "/admin"
  },
   {
    path: "/Payment",
    onSideBar: true,
    name: "Payment",
    icon: "nc-icon nc-money-coins",
    component: Payment,
    layout: "/admin"
  },
  {
    path: "/StoreSettelment",
    onSideBar: true,
    name: "Store Settelment",
    icon: "fa fa-credit-card",
    component: StoreSettelment,
    layout: "/admin"
  },
  {
    path: "/foodji",
    onSideBar: true,
    name: "Foodji",
    icon: "fa fa-beer",
    accessTo: ["admin"],
    component: Foodji,
    layout: "/admin"
  },
  {
    path: "/OkkjiSelect",
    onSideBar: true,
    name: "OkkjiSelect",
    icon: "nc-icon nc-bulb-63",
    component: OkkjiSelect,
    layout: "/admin"
  },
  {
    path: "/blog",
    onSideBar: true,
    name: "Blog",
    icon: "fa fa-pencil-square-o",
    component: BlogDetails,
    accessTo: ["admin"],
    layout: "/admin"
  },
  {
    path: "/pre-registration",
    onSideBar: true,
    name: "Pre Registrations",
    icon: "nc-icon nc-badge",
    accessTo: ["admin"],
    component: PreReg,
    layout: "/admin"
  },
  {
    path: "/wallet",
    onSideBar: true,
    name: "Wallet",
    icon: "fa fa-money",
    accessTo: ["admin"],
    component: Wallet,
    layout: "/admin"
  },
  {
    path: "/Setting",
    onSideBar: true,
    name: "Setting",
    icon: "fa fa-cog",
    component: Setting,
    layout: "/admin"
  },

  /* --------------------Side Bar Routes Ends-------------------- */
  {
    path: "/customer/singlecustomer/:custId",
    onSideBar: false,
    name: "Customer Details",
    icon: "nc-icon nc-shop",
    component: ViewDetailsCustomer,
    layout: "/admin"
  },
  {
    path: "/store/viewstoredetails/:storeId",
    onSideBar: false,
    name: "Store Details",
    icon: "nc-icon nc-shop",
    component: ViewStoreDetails,
    layout: "/admin"
  },

  // {
  //   path: "/login/loginverify/:loginId",
  //   onSideBar: false,
  //   name: "Login Page",
  //   icon: "nc-icon nc-shop",
  //   component:   LoginPageOtp,
  //   layout: "/admin"
  // },

  {
    path: "/shops/single/:shopId",
    onSideBar: false,
    name: "Single Shop",
    icon: "nc-icon nc-shop",
    component: SingleShop,
    layout: "/admin"
  },
  {
    path: "/shops/add-new",
    name: "Add New Shop",
    icon: "nc-icon nc-shop",
    component: AddNewShop,
    accessTo: ["admin", "market"],
    layout: "/admin"
  },
  {
    path: "/shops/single/edit/:shopId",
    onSideBar: false,
    name: "Edit Shop",
    icon: "nc-icon nc-shop",
    component: SingleShopEdit,
    layout: "/admin"
  },

  {
    path: "/shops/add-item/:shopId?",
    onSideBar: false,
    name: "Add Product",
    icon: "nc-icon nc-shop",
    component: AddProductToShop,
    layout: "/admin"
  },
  {
    path: "/blog/add-blog/:blogId",
    onSideBar: false,
    name: "Add Blog",
    icon: "far fa-user",
    component: BlogAdd,
    accessTo: ["admin"],
    layout: "/admin"
  },

  //google map
  {
    path: "/map",
    onSideBar: false,
    name: "map",
    icon: "nc-icon nc-shop",
    component: MyFancyComponent,
    layout: "/admin"
  }

  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];
export default routes;
