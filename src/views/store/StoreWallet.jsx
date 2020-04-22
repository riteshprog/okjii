import React from "react";

import wallet from "../../img/wallet/walletIcon.png";
import filterIcon from "../../img/wallet/filterIcon.png";
import profileOne from "../../img/wallet/Profile-01.png";
import downloadStatement from "../../img/wallet/downloadStatement.png";
import transaction from '../../img/wallet/transaction.png'
import CommonWallet from "../wallet/commonWallet";

export default class StoreWallet extends React.Component {
  render() {
    return(
      <CommonWallet
        pageTitle={['store', 'wallet']}
      />
    )
  }
}

// return (
//   <div className="content">
//     <div class="customer-filter wallet-row">
//       <div class="col-md-9">
//         <p>
//           Store <i class="left-space fa fa-angle-right"></i> Wallet
//         </p>
//       </div>
//       <div class="filter-search col-md-3">
//         <p>
//           <i class="fa fa-search"></i>
//         </p>
//         <p>
//           <span class="filter-txt"> Filter</span>
//           <img src={filterIcon} />
//         </p>
//       </div>
//     </div>

//     <div class="customer-wallets wallet-row">
//       <div class="col-lg-6 col-md-6 col-sm-6">
//         <div class="customer-wallet wallet-stats">
//           <div class="wallet-body">
//             <div class="wallet-row">
//               <div class=" wallet-img text-center icon-warning">
//                 <img src={wallet} width="70" />
//               </div>
//               <div class="numbers">
//                 <p class="card-category">
//                   <span class="wallet-green">OKK</span>JI WALLET
//                 </p>
//                 <p class="card-title">
//                   <span class="wallet-green">₹</span> 500.00
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="col-lg-6 col-md-6 col-sm-6">
//         <div class="customer-wallet wallet-stats">
//           <div class="profile-body">
//             <div class="wallet-row">
//               <div class="profile">
//                 <p class="card-category">Ravi Kumar Singh</p>
//                 <p class="card-title">
//                   <span class="wallet-green">Okk</span>P0001
//                 </p>
//               </div>
//               <div class="customer-img text-center icon-warning">
//                 <img src={profileOne} width="65" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div class="col-lg-12">
//       <div class="row justify-content-center">
//         <div class="col-lg-5 col-md-6 col-sm-6">
//           <a class="wallet-link" href="/admin/store/wallet/pre-settelments">
//             <div class="wallet-card wallet-card-stats">
//               <div class="wallet-card-body ">
//                 <div class="row">
//                   <div class="wallet-text row">
//                     <div class="icon-big text-center icon-warning">
//                       <img src={transaction} />
//                     </div>
//                     <div class="numbers">
//                       <p class="card-category">View Previous Settlement</p>
//                     </div>
//                   </div>
//                   <div class="arrow-icon">
//                     <i class="fa fa-chevron-right"></i>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </div>
//         <div class="col-lg-5 col-md-6 col-sm-6">
//           <a class="wallet-link" href="/admin/store/wallet/download-statement">
//             <div class="wallet-card wallet-card-stats">
//               <div class="wallet-card-body ">
//                 <div class="row">
//                   <div class="wallet-text row">
//                     <div class="icon-big text-center icon-warning">
//                       <img src={downloadStatement} />
//                     </div>
//                     <div class="numbers">
//                       <p class="card-category">Download Statement</p>
//                     </div>
//                   </div>
//                   <div class="arrow-icon">
//                     <i class="fa fa-chevron-right"></i>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>

//     <div class="col-md-12">
//       <div class="card">
//         <div class="card-body">
//           <div class="table-responsive customer-tnx-table">
//             <table class="table table-striped">
//               <thead>
//                 <tr class="bottom-border">
//                   <th scope="col">TIME</th>
//                   <th scope="col">DATE</th>
//                   <th scope="col">ORDER ID</th>
//                   <th scope="col">HIGHLIGHT</th>
//                   <th scope="col">TOTAL AMOUNT</th>
//                   <th scope="col">STATUS</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr class="no-bottom-border">
//                   <td>4:21 PM</td>
//                   <td>25 Mar</td>
//                   <td>
//                     <span>#</span> 98765476573
//                   </td>
//                   <td>Cash Payment to store</td>
//                   <td>
//                     <span>Rs. 1500</span>
//                   </td>
//                   <td>Success</td>
//                 </tr>
//                 <tr class="no-bottom-border">
//                   <td>4:21 PM</td>
//                   <td>25 Mar</td>
//                   <td>
//                     <span>#</span> 98765476573
//                   </td>
//                   <td>Pay Via Phone Wallet</td>
//                   <td>
//                     <span>Rs. 1500</span>
//                   </td>
//                   <td>Success</td>
//                 </tr>
//                 <tr class="no-bottom-border">
//                   <td>4:21 PM</td>
//                   <td>25 Mar</td>
//                   <td>
//                     <span>#</span> 98765476573
//                   </td>
//                   <td>Add in Wallet</td>
//                   <td>
//                     <span>Rs. 1500</span>
//                   </td>
//                   <td>Success</td>
//                 </tr>
//                 <tr class="no-bottom-border">
//                   <td>4:21 PM</td>
//                   <td>25 Mar</td>
//                   <td>
//                     <span>#</span> 98765476573
//                   </td>
//                   <td>Cash Payment to store</td>
//                   <td>
//                     <span>Rs. 1500</span>
//                   </td>
//                   <td>Success</td>
//                 </tr>
//                 <tr class="no-bottom-border">
//                   <td>4:21 PM</td>
//                   <td>25 Mar</td>
//                   <td>
//                     <span>#</span> 98765476573
//                   </td>
//                   <td>Pay Via Google Pay</td>
//                   <td>
//                     <span>Rs. 1500</span>
//                   </td>
//                   <td>Success</td>
//                 </tr>
//                 <tr class="no-bottom-border">
//                   <td>4:21 PM</td>
//                   <td>25 Mar</td>
//                   <td>
//                     <span>#</span> 98765476573
//                   </td>
//                   <td>Cash Payment to store</td>
//                   <td>
//                     <span>Rs. 1500</span>
//                   </td>
//                   <td>Success</td>
//                 </tr>
//                 <tr class="no-bottom-border">
//                   <td>4:21 PM</td>
//                   <td>25 Mar</td>
//                   <td>
//                     <span>#</span> 98765476573
//                   </td>
//                   <td>Cash Payment to store</td>
//                   <td>
//                     <span>Rs. 1500</span>
//                   </td>
//                   <td>Success</td>
//                 </tr>
//                 <tr class="no-bottom-border">
//                   <td>4:21 PM</td>
//                   <td>25 Mar</td>
//                   <td>
//                     <span>#</span> 98765476573
//                   </td>
//                   <td>Cash Payment to store</td>
//                   <td>
//                     <span>Rs. 1500</span>
//                   </td>
//                   <td>Success</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );