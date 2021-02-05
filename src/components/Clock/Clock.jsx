import React, { Component } from 'react';

export class Clock extends Component {
  state = {
    isClockVisible: false,
  }

  render() {
    return (
      <>
        <h2>Check</h2>
        <p>{this.state.isClockVisible}</p>
      </>
    );
  }
}
