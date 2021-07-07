/* eslint-disable react/button-has-type */
/* eslint-disable consistent-return */

import React from 'react';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    name: '$',
    visibility: false,
  };

  constructor() {
    super();
    this.toggleClockVisibility = this.toggleClockVisibility.bind(this);
    this.changeClocksName = this.changeClocksName.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  toggleClockVisibility() {
    this.setState(state => ({
      visibility: !state.visibility,
    }));
  }

  changeClocksName() {
    this.setState((prevState) => {
      const newName = Math.floor(Math.random() * Math.floor(100));

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.name} to ${newName}`);

      return {
        name: newName,
      };
    });
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
            <button onClick={this.toggleClockVisibility}>
              Click here to hide clock!
            </button>
          </p>
          <p>
            <button onClick={this.changeClocksName}>
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
            <button onClick={this.toggleClockVisibility}>
              Click here to see clock!
            </button>
          </p>
          <p>
            <button onClick={this.changeClocksName}>
              Click here to change the name of clock!
            </button>
          </p>
        </>
      );
    }
  }
}
