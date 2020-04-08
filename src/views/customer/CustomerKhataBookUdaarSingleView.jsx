import React from 'react';
export default class CustomerKhataBookUdaarSingleView extends React.Component {

	render() {
		return (
			<div className='content'>
				{/*-------------------1-------------------------*/}
				<div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Customer <i class="left-space fa fa-angle-right"></i> OkkJi Khata <i class="left-space fa fa-angle-right"></i> Udhhar Associated Store
            </p>
          </div>
          <div class="filter-search col-md-3">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src="./assets/img/filterIcon.png"/></p>
          </div>
        </div>
      {/*-----------------------2--------------------------------*/}
      <div class="customer-wallets wallet-row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="customer-wallet wallet-stats">
              <div class="wallet-body">
                <div class="wallet-row">
                  <div class="text-center">
                     <img src="./assets/img/Profile-01.png" class="customer-img"/>
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
                    <p class="contactno">9998888777</p>
                    <p class="address">Kanti Factory, Kankarbagh, Patna</p>
                  </div>
                  <div class="text-center">
                     <img src="./assets/img/callIcon.png" class="call-img"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/*-----------------------------------3----------------------------*/}
      <div class="col-lg-12">
          <div class="row justify-content-center">
           <div class="expenses-card col-lg-6 col-md-6 col-sm-6">
              <div class="khata-card khata-card-stats">
                <div class="khata-card-body ">
                  <div class="row">
                    <div class="khata-text row">
                        <div class="text-center">
                          <img src="./assets/img/Paid.png" class="icon-big"/>
                        </div>
                        <div class="numbers">
                          <p class="bill-date">MARCH 2020 BILL <img src="./assets/img/Calender.png" width="25" class="calender-img"/></p>
                      </div>
                    </div>
                    <div class="bill-amount">
                      <p>Rs. 4710.00</p>
                    </div>
                  </div>
                  <div class="bill-subtitle">
                    <p>Last Paid on 22-11-19</p>
                  </div>
                </div>
              </div>
          </div>
          <div class="dues-card col-lg-6 col-md-6 col-sm-6">
              <div class="khata-card khata-card-stats">
                <div class="khata-card-body ">
                  <div class="row">
                    <div class="khata-text row">
                        <div class="text-center">
                          <img src="./assets/img/Dues.png" class="icon-big"/>
                        </div>
                        <div class="numbers">
                          <p class="bill-date">APRIL 2020 BILL</p>
                      </div>
                    </div>
                    <div class="bill-amount2">
                      <p>Rs. 2100.00</p>
                    </div>
                  </div>
                  <div class="bill-subtitle reminder-button">
                    <button type="button" class="reminder-btn">Send Reminder</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row justify-content-center">
           <div class="col-lg-5 col-md-6 col-sm-6">
            <a class="wallet-link" href="udhaarpaymenthistory.html">
              <div class="wallet-card wallet-card-stats">
                <div class="wallet-card-body ">
                  <div class="row">
                    <div class="rupay-icon row">
                        <div class="icon-big text-center icon-warning">
                          <img src="./assets/img/Paymenthistory.png"/>
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
            <a class="wallet-link" href="udhharpurchasehistory.html">
              <div class="wallet-card wallet-card-stats">
                <div class="wallet-card-body ">
                  <div class="row">
                    <div class="rupay-icon row">
                        <div class="icon-big text-center icon-warning">
                          <img src="./assets/img/Purchesehistory.png"/>
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
        </div>
      </div>
			</div>
		)
	}

}