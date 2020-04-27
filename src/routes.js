import Dashboard from "./views/Dashboard.jsx";
import MarketingDashBoard from "./views/MarketingDashBoard.jsx";

import RetailerShop from "./views/retailShop/retailerShop.jsx";

import AddNewShop from "./views/retailShop/addNewShop.jsx";
import SingleShop from "./views/retailShop/./viewSingleShop.jsx";
import { MyFancyComponent } from "./adminComponents/googleMap/googleMap";
import AddProductToShop from "./views/retailShop/addItemsToShop";
import PreReg from "./views/preRegistration/preReg";
import Users from "./views/userManagement/users";
import SingleShopEdit from "./views/retailShop/singleShopEdit";

import CustomerDetails from "./views/customer/CustomerDetails";
import MarketingCustomer from "./views/marketing/customers/marketingCustomers.jsx";

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
import StoreWallet from "./views/store/StoreWallet.jsx";
import ViewStoreDetails from "./views/store/ViewStoreDetails.jsx";
import storeWalletPreSettlement from "./views/store/storeWalletPreSettlement.jsx";
import storeWalletDownloadStatement from './views/store/storeWalletDownloadStatement'


import ViewAllPreTransactions from "./views/wallet/viewAllPreTransactions.jsx";
import DownloadWalletStatement from "./views/wallet/storeWalletDownloadStatement.jsx";

import Foodji from "./views/foodJi/foodji";
import OkkjiSelect from "./views/okkjiSelect/okkjiSelect";
import Order from "./views/order/order";
import OrderViewDetails from "./views/order/OrderViewDetails.jsx";
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
import StoreReward from "./views/store/StoreReward.jsx";

import StoreCustomerPayment from "./views/store/StoreCustomerPayment.jsx"

import StoreOrder from "./views/store/StoreOrder.jsx"
import StoreCurrentOrder from "./views/store/StoreCurrentOrder.jsx"
import CouponForm from "./views/coupon/CouponForm.jsx"
import AddFAQ  from "./views/coupon/AddFAQ.jsx"
import AddFAQDetail  from "./views/coupon/AddFAQDetail.jsx"
import CouponAddFormDetails from "./views/coupon/CouponAddFormDetails.jsx"
import CommingSoon from "./views/commingsoon/CommingSoon.jsx"
import AddPage  from "./views/coupon/AddPage.jsx"
import AddPageDetails  from "./views/coupon/AddPageDetails.jsx"
import StoreTotalSale from "./views/store/StoreTotalSale.jsx"
import AddCity  from "./views/coupon/AddCity.jsx"
import AddCityDetail  from "./views/coupon/AddCityDetail.jsx"
import FeedbackSettings from './views/feedbackSettings/feedbackSettings.jsx';
import TrustedBy from  './views/trusted/TrustedBy.jsx';
import TargetDetails  from  './views/target/TargetDetails.jsx';
import TargetViewDetails from  './views/target/TargetViewDetails.jsx';
import TargetSellViewDetails from './views/target/TargetSellViewDetails.jsx';
import TargetAddCustomerViewDetails from './views/target/TargetAddCustomerViewDetails.jsx';
import TargetHistoryViewDetails from './views/target/TargetHistoryViewDetails.jsx';


import CommonWallet from './views/wallet/commonWallet';

import AllProducts from './views/product/allProducts.jsx';

//Marketing Page import

import MStore from "./views/marketing/store/MStore.jsx";

import MStoreViewDetails from "./views/marketing/store/MStoreViewDetails.jsx"
import MStoreAddProduct from "./views/marketing/product/MStoreAddProduct.jsx"
import MStoreAddNewShop from "./views/marketing/store/MStoreAddNewShop.jsx"
import LanuageSettings from "./views/settings/languageSetting.jsx";
import Region from './views/Region/region';
import marketingCustomerDetails from "./views/marketing/customers/marketingCustomerDetails.jsx"
import MarketingAddNewCustomer from "./views/marketing/customers/MarketingAddNewCustomer.jsx"
import MainComponent from "./views/userfirebase/MainComponent.jsx";

