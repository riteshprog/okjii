import React from 'react';
import filterIcon from '../../assets/img/filterIcon.png';
import walletIcon from '../../assets/img/walletIcon.png';
import Profile01 from '../../assets/img/Profile-01.png';



export default class DownloadWalletStatement extends React.Component {
	render() {
		return (
			<div class='content'>
			{/*--------------top bar starts-----------------*/}
			<div class="customer-filter wallet-row">
	        <div class="col-md-9">
	          <p>
	          Customer <i class="left-space fa fa-angle-right"></i> Wallet <i class="left-space fa fa-angle-right"></i> View Previous Settlement
	          </p>
	        </div>
	        <div class="filter-search col-md-3">
	          <p><i class="fa fa-search"></i></p>
	          <p><span class="filter-txt"> Filter</span> <img src={filterIcon}/></p>
	        </div>
	      </div>
	      {/*--------------top bar Ends-----------------*/}
	      {/*--------------store wallet header starts-----------*/}
	      <div class="customer-wallets wallet-row">
	        <div class="col-lg-6 col-md-6 col-sm-6">
	          <div class="customer-wallet wallet-stats">
	            <div class="wallet-body">
	              <div class="wallet-row">
	                <div class=" wallet-img text-center icon-warning">
	                   <img src={walletIcon} width="70"/>
	                </div>
	                <div class="numbers">
	                  <p class="card-category"><span class="wallet-green">OKK</span>JI WALLET</p>
	                  <p class="card-title"><span class="wallet-green">₹</span> 500.00</p>
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
	                  <p class="card-category">Ravi Kumar Singh</p>
	                  <p class="card-title"><span class="wallet-green">Okk</span>P0001</p>
	                </div>
	                <div class="customer-img text-center icon-warning">
	                   <img src={Profile01} width="65"/>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      {/*--------------store wallet header ends-----------*/}
		    {/*-------------------Wallet download statement form starts-------------*/}
		    <div class="download-container">
	        <div class="download-statement">
	          <p class="download-text">Download Statement</p>
	        </div>
	        <div class="col-lg-4 col-md-8 col-sm-12">
	          <div class="select-period">
	            <p class="download-period">Select time period</p>
	            <div class="custom-control custom-checkbox">
	                <input type="checkbox" class="custom-control-input" id="last2weeks"/>
	                <label class="custom-control-label" for="last2weeks">Last 2 Weeks</label>
	            </div>
	            <hr class="checkbox-bottom-border"/>
	            <div class="custom-control custom-checkbox">
	                <input type="checkbox" class="custom-control-input" id="last1month"/>
	                <label class="custom-control-label" for="last1month">Last 1 month</label>
	            </div>
	            <hr class="checkbox-bottom-border"/>
	            <div class="custom-control custom-checkbox">
	                <input type="checkbox" class="custom-control-input" id="last3months"/>
	                <label class="custom-control-label" for="last3months">Last 3 months</label>
	            </div>
	            <hr class="checkbox-bottom-border"/>
	            <div class="custom-control custom-checkbox">
	                <input type="checkbox" class="custom-control-input" id="last6months"/>
	                <label class="custom-control-label" for="last6months">Last 6 months</label>
	            </div>
	            <hr class="checkbox-bottom-border"/>
	            <div class="custom-control custom-checkbox">
	                <input type="checkbox" class="custom-control-input" id="last1year"/>
	                <label class="custom-control-label" for="last1year">Last 1 year</label>
	            </div>
	            <hr class="checkbox-bottom-border"/>
	            <div class="custom-control custom-checkbox">
	                <input type="checkbox" class="custom-control-input" id="customeduration"/>
	                <label class="custom-control-label" for="customeduration">Custom Duration</label>
	            </div>
	            <hr class="checkbox-bottom-border"/>
	          </div>
	        </div>
	        <div class="receive-statement">
	          <p class="receive-text">check details to receive statement</p>
	          <form class="details-form">
	            <div class="row">
	              <div class="col-5">
	                <div class="wallet-group">      
	                  <input type="text" required=""/>
	                  <label>Phone Number</label>
	                </div>
	              </div>
	              
	              <div class="col-5">
	                <div class="wallet-group">      
	                  <input type="text" required=""/>
	                  <label>Email ID</label>
	                </div>
	              </div>
	            </div>
	            <div class="col-10 statement-button">
	             <button type="button" class="statement-btn">Send</button>
	            </div>
	          </form>
	        </div>
	      </div>
			{/*-------------------Wallet download statement form Ends-------------*/}
		</div>

		)
	}
}