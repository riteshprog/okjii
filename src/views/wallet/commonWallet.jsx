import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import wallet from "../../img/wallet/walletIcon.png";
import filterIcon from "../../img/wallet/filterIcon.png";
import profileOne from "../../img/wallet/Profile-01.png";
import downloadStatement from "../../img/wallet/downloadStatement.png";
import transaction from '../../img/wallet/transaction.png'


class CommonWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { props, state } = this;
    console.log(this);
    return (
      <div className="content">
        {/* --------------filter-------------- */}
        <Row className="customer-filter">
          <Col md="10">
            <p>{props.pageTitle.join(" > ")}</p>
          </Col>
          <Col md="2" className="filter-search">
            <p>
              <i class="fas fa-search" />
            </p>
            <p>
              <span className="filter-txt"> Filter</span>{" "}
              <i class="fas fa-bars"></i>
            </p>
          </Col>
        </Row>

        {/* --------------header-------------- */}
        <div className='wallet-header df aic'>
          <div className='wallet-header-left df f1 p-3'>
            <div className='mr-3'>
              <img className='icon-sm' src={wallet} alt=""/>
            </div>
            <div>
              <p>Okkji Wallet</p>
              <p>500</p>
            </div>
          </div>
          <div className='wallet-header-right df f1 jcfe p-3'>
            <div>
              <div>
                <p>Name</p>
                <p>id</p>
              </div>
            </div>
            <div className='ml-3'>
              <img className='icon-sm' src={profileOne} alt=""/>
            </div>
          </div>
        </div>
        <hr></hr>

        {/* --------------Buttons-------------- */}
        <div className='df jcsa mt-3 p-3'>
          <div className='wallet-card-button f1 df jcc aic p-10 ml-3 mr-3'>
            <img src={transaction} alt=""/>
            <span>View All Transaction ></span>
          </div>
          <div className='wallet-card-button f1 df jcc aic p-10 ml-3 mr-3'>
            <img src={downloadStatement} alt=""/>
            <span>Download Statement ></span>
          </div>
        </div>
        {/*-----------Note---------------  */}
        <div class="wallet-note m-10">
          <p>NOTE: Wallet is linked with Paytm, PhonePe, GooglePay.</p>
        </div>
        
        
        {/* ----------------Table---------- */}
        
        <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive customer-table">
                  <table class="table table-striped">
                    <thead>
                      <tr class="bottom-border">
                        <th scope="col" class="thead-img"><img src={transaction}/></th>
                        <th scope="col">TRANSACATIONS</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">COMMENT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="no-bottom-border">
                        <th scope="row" class="algin-center"><img src={profileOne}/></th>
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
                        <th scope="row" class="algin-center"><img src={profileOne}/></th>
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
                        <th scope="row" class="algin-center"><img src={profileOne}/></th>
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

      </div>
    );
  }
}

export default CommonWallet;
