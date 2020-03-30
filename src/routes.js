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
import Users from './views/userManagement/users';
import SingleShopEdit from './views/retailShop/singleShopEdit';

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
    path: "/shops/add-new",
    name: "Add New Shop",
    icon: "nc-icon nc-shop",
    component: AddNewShop,
    accessTo: ['admin', 'market'],
    layout: "/admin"
  },
  {
    path: "/shops",
    onSideBar: true,
    name: "Retailer Shop",
    icon: "nc-icon nc-shop",
    accessTo: ['admin', 'market'],
    component: RetailerShop,
    layout: "/admin"
  },
  {
    path: "/user",
    onSideBar: true,
    name: "User Mangement",
    icon: "nc-icon nc-satisfied",
    component: Users,
    accessTo: ['admin'],
    layout: "/admin"
  },
  {
    path: "/pre-registration",
    onSideBar: true,
    name: "Pre Registrations",
    icon: "nc-icon nc-badge",
    accessTo: ['admin'],
    component: PreReg,
    layout: "/admin"
  },

  /* --------------------Side Bar Routes Ends-------------------- */

  {
    path: "/shops/single/:shopId",
    onSideBar: false,
    name: "Single Shop",
    icon: "nc-icon nc-shop",
    component: SingleShop,
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

  //google map
  {
    path: "/map",
    onSideBar: false,
    name: "map",
    icon: "nc-icon nc-shop",
    component: MyFancyComponent,
    layout: "/admin"
  },

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
