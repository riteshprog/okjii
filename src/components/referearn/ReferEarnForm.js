import React, { Component } from 'react';
import ReferEarnHow from '../referearn/ReferEarnHow';
import ReferEarnWhat from '../referearn/ReferEarnWhat';
import ReferEarnRefer from '../referearn/ReferEarnRefer';

export default class ReferEarnForm extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <div className="earn-how">
            <ReferEarnHow />
            </div>
            <ReferEarnWhat />
            </div>
            <div className="col-md-4">
              <ReferEarnRefer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
