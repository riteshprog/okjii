import React from 'react';

export default class CustomerKhataBook extends React.Component {
	render(){
		return (
			<div class='content'>
				{/* -----------------------Top Header Starts-------------------- */}
				<div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Customer <i class="left-space fa fa-angle-right"></i> OkkJi Khata
            </p>
          </div>
          <div class="filter-search col-md-3">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src="./assets/img/filterIcon.png"/></p>
          </div>
        </div>
				{/* -----------------------Top Header Ends-------------------- */}
				{/* -----------------------Header Starts-------------------- */}
				<div class="customer-wallets wallet-row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="customer-wallet wallet-stats">
              <div class="wallet-body">
                <div class="wallet-row">
                  <div class="text-center">
                     <img src="./assets/img/Profile-01.png" class="customer-img"/>
                  </div>
                  <div class="numbers">
                    <p class="card-category wallet-green">Ravi Kumar Singh</p>
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
                    <p class="contactno">9998888777</p>
                    <p class="address">Kanti Factory, Kankarbagh, Patna</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="row justify-content-center">
           <div class="expenses-card col-lg-6 col-md-6 col-sm-6">
              <div class="khata-card khata-card-stats">
                <div class="khata-card-body ">
                  <div class="row">
                    <div class="khata-text row">
                        <div class="icon-big text-center icon-warning">
                          <img src="./assets/img/transaction.png"/>
                        </div>
                        <div class="numbers">
                          <p class="card-category">Total Expenses</p>
                          <p class="card-subtitle">on the basis of total purches by you</p>
                      </div>
                    </div>
                    <div class="amount">
                      <p>Rs. 4710.00</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="dues-card col-lg-6 col-md-6 col-sm-6">
              <div class="khata-card khata-card-stats">
                <div class="khata-card-body ">
                  <div class="row">
                    <div class="khata-text row">
                        <div class="icon-big text-center icon-warning">
                          <img src="./assets/img/transaction.png"/>
                        </div>
                        <div class="numbers">
                          <p class="card-category">Total Dues</p>
                          <p class="card-subtitle">on the basis of total purches by you</p>
                      </div>
                    </div>
                    <div class="amount">
                      <p>Rs. 2100.00</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row justify-content-center">
           <div class="col-lg-5 col-md-6 col-sm-6">
            <a class="wallet-link" href="/admin/customer/okkji-khata/payment-history">
              <div class="wallet-card wallet-card-stats">
                <div class="wallet-card-body ">
                  <div class="row">
                    <div class="rupay-icon row">
                        <div class="icon-big text-center icon-warning">
                          <img src="./assets/img/transaction.png"/>
                        </div>
                        <div class="numbers">
                          <p class="card-title">Paymant History</p>
                          <p class="card-subtitle">Get your daily, monthly or customized payment details</p>
                      </div>
                    </div>
                    <div class="arrow-icon">
                      <i class="fa fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
           </div>
           <div class="col-lg-5 col-md-6 col-sm-6">
            <a class="wallet-link" href="/admin/customer/okkji-khata/purchase-history">
              <div class="wallet-card wallet-card-stats">
                <div class="wallet-card-body ">
                  <div class="row">
                    <div class="rupay-icon row">
                        <div class="icon-big text-center icon-warning">
                          <img src="./assets/img/transaction.png"/>
                        </div>
                        <div class="numbers">
                          <p class="card-title">Purchase History</p>
                          <p class="card-subtitle">Get your daily, monthly or customized payment details</p>
                      </div>
                    </div>
                    <div class="arrow-icon">
                      <i class="fa fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-12">
            <div class="khata-udhaar-text">
            <p>Udhaar Associated Store</p>
            </div>
          </div>
        </div>
      </div>
				{/* -----------------------Header Ends-------------------- */}


				{/* -----------------------Download Statement Starts-------------------- */}
				<div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive customer-table">
                  <table class="table table-striped">
                    <thead>
                      <tr class="bottom-border">
                        <th scope="col" class="thead-img"><img src="./assets/img/Profile-01.png"/></th>
                        <th scope="col">Serial No.</th>
                        <th scope="col">Store Name</th>
                        <th scope="col">Last paid amount</th>
                        <th scope="col">last purchase</th>
                        <th scope="col">View Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="no-bottom-border">
                        <th scope="row" class="algin-center"><img src="./assets/img/Profile-01.png"/></th>
                        <td><span class="text-green">Okk</span>P0001</td>
                        <td class="text-green">Ravi kirana Store</td>
                        <td>Rs. 1500</td>
                        <td>1 Day Ago</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onClick={()=>window.location.href = '/admin/customer/okkji-khata/udaar/:custId'}>View Details</button>
                          </div>
                        </td>
                      </tr>
                      <tr class="no-bottom-border">
                        <th scope="row" class="algin-center"><img src="./assets/img/Profile-01.png"/></th>
                        <td><span class="text-green">Okk</span>P0001</td>
                        <td class="text-green">Ravi kirana Store</td>
                        <td>Rs. 1500</td>
                        <td>1 Day Ago</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onclick="window.location.href = 'customudhaarview.html';">View Details</button>
                          </div>
                        </td>
                      </tr>
                      <tr class="no-bottom-border">
                        <th scope="row" class="algin-center"><img src="./assets/img/Profile-01.png"/></th>
                        <td><span class="text-green">Okk</span>P0001</td>
                        <td class="text-green">Ravi kirana Store</td>
                        <td>Rs. 1500</td>
                        <td>1 Day Ago</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onclick="window.location.href = 'customudhaarview.html';">View Details</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
				{/* -----------------------Download Statement Ends-------------------- */}
			</div>
		)
	}
}