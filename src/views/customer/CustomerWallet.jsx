import React from "react";

class CustomerWallet extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div class='content'>
          {/*--------------top bar starts-----------------*/}
          <div class="customer-filter wallet-row">
            <div class="col-md-9">
              <p>
              Customer <i class="left-space fa fa-angle-right"></i> Wallet
              </p>
            </div>
            <div class="filter-search col-md-3">
              <p><i class="fa fa-search"></i></p>
              <p><span class="filter-txt"> Filter</span> <img src="./assets/img/filterIcon.png"/></p>
            </div>
          </div>
        {/*--------------top bar Ends-----------------*/}
        {/*--------------wallet header starts-----------------*/}
        <div class="customer-wallets wallet-row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="customer-wallet wallet-stats">
              <div class="wallet-body">
                <div class="wallet-row">
                  <div class="text-center">
                     <img src="./assets/img/walletIcon.png"class="wallet-img"/>
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
                  <div class="text-center">
                     <img src="./assets/img/Profile-01.png" class="customer-img"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*--------------wallet header ends-----------------*/}
      {/*--------------wallet header options starts-----------------*/}
      <div class="col-lg-12">
          <div class="row justify-content-center">
           <div class="col-lg-5 col-md-6 col-sm-6">
            <a class="wallet-link" href="/admin/customer/customer-wallet/transactions">
              <div class="wallet-card wallet-card-stats">
                <div class="wallet-card-body ">
                  <div class="row">
                    <div class="wallet-text row">
                        <div class="icon-big text-center icon-warning">
                          <img src="./assets/img/transaction.png"/>
                        </div>
                        <div class="numbers">
                          <p class="card-category">View all transaction
                        </p>
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
            <a class="wallet-link" href="/admin/customer/customer-wallet/DownloadStatement/:custId">
              <div class="wallet-card wallet-card-stats">
                <div class="wallet-card-body ">
                  <div class="row">
                    <div class="wallet-text row">
                      <div class="icon-big text-center icon-warning">
                        <img src="./assets/img/downloadStatement.png"/>
                      </div>
                      <div class="numbers">
                        <p class="card-category">Download Statement</p>
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
          <div class="col-lg-10">
            <div class="customer-note">
              <div class="note-text">
                <p>NOTE: Wallet is linked with Paytm, PhonePe, GooglePay.</p>
              </div>
          </div>
          </div>
        </div>
      </div>
    {/*--------------wallet header options ends-----------------*/}
    {/*--------------wallet table starts-----------------*/}
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive customer-table">
              <table class="table table-striped">
                <thead>
                  <tr class="bottom-border">
                    <th scope="col" class="thead-img"><img src="./assets/img/transaction.png"/></th>
                    <th scope="col">TRANSACATIONS</th>
                    <th scope="col">AMOUNT</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">COMMENT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="no-bottom-border">
                    <th scope="row" class="algin-center"><img src="./assets/img/Profile-01.png"/></th>
                    <td>
                      <div class="customer-table-th table-stats">
                        <div class="table-body">
                          <div class="row">
                            <div class="table-data">
                              <p class="card-category">Add in your wallet</p>
                              <p class="card-time">31 Mar, 5:00 PM</p>
                              <p class="card-txn">Transacations ID: 987654321</p>
                            </div>    
                          </div>
                        </div>
                      </div>
                    </td>
                    <td id="table-amount">+565</td>
                    <td id="table-status">Success</td>
                    <td id="table-comment">Bank txn ID 874746383292</td>
                  </tr>
                  <tr class="no-bottom-border">
                    <th scope="row" class="algin-center"><img src="./assets/img/Profile-01.png"/></th>
                    <td>
                      <div class="customer-table-th table-stats">
                        <div class="table-body">
                          <div class="row">
                            <div class="table-data">
                              <p class="card-category">Add in your wallet</p>
                              <p class="card-time">31 Mar, 5:00 PM</p>
                              <p class="card-txn">Transacations ID: 987654321</p>
                            </div>    
                          </div>
                        </div>
                      </div>
                    </td>
                    <td id="table-amount">+565</td>
                    <td id="table-status">Success</td>
                    <td id="table-comment">Bank txn ID 874746383292</td>
                  </tr>
                  <tr class="no-bottom-border">
                    <th scope="row" class="algin-center"><img src="./assets/img/Profile-01.png"/></th>
                    <td>
                      <div class="customer-table-th table-stats">
                        <div class="table-body">
                          <div class="row">
                            <div class="table-data">
                              <p class="card-category">Add in your wallet</p>
                              <p class="card-time">31 Mar, 5:00 PM</p>
                              <p class="card-txn">Transacations ID: 987654321</p>
                            </div>    
                          </div>
                        </div>
                      </div>
                    </td>
                    <td id="table-amount">+565</td>
                    <td id="table-status">Success</td>
                    <td id="table-comment">Bank txn ID 874746383292</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
         </div>
        </div>
    {/*--------------wallet table ends-----------------*/}

      
        
        

      </div>
    );
  }
}

export default CustomerWallet;
