import React from 'react';

export default class CustomerKhataPurchaseHistorySingleOrder extends React.Component {
	render(){
		return (
			<div className='content'>
				{/*-------------------------1---------------------*/}
				<div class="customer-filter wallet-row">
		          <div class="col-md-9">
		            <p>
		            Customer <i class="left-space fa fa-angle-right"></i> OkkJi Khata <i class="left-space fa fa-angle-right"></i> Purchase History <i class="left-space fa fa-angle-right"></i> View Order
		            </p>
		          </div>
		          <div class="filter-search col-md-3">
		            <p><i class="fa fa-search"></i></p>
		            <p><span class="filter-txt"> Filter</span> <img src="./assets/img/filterIcon.png"/></p>
		          </div>
		        </div>
				{/*-------------------------2---------------------*/}
				<div class="wallet-row">
		          <div class="col-lg-6 col-md-6 col-sm-6">
		            <div class="customer-wallet wallet-stats">
		              <div class="wallet-body">
		                <div class="wallet-row">
		                  <div class="customer-img text-center icon-warning">
		                     <img src="./assets/img/Profile-01.png" width="65"/>
		                  </div>
		                  <div class="numbers">
		                    <p class="card-category wallet-green">Ravi Kirana Store</p>
		                    <p class="card-title"><span class="wallet-green">Okk</span>P0001</p>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div class="col-lg-6 col-md-6 col-sm-6">
		            <div class="customer-wallet wallet-stats">
		              <div class="profile-body">
		                <div class="wallet-row">
		                  <div class="profile">
		                    <p class="orderid">Order ID: 987654321</p>
		                    <p class="address">Kanti Factory, Kankarbagh, Patna</p>
		                  </div>
		                  <div class="icon-warning">
		                     <img src="./assets/img/callIcon.png" class="call-img"/>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
				{/*-------------------------3---------------------*/}
				<div class="col-md-11 view-order">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive view-order-table">
                  <table class="table table-striped">
                    <thead>
                      <tr class="bottom-border">
                        <th scope="col">S NO.</th>
                        <th scope="col" class="border-left">Store Item</th>
                        <th scope="col" class="border-left">Rate</th>
                        <th scope="col" class="border-left">Quantity</th>
                        <th scope="col" class="border-left">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="no-bottom-border">
                        <td>01</td>
                        <td class="border-left">Aashirvad Multigrain Aata</td>
                        <td class="text-green border-left">05 Kg / ₹250</td>
                        <td class="border-left">01</td>
                        <td class="border-left text-green">Rs. 500</td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>02</td>
                        <td class="border-left">Water Bottle</td>
                        <td class="text-green border-left">01 L / ₹25</td>
                        <td class="border-left">02</td>
                        <td class="border-left text-green">Rs. 40</td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>03</td>
                        <td class="border-left">Nuterla Soya Big Chunks</td>
                        <td class="text-green border-left">90 Gms / ₹45</td>
                        <td class="border-left">05</td>
                        <td class="border-left text-green">Rs. 140</td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>04</td>
                        <td class="border-left">Britannia Atta Bread</td>
                        <td class="text-green border-left">400 Gms / ₹30</td>
                        <td class="border-left">03</td>
                        <td class="border-left text-green">Rs. 120</td>
                      </tr>
                    </tbody>
                  </table>
                 </div>
               </div>
             </div>
           </div>
       {/*-------------------------------------4--------------------------*/}
       <div class="col-md-11 total-pay">
                  <div class="row">
                   <div class="col-lg-6 col-md-6 col-sm-11">
                     <div class="to-pay pay-stats">
                       <div class="to-pay-body">
                         <div class="total-pay-row pay-bottom-border">
                           <div class="col-lg-6">
                             <div class="to-pay-text">
                               <p>Item Total</p>
                             </div>
                           </div>
                           <div class="col-lg-6">
                             <div class="to-pay-rate">
                               <p>₹ 530</p>
                             </div>
                           </div>
                         </div>
                         <div class="total-pay-row pay-bottom-border">
                           <div class="col-lg-6">
                             <div class="to-pay-text">
                               <p>Taxes &amp; Charges</p>
                             </div>
                           </div>
                           <div class="col-lg-6">
                             <div class="to-pay-rate">
                               <p>₹ 0</p>
                             </div>
                           </div>
                         </div>
                         <div class="total-pay-row">
                           <div class="col-lg-6">
                             <div class="to-pay-total-text">
                               <p>To Pay</p>
                             </div>
                           </div>
                           <div class="col-lg-6">
                             <div class="to-pay-total-rate">
                               <p>₹ 530</p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div class="col-lg-6 col-md-6 col-sm-11">
                     <div class="to-pay pay-stats">
                       <div class="to-pay-body2">
                         <div class="total-pay-row">
                           <div class="profile">
                             <p class="payment-status">Payment Status: Paid vai OKKJI Wallet</p>
                           </div>
                           
                         </div>
                         <div class="pay-store-address">
                             <div class="address-img">
                            <img src="./assets/img/locationIcon.png" width="30"/>
                             </div>
                             <div class="delivered-add">
                               <p class="delivered-text">Delivered to</p>
                               <p class="delivered-add-text">B-12, Hanuman Nagar, Kankarbagh</p>
                             </div>
                           </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
			</div>
		)
	}
}