import React, { Component } from 'react'

export default class HowtoApply extends Component {
  render() {
    return (
      <div>
          <h1 className="text-center howtoapply pb-2">How to Apply</h1>
        <div className="container-fluid reg-howtoapply">
          <div className="container">
          <div className="row">
              {/* <ol className="bolded-list-indicator registration-howtoapply-list"> */}
              <ol className="bolded-list-indicator">
                <li><p>The offer begins on 03/12/2019</p></li>
                <li><p>The promo code can be used two times per user.</p></li>
                <li><p>The offer is valid on two categories: Utility (Electricity, DTH, Broadband, Datacard, Postpaid) and Prepaid Recharge.</p></li>
                <li><p>Get 5% instant discount upto Rs 125 on Utility Bill Payments or Prepaid Recharge when you use promocode: BPB125D.</p></li>
                <li><p>This promocode is applicable twice per user. Minimum order value Rs200.</p></li>
                <li><p>The Bill Pe Bachat offer is valid for all users in the Hindi language.</p></li>
              {/* </ol> */}
              </ol>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

