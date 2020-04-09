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
import CustomerWallet from "./views/customer/CustomerWallet.jsx";
import CustomerAllTransactions from "./views/customer/CustomerWalletAllTransactions.jsx";
import CustomerWalletDownloadStatement from "./views/customer/customerWalletDownloadStatements.jsx";
import CustomerOkkjiKhataBook from "./views/customer/CustomerKhataBook.jsx";
import CustomerKhataBookUdaarSingleView from "./views/customer/CustomerKhataBookUdaarSingleView.jsx";
import CustomerKhataPaymentHistory from "./views/customer/CustomerKhataPayementHistory.jsx";
import CustomerKhataPurchaseHistory from "./views/customer/CustomerKhataPurchaseHistory.jsx";
import CustomerKhataPurchaseHistorySingleOrder from "./views/customer/CustomerKhataPurchaseHistorySingleOrder.jsx";

import Categories from "./views/category/viewAllCategories.jsx";
import BlogDetails from "./views/blog/BlogDetails";
import BlogAdd from "./views/blog/BlogAdd.jsx";
import StoreDetails from "./views/store/StoreDetails.jsx";
import ViewStoreDetails from "./views/store/ViewStoreDetails.jsx";

import Wallet from "./views/wallet/wallet";
import ViewAllPreTransactions from "./views/wallet/viewAllPreTransactions.jsx";
import DownloadWalletStatement from "./views/wallet/storeWalletDownloadStatement.jsx";

import Foodji from "./views/foodJi/foodji";
import OkkjiSelect from "./views/okkjiSelect/okkjiSelect";
import Order from "./views/order/order";
import Payment from "./views/payment/payment";
import Setting from "./views/settings/setting";
import StoreSettelment from "./views/storeSettelment/storeSettelment";
import TotalSale from "./views/totalSale/totalSale";
import Notification from "./views/notification/notification";
import EmailNotification from "./views/notification/EmailNotification.jsx";
import MessagesPage from "./views/messages/MessagesPage.jsx";
import ProductDetails from "./views/product/ProductDetails.jsx";
import CustomerNotification from "./views/customernotification/CustomerNotification.jsx";
import CustomerOffer from "./views/customernotification/CustomerOffer.jsx";



