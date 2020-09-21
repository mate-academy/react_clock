/* eslint-disable react/button-has-type */
/* eslint-disable consistent-return */

import React from 'react';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    name: '$',
    visibility: false,
    previousName: '1',
  };

  constructor() {
    super();
    this.handleClickClock = this.handleClickClock.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  handleClickClock() {
    this.setState(state => ({
      visibility: !state.visibility,
    }));
  }

  handleClickName() {
    this.setState(state => ({
      previousName: state.name,
      name: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))
       + Math.ceil(0),
    }));

    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${this.state.previousName}
     to ${this.state.name}`);
  }

  render() {
    if (this.state.visibility) {
      return (
        <>
          <h1>
            Clock name -
            {this.state.name}
          </h1>
          <p>
            Current time:
            {this.state.date.toLocaleTimeString()}
          </p>
          <p>
            <button onClick={this.handleClickClock}>
              Click here to hide clock!
            </button>
          </p>
          <p>
            <button onClick={this.handleClickName}>
              Click here to change the name of clock!
            </button>
          </p>
        </>
      );
    }

    if (!this.state.visibility) {
      return (
        <>
          <h1>
            Clock name -
            {this.state.name}
          </h1>
          <p>
            <button onClick={this.handleClickClock}>
              Click here to see clock!
            </button>
          </p>
          <p>
            <button onClick={this.handleClickName}>
              Click here to change the name of clock!
            </button>
          </p>
        </>
      );
    }
  }
}
