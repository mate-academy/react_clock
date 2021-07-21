import React from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
    this.intervalID = setInterval(() => this.printTime(), 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  // eslint-disable-next-line class-methods-use-this
  printTime() {
    const timeToPrint = new Date();

    // eslint-disable-next-line no-console
    console.log(timeToPrint.toLocaleTimeString());
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div className="subtitle tag is-light">
        <p>
          Current time:
          {' '}
          {this.state.time}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