var routes = [
  /* --------------------Side Bar Routes Starts-------------------- */
  { path: "/dashboard", onSideBar: true, name: "Dashboard", icon: "nc-icon nc-bank", component: Dashboard, layout: "/admin" },
  { path: "/shops", onSideBar: true, name: "Retailer Shop", icon: "nc-icon nc-shop", accessTo: ["admin", "market"], component: RetailerShop, layout: "/admin" },
  { path: "/customer", onSideBar: true, name: "Customer", icon: "far fa-user", component: CustomerDetails, accessTo: ["admin"], layout: "/admin" },
  { path: "/store", onSideBar: true, name: "Store", icon: "nc-icon nc-shop", accessTo: ["admin", "market"], component: StoreDetails, layout: "/admin" },
  { path: "/category", onSideBar: true, name: "Store Catalogue", icon: "nc-icon nc-tag-content", accessTo: ["admin", "market"], component: Categories, layout: "/admin" },
  { path: "/user", onSideBar: true, name: "User", icon: "nc-icon nc-satisfied", component: Users, accessTo: ["admin"], layout: "/admin" },
  { path: "/Order", onSideBar: true, name: "Order", icon: "nc-icon nc-app", component: Order, layout: "/admin" },
  { path: "/TotalSale", onSideBar: true, name: "Total Sale", icon: "fa fa-pie-chart", component: TotalSale, layout: "/admin" },
  
  { path: "/notification", onSideBar: true, name: "Push Notification", icon: "far fa-bell", component: Notification, layout: "/admin", subMenuTitle: 'Notification' },
  { path: "/EmailNotification", onSideBar: true, name: "Email Notification", icon: "far fa-bell", component: EmailNotification, layout: "/admin", subMenuTitle: 'Notification' },
  // { path: "/notification", name: "Push Notification", icon: "far fa-bell", component: Notification, layout: "/admin", subMenuTitle: 'Notification' },
  // { path: "/EmailNotification", name: "Email Notification", icon: "far fa-bell", component: EmailNotification, layout: "/admin", subMenuTitle: 'Notification' },

 //  { type: 'subMenu', onSideBar: true, icon: 'fa fa-pie-chart', subMenuTitle: 'Notification', routes: [
 //    { path: "/notification", onSideBar: true, name: "Push Notification", icon: "far fa-bell", component: Notification, layout: "/admin", type: 'subMenu', subMenuTitle: 'Notification' },
 //    { path: "/EmailNotification", onSideBar: true, name: "Email Notification", icon: "far fa-bell", component: EmailNotification, layout: "/admin", type: 'subMenu', subMenuTitle: 'Notification' }
 //  ]
 // },
  

  { path: "/Payment", onSideBar: true, name: "Payment", icon: "nc-icon nc-money-coins", component: Payment, layout: "/admin" },
  { path: "/StoreSettelment", onSideBar: true, name: "Store Settelment", icon: "fa fa-credit-card", component: StoreSettelment, layout: "/admin" },
  { path: "/foodji", onSideBar: true, name: "Foodji", icon: "fa fa-beer", accessTo: ["admin"], component: Foodji, layout: "/admin" },
  { path: "/OkkjiSelect", onSideBar: true, name: "OkkjiSelect", icon: "nc-icon nc-bulb-63", component: OkkjiSelect, layout: "/admin" },
  { path: "/blog", onSideBar: true, name: "Blog", icon: "fa fa-pencil-square-o", component: BlogDetails, accessTo: ["admin"], layout: "/admin" },
  { path: "/pre-registration", onSideBar: true, name: "Pre Registrations", icon: "nc-icon nc-badge", accessTo: ["admin"], component: PreReg, layout: "/admin" },
  { path: "/store/wallet", onSideBar: true, name: "Wallet", icon: "fa fa-money", accessTo: ["admin"], component: Wallet, layout: "/admin" },
  { path: "/Setting", onSideBar: true, name: "Setting", icon: "fa fa-cog", component: Setting, layout: "/admin" },
  {
    path: "/store/product/:storeId",
    onSideBar: false,
    name: "Product",
    icon: "fa fa-credit-card",
    component: ProductDetails,
    layout: "/admin"
  },
 {
    path: "/messages",
    onSideBar: true,
    name: "Messages",
    icon: "fa fa-pencil-square-o",
    component: MessagesPage,
    accessTo: ["admin"],
    layout: "/admin"
  },

  /* --------------------Side Bar Routes Ends-------------------- */
  
  /* --------------------Other Routes -------------------------- */

  //store wallet routes 
  { path: "/store/wallet/view-all-pre-transactions", name: "View All Pre Transactions", component: ViewAllPreTransactions, accessTo: ["admin", "market"], layout: "/admin" },
  { path: "/store/wallet/download-statement", name: "Download Statement", component: DownloadWalletStatement, accessTo: ["admin", "market"], layout: "/admin" },
  
  //customer wallet routes
  { path: "/customer/customer-wallet/transactions", name: "All Transactions", component: CustomerAllTransactions, accessTo: ["admin", "market"], layout: "/admin" },
  { path: "/customer/customer-wallet/DownloadStatement/:custId", name: "Download Statement", component: CustomerWalletDownloadStatement, accessTo: ["admin", "market"], layout: "/admin" },
  { path: "/customer/customer-wallet/:custId", name: "Customer Wallet", component: CustomerWallet, accessTo: ["admin", "market"], layout: "/admin" },
  { path: "/customer/singlecustomer/:custId", onSideBar: false, name: "Customer Details", icon: "nc-icon nc-shop", component: ViewDetailsCustomer, layout: "/admin" },
  { path: "/customer/okkji-khata/udaar/:custId", onSideBar: false, name: "Udhhar Associated Store", icon: "nc-icon nc-shop", component: CustomerKhataBookUdaarSingleView, layout: "/admin" },   
  { path: "/customer/okkji-khata/payment-history", onSideBar: false, name: "Payment History", icon: "nc-icon nc-shop", component: CustomerKhataPaymentHistory, layout: "/admin" },
  { path: "/customer/okkji-khata/purchase-history", onSideBar: false, name: "Purchase History", icon: "nc-icon nc-shop", component: CustomerKhataPurchaseHistory, layout: "/admin" },   
  { path: "/customer/okkji-khata/purchase-history/view-order", onSideBar: false, name: "View Order", icon: "nc-icon nc-shop", component: CustomerKhataPurchaseHistorySingleOrder, layout: "/admin" },
  { path: "/customer/okkji-khata/:custId", onSideBar: false, name: "Customer Details", icon: "nc-icon nc-shop", component: CustomerOkkjiKhataBook, layout: "/admin" },   

  { path: "/store/viewstoredetails/:storeId", onSideBar: false, name: "Store Details", icon: "nc-icon nc-shop", component: ViewStoreDetails, layout: "/admin" },
  { path: "/shops/single/:shopId", onSideBar: false, name: "Single Shop", icon: "nc-icon nc-shop", component: SingleShop, layout: "/admin" },
  { path: "/shops/add-new", name: "Add New Shop", icon: "nc-icon nc-shop", component: AddNewShop, accessTo: ["admin", "market"], layout: "/admin" },
  { path: "/shops/single/edit/:shopId", onSideBar: false, name: "Edit Shop", icon: "nc-icon nc-shop", component: SingleShopEdit, layout: "/admin" },
  { path: "/shops/add-item/:shopId?", onSideBar: false, name: "Add Product", icon: "nc-icon nc-shop", component: AddProductToShop, layout: "/admin" },
  { path: "/blog/add-blog/:blogId", onSideBar: false, name: "Add Blog", icon: "far fa-user", component: BlogAdd, accessTo: ["admin"], layout: "/admin" },
  //google map Component
  { path: "/map", onSideBar: false, name: "map", icon: "nc-icon nc-shop", component: MyFancyComponent, layout: "/admin"  }
];
export default routes;