var routes = [
  /* --------------------Side Bar Routes Starts-------------------- */

  { path: "/dashboard", onSideBar: true, name: "Dashboard", icon: "nc-icon nc-bank", component: Dashboard, layout: "/admin" },
  { path: "/market-dashboard", onSideBar: true, name: "Marketing Dashboard", icon: "nc-icon nc-bank", component: MarketingDashBoard, layout: "/admin" },
  
  
  // { path: "/shops", onSideBar: true, name: "Store", icon: "nc-icon nc-shop", accessTo: ["admin", "market"], component: RetailerShop, layout: "/admin" },
  { path: "/shops", onSideBar: true, name: "Retail Store", icon: "nc-icon nc-shop", accessTo: ["admin", "market"], component: StoreDetails, layout: "/admin" },
  { path: "/customer", onSideBar: true, name: "Customer", icon: "far fa-user", component: CustomerDetails, accessTo: ["admin"], layout: "/admin" },
  { path: "/new-customer", onSideBar: true, name: "New Customer", icon: "far fa-user", component: MarketingCustomer, accessTo: ["admin"], layout: "/admin" },
  
  { path: "/region", onSideBar: true, name: "Region", icon: "fa fa-globe", component: Region, accessTo: ["admin"], layout: "/admin" },
  { path: "/profucts", onSideBar: true, name: "Products", icon: "fa fa-globe", component: AllProducts, accessTo: ["admin"], layout: "/admin" },

  // notification routes
  { path: "/notification", name: "Push Notification", onSideBar:false, icon: "far fa-bell", component: Notification, layout: "/admin"},
  { path: "/EmailNotification", name: "Email Notification", onSideBar:false, icon: "far fa-bell", component: EmailNotification, layout: "/admin"},
  
  // notification submenu
  { type: 'subMenu', onSideBar: true, icon: 'nc-icon nc-bell-55', subMenuTitle: 'Notification', routes: [
      { path: "/notification", onSideBar: true, name: "Push Notification", icon: "far fa-bell", component: Notification, layout: "/admin", type: 'subMenu', subMenuTitle: 'Notification' },
      { path: "/EmailNotification", onSideBar: true, name: "Email Notification", icon: "far fa-bell", component: EmailNotification, layout: "/admin", type: 'subMenu', subMenuTitle: 'Notification' }
    ]
  },

  { path: "/settings/feedbackSettings", name: "Feedback Settings", onSideBar:false, icon: "far fa-bell", component: FeedbackSettings, layout: "/admin"},
  { path: "/settings/language", name: "Language Settings", onSideBar:false, icon: "far fa-bell", component: LanuageSettings, layout: "/admin"},
  // settings submenu
  { type: 'subMenu', onSideBar: true, icon: 'fa fa-cog', subMenuTitle: 'Settings', routes: [
    { path: "/settings/feedbackSettings", onSideBar: true, name: "Feedback Settings", icon: "far fa-bell", component: FeedbackSettings, layout: "/admin", type: 'subMenu', subMenuTitle: 'Settings' },
    { path: "/catalogue-settings", onSideBar: true, name: "Store Catalogue", icon: "nc-icon nc-tag-content", accessTo: ["admin", "market"], component: Categories, layout: "/admin" },
    { path: "/settings/language", name: "Language Settings", onSideBar:true, icon: "far fa-bell", component: LanuageSettings, layout: "/admin"},
  ]},

  { path: "/trusted", onSideBar: true, name: "Trusted By", icon: "nc-icon nc-tag-content", accessTo: ["admin", "market"], component: TrustedBy, layout: "/admin" },    
  { path: "/target", onSideBar: true, name: "Target", icon: "nc-icon nc-tag-content", accessTo: ["admin", "market"], component: TargetDetails, layout: "/admin" },    
  { path: "/market/view-details/:ViewId", onSideBar: false, name: "Target", icon: "nc-icon nc-tag-content", accessTo: ["admin", "market"], component: TargetViewDetails, layout: "/admin" },    
  { path: "/TSell/view-details/:ViewId", onSideBar: false, name: "Target", icon: "nc-icon nc-tag-content", accessTo: ["admin", "market"], component: TargetSellViewDetails, layout: "/admin" },    
  { path: "/TAddCust/view-details/:ViewId", onSideBar: false, name: "Target", icon: "nc-icon nc-tag-content", accessTo: ["admin", "market"], component: TargetAddCustomerViewDetails, layout: "/admin" },    
  { path: "/THistory/view-details/:ViewId", onSideBar: false, name: "Target", icon: "nc-icon nc-tag-content", accessTo: ["admin", "market"], component: TargetHistoryViewDetails, layout: "/admin" },    


  // -------------------common components starts -----------------------
  
  { path: "/store/wallet", onSideBar: false, name: "Store Wallet", icon: "nc-icon nc-money", accessTo: ["admin", "market"], component: StoreWallet, layout: "/admin" },
  { path: "/customer/wallet", onSideBar: false, name: "Customer Wallet", icon: "nc-icon nc-tag-content", accessTo: ["admin", "market"], component: CustomerWallet, layout: "/admin" },

  // -------------------common components ends -----------------------

  { path: "/catalogue-settings", onSideBar: false, name: "Store Catalogue", icon: "nc-icon nc-tag-content", accessTo: ["admin", "market"], component: Categories, layout: "/admin" },
  { path: "/user", onSideBar: true, name: "User", icon: "nc-icon nc-satisfied", component: Users, accessTo: ["admin"], layout: "/admin" },
  { path: "/Order", onSideBar: true, name: "Order", icon: "nc-icon nc-app", component: Order, layout: "/admin" },
  { path: "/Order/view-details", onSideBar: false, name: "Order", icon: "nc-icon nc-app", component: OrderViewDetails, layout: "/admin" },


  
  { path: "/TotalSale", onSideBar: true, name: "Total Sale", icon: "fa fa-pie-chart", component: TotalSale, layout: "/admin" },
  
  { path: "/customer-notification", name: "Customer Notification", onSideBar:false, icon: "far fa-bell", component: CustomerNotification, layout: "/admin", subMenuTitle: 'Customer Notification' },
  { path: "/customer-offer", name: "Customer Offer", onSideBar:false, icon: "far fa-bell", component: CustomerOffer, layout: "/admin", subMenuTitle: 'Customer Offer' },

  { path: "/Payment", onSideBar: true, name: "Payment", icon: "nc-icon nc-money-coins", component: Payment, layout: "/admin" },
  { path: "/StoreSettelment", onSideBar: true, name: "Store Settelment", icon: "fa fa-credit-card", component: StoreSettelment, layout: "/admin" },
  { path: "/foodji", onSideBar: true, name: "Foodji", icon: "fa fa-beer", accessTo: ["admin"], component: Foodji, layout: "/admin" },
  { path: "/OkkjiSelect", onSideBar: true, name: "OkkjiSelect", icon: "nc-icon nc-bulb-63", component: OkkjiSelect, layout: "/admin" },
  { path: "/blog", onSideBar: true, name: "Blog", icon: "fa fa-pencil-square-o", component: BlogDetails, accessTo: ["admin"], layout: "/admin" },
  { path: "/pre-registration", onSideBar: true, name: "Pre Registrations", icon: "nc-icon nc-badge", accessTo: ["admin"], component: PreReg, layout: "/admin" },
  { path: "/Setting", onSideBar: true, name: "Setting", icon: "fa fa-cog", component: Setting, layout: "/admin" },
  { path: "/commingsoon/", onSideBar: false, name: "Total Sale", icon: "nc-icon nc-chat-33", accessTo: ["admin"], component: CommingSoon, layout: "/admin" },

  { path: "/location", onSideBar: true, name: "Location", icon: "nc-icon nc-map-big", component: CommingSoon, accessTo: ["admin"], layout: "/admin" },
  { path: "/incentive", onSideBar: true, name: "Incentive", icon: "nc-icon nc-money-coins", component: CommingSoon, accessTo: ["admin"], layout: "/admin" },
  { path: "/target", onSideBar: true, name: "Target", icon: "nc-icon nc-spaceship", component: CommingSoon, accessTo: ["admin"], layout: "/admin" },
  { path: "/support", onSideBar: true, name: "Support", icon: "nc-icon nc-support-17", component: CommingSoon, accessTo: ["admin"], layout: "/admin" },

  { path: "/store/product/:storeId", onSideBar: false, name: "Product", icon: "fa fa-credit-card", component: ProductDetails, layout: "/admin" },

  { path: "/messages", onSideBar: true, name: "Messages", icon: "fa fa-pencil-square-o", component: MessagesPage, accessTo: ["admin"], layout: "/admin" },

  { path: "/store/wallet", onSideBar: false, name: "Wallet", icon: "fa fa-money", accessTo: ["admin"], component: StoreWallet, layout: "/admin" },
  { path: "/store/wallet/pre-settelments", onSideBar: false, name: "Wallet", icon: "fa fa-money", accessTo: ["admin"], component: storeWalletPreSettlement, layout: "/admin" },
  { path: "/store/wallet/download-statement", onSideBar: false, name: "Wallet", icon: "fa fa-money", accessTo: ["admin"], component: storeWalletDownloadStatement, layout: "/admin" },
  { path: "/store/reward", onSideBar: false, name: "Reward", icon: "fa fa-money", accessTo: ["admin"], component: StoreReward, layout: "/admin" },
  
  { path: "/store/cust-payment", onSideBar: false, name: "Customer Payment", icon: "fa fa-money", accessTo: ["admin"], component: StoreCustomerPayment, layout: "/admin" },
  { path: "/store/cust-order", onSideBar: false, name: "Store Order", icon: "fa fa-money", accessTo: ["admin"], component: StoreOrder, layout: "/admin" },
  { path: "/store/current-order", onSideBar: false, name: "Store Current Order", icon: "fa fa-money", accessTo: ["admin"], component: StoreCurrentOrder, layout: "/admin" },
  
  { path: "/store/total-sale", onSideBar: false, name: "Store Total Sale", icon: "fa fa-money", accessTo: ["admin"], component: StoreTotalSale, layout: "/admin" },
  
  { path: "/coupon", onSideBar: true, name: "Create Coupon", icon: "fa fa-money", accessTo: ["admin"], component: CouponForm, layout: "/admin" },
  { path: "/coupon/coupon-add", onSideBar: false, name: "Coupon List", icon: "fa fa-money", accessTo: ["admin"], component: CouponAddFormDetails, layout: "/admin" },
  
  { path: "/faq/add-faq", onSideBar: true, name: "Add Faq", icon: "fa fa-money", accessTo: ["admin"], component: AddFAQDetail, layout: "/admin" },
  { path: "/faq/add-faq-list", onSideBar: false, name: "Coupon Add", icon: "fa fa-money", accessTo: ["admin"], component: AddFAQ, layout: "/admin" },
  
  { path: "/add-page", onSideBar: true, name: "Add Page", icon: "fa fa-money", accessTo: ["admin"], component: AddPage, layout: "/admin" },
  { path: "/coupon/add-pagedetails", onSideBar: false, name: "Page Details", icon: "fa fa-money", accessTo: ["admin"], component: AddPageDetails, layout: "/admin" },

  { path: "/add-city", onSideBar: true, name: "Add City Module", icon: "fa fa-money", accessTo: ["admin"], component: AddCity, layout: "/admin" },
  { path: "/add-citydetails", onSideBar: false, name: "City Module", icon: "fa fa-money", accessTo: ["admin"], component: AddCityDetail, layout: "/admin" },
  
  
  /* --------------------Side Bar Routes Ends-------------------- */
  
  /* --------------------Other Routes -------------------------- */

//Marketing Route

{ path: "/mstore/storeviewDdetails/:mstoreId", onSideBar: false, name: "Store Details", icon: "nc-icon nc-shop", component: MStoreViewDetails, layout: "/admin" },
{ path: "/mproduct/product/:mprodId", onSideBar: false, name: "Add Product", icon: "nc-icon nc-shop", component: MStoreAddProduct, layout: "/admin" },
{ path: "/mshops/add-new-shop", name: "Add New Shop", icon: "nc-icon nc-shop", component: MStoreAddNewShop, accessTo: ["admin", "market"], layout: "/admin" },

{ path: "/mcustomer/cust-details", onSideBar: true, name: "M Customer", icon: "nc-icon nc-shop", accessTo: ["admin"], component: marketingCustomerDetails, layout: "/admin" },
{ path: "/Addcustomer/add-customer", onSideBar: true, name: "M Customer", icon: "nc-icon nc-shop", accessTo: ["admin"], component: MarketingAddNewCustomer, layout: "/admin" },
{ path: "/maincomponent", onSideBar: true, name: "Customer Add", icon: "nc-icon nc-shop", accessTo: ["admin"], component: MainComponent, layout: "/admin" },
  


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
