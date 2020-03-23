import React, { Component } from 'react';
//import { MDBFormInline, MDBInput } from 'mdbreact';

class RadioButton extends Component {
  state = {
    radio: 1
  };

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };

  render() {
    return (
      <div class="sound-signal">
  <input type="radio" name="soundsignal" id="soundsignal1" checked="checked" />
  <label for="soundsignal1">Patna</label>
  <input type="radio" name="soundsignal" id="soundsignal2" className="float-right" />
  <label for="soundsignal2">Jaipur</label>
</div>
      // <MDBFormInline className="radio-button">
      //   <MDBInput
      //     onClick={this.onClick(1)}
      //     checked={this.state.radio === 1 ? true : false}
      //     label='Patna'
      //     type='radio'
      //     id='radio1'

      //   />
      //   <MDBInput
      //     onClick={this.onClick(2)}
      //     checked={this.state.radio === 2 ? true : false}
      //     label='Jaipur'
      //     type='radio'
      //     id='radio2'
      //     />
      // </MDBFormInline>
    );
  }
}

export default RadioButton;