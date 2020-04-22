import React, { Component } from "react";
import { Row, Col, CardBody, Card } from "reactstrap";
import "./wallet.css";

import wallet from "../../img/wallet/walletIcon.png";
import profile from "../../img/wallet/Profile-01.png";
import transaction from "../../img/wallet/transaction.png";
import downloadStatement from "../../img/wallet/downloadStatement.png";
import filterIcon from "../../img/wallet/filterIcon.png";

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="content">
        <Row>
          <Col className='md="12"'>
            {/* -----------filter----------- */}
            <div class="customer-filter wallet-row">
              <div class="col-md-9">
                <p>
                  Customer <i class="left-space fa fa-angle-right"></i>
                  Wallet
                </p>
              </div>
              <div class="filter-search col-md-3">
                <p>
                  <i class="fa fa-search"></i>
                </p>
                <p>
                  <span class="filter-txt"> Filter</span>
                  <img src={filterIcon} />
                </p>
              </div>
            </div>

            {/* ---------okji wallet top--------- */}
            <div class="customer-wallets wallet-row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="customer-wallet wallet-stats">
                  <div class="wallet-body">
                    <div class="wallet-row">
                      <div class=" wallet-img text-center icon-warning">
                        <img src={wallet} />
                      </div>
                      <div class="numbers">
                        <p class="card-category">
                          <span class="wallet-green">OKK</span>JI WALLET
                        </p>
                        <p class="card-title">
                          <span class="wallet-green">₹</span> 500.00
                        </p>
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
                        <p class="card-title">
                          <span class="wallet-green">Okk</span>P0001
                        </p>
                      </div>
                      <div class="customer-img text-center icon-warning">
                        <img src={profile} width={65} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------okji wallet top ends--------- */}

            {/*-----------middle section----------   */}
            <div class="col-lg-12">
              <div class="row justify-content-center">
                <div class="col-lg-5 col-md-6 col-sm-6">
                  <a class="wallet-link" href="/admin/store/wallet/view-all-pre-transactions">
                    <div class="wallet-card wallet-card-stats">
                      <div class="wallet-card-body ">
                        <div class="row">
                          <div class="wallet-text row">
                            <div class="icon-big text-center icon-warning">
                              <img src={transaction} />
                            </div>
                            <div class="numbers">
                              <p class="card-category">
                                View all transaction
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
                  <a class="wallet-link" href="/admin/store/wallet/download-statement">
                    <div class="wallet-card wallet-card-stats">
                      <div class="wallet-card-body ">
                        <div class="row">
                          <div class="wallet-text row">
                            <div class="icon-big text-center icon-warning">
                              <img src={downloadStatement} />
                            </div>
                            <div class="numbers">
                              <p class="card-category">
                                Download Statement
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
                <div class="col-lg-10">
                  <div class="customer-note">
                    <div class="note-text">
                      <p>
                        NOTE: Wallet is linked with Paytm, PhonePe,
                        GooglePay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------middle section ends */}
            {/* -----------table---------- */}

            <div class="customer-table">
              <table class="table table-striped">
                <thead>
                  <tr class="bottom-border">
                    <th scope="col" class="thead-img">
                      <img src={transaction} />
                    </th>
                    <th scope="col">TRANSACATIONS</th>
                    <th scope="col">AMOUNT</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">COMMENT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="no-bottom-border">
                    <th scope="row" class="algin-center">
                      <img src={profile} />
                    </th>
                    <td>
                      <div class="customer-table-th table-stats">
                        <div class="table-body">
                          <div class="row">
                            <div class="table-data">
                              <p class="card-category">
                                Add in your wallet
                              </p>
                              <p class="card-time">31 Mar, 5:00 PM</p>
                              <p class="card-txn">
                                Transacations ID: 987654321
                              </p>
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
                    <th scope="row" class="algin-center">
                      <img src={profile} />
                    </th>
                    <td>
                      <div class="customer-table-th table-stats">
                        <div class="table-body">
                          <div class="row">
                            <div class="table-data">
                              <p class="card-category">
                                Add in your wallet
                              </p>
                              <p class="card-time">31 Mar, 5:00 PM</p>
                              <p class="card-txn">
                                Transacations ID: 987654321
                              </p>
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
                    <th scope="row" class="algin-center">
                      <img src={profile} />
                    </th>
                    <td>
                      <div class="customer-table-th table-stats">
                        <div class="table-body">
                          <div class="row">
                            <div class="table-data">
                              <p class="card-category">
                                Add in your wallet
                              </p>
                              <p class="card-time">31 Mar, 5:00 PM</p>
                              <p class="card-txn">
                                Transacations ID: 987654321
                              </p>
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
            {/* -----------------table ends */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Wallet;
