import React, { Component } from 'react';
class StoreWalletPreSettlement extends Component {
  render() { 
    return ( 
      <div className='content'>
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Customer <i class="left-space fa fa-angle-right"></i> Wallet <i class="left-space fa fa-angle-right"></i> View Previous Settlement
            </p>
          </div>
          <div class="filter-search col-md-3">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src="./assets/img/filterIcon.png"/></p>
          </div>
        </div>

        <div class="wallet-row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="customer-wallet wallet-stats">
              <div class="wallet-body">
                <div class="wallet-row">
                  <div class=" wallet-img text-center icon-warning">
                     <img src="./assets/img/walletIcon.png" width="70"/>
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


        <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive customer-tnx-table">
                  <table class="table table-striped">
                    <thead>
                      <tr class="bottom-border">
                        <th scope="col">TIME</th>
                        <th scope="col">DATE</th>
                        <th scope="col">TRANSACTION ID</th>
                        <th scope="col">HIGHLIGHT</th>
                        <th scope="col">TOTAL AMOUNT</th>
                        <th scope="col">STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td>25 Mar</td>
                        <td><span>#</span>987654321</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td>25 Mar</td>
                        <td><span>#</span>987654321</td>
                        <td>Pay Via Phone Wallet</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td>25 Mar</td>
                        <td><span>#</span>987654321</td>
                        <td>Add in Wallet</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td>25 Mar</td>
                        <td><span>#</span>987654321</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td>25 Mar</td>
                        <td><span>#</span>987654321</td>
                        <td>Pay Via Google Pay</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td>25 Mar</td>
                        <td><span>#</span>987654321</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td>25 Mar</td>
                        <td><span>#</span>987654321</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td>25 Mar</td>
                        <td><span>#</span>987654321</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                      </tr>
                    </tbody>
                  </table>
                 </div>
               </div>
             </div>
           </div>

      </div>
     );
  }
}
 
export default StoreWalletPreSettlement;