import React from 'react'

export default class CustomerKhantaPurchaseHistory extends React.Component {
  render(){
    return(
      <div className='content'>
        {/*-------------------1------------------------*/}
        <div class="customer-filter wallet-row">
          <div class="col-md-9">
            <p>
            Customer <i class="left-space fa fa-angle-right"></i> OkkJi Khata <i class="left-space fa fa-angle-right"></i> Purchase History
            </p>
          </div>
          <div class="filter-search col-md-3">
            <p><i class="fa fa-search"></i></p>
            <p><span class="filter-txt"> Filter</span> <img src="./assets/img/filterIcon.png"/></p>
          </div>
        </div>
        {/*-------------------2------------------------*/}
        <div class="wallet-row">
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
        {/*-------------------3------------------------*/}
        <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive customer-tnx-table">
                  <table class="table table-striped">
                    <thead>
                      <tr class="bottom-border">
                        <th scope="col">TIME</th>
                        <th scope="col">Order id</th>
                        <th scope="col">Total item</th>
                        <th scope="col">HIGHLIGHT</th>
                        <th scope="col">TOTAL AMOUNT</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">view details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td><span>#</span>9876597</td>
                        <td class="text-green">21 Items</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onClick={()=>window.location.href = '/admin/customer/okkji-khata/purchase-history/view-order'}> View Details</button>
                          </div>
                        </td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td><span>#</span>9876597</td>
                        <td class="text-green">21 Items</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onClick="window.location.href = 'purchaseHistoryViewDetails.html';"> View Details</button>
                          </div>
                        </td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td><span>#</span>9876597</td>
                        <td class="text-green">05 Items</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onClick="window.location.href = 'purchaseHistoryViewDetails.html';"> View Details</button>
                          </div>
                        </td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td><span>#</span>9876597</td>
                        <td class="text-green">1 Items</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onClick="window.location.href = 'purchaseHistoryViewDetails.html';"> View Details</button>
                          </div>
                        </td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td><span>#</span>9876597</td>
                        <td class="text-green">21 Items</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onClick="window.location.href = 'purchaseHistoryViewDetails.html';"> View Details</button>
                          </div>
                        </td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td><span>#</span>9876597</td>
                        <td class="text-green">27 Items</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td class="text-danger">Cancaled</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onClick="window.location.href = 'purchaseHistoryViewDetails.html';"> View Details</button>
                          </div>
                        </td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td><span>#</span>9876597</td>
                        <td class="text-green">21 Items</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onClick="window.location.href = 'purchaseHistoryViewDetails.html';"> View Details</button>
                          </div>
                        </td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td><span>#</span>9876597</td>
                        <td class="text-green">21 Items</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onClick="window.location.href = 'purchaseHistoryViewDetails.html';"> View Details</button>
                          </div>
                        </td>
                      </tr>
                      <tr class="no-bottom-border">
                        <td>4:21 PM</td>
                        <td><span>#</span>9876597</td>
                        <td class="text-green">21 Items</td>
                        <td>Cash Payment to store</td>
                        <td><span>Rs. 1500</span></td>
                        <td>Success</td>
                        <td><div class="viewDetails-button">
                           <button type="button" class="submit-btn" onClick="window.location.href = 'purchaseHistoryViewDetails.html';"> View Details</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                 </div>
               </div>
             </div>
           </div>
        
      </div>
    )
  }
}