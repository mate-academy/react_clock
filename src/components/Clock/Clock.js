import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  clockStep = setInterval(() => {
    const date = (new Date().toLocaleTimeString());

    // eslint-disable-next-line no-console
    console.log(date);
    this.setState({ time: date });
  }, 1000);

  componentDidMount() {
    return this.clockStep;
  }

  componentWillUnmount() {
    clearInterval(this.clockStep);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div>
        <h1 className="m-3">
          {`React clock: ${name}`}
        </h1>
        <span
          className="m-3 p-2 bg-success rounded"
        >
          {`Current time: ${time}`}
        </span>

      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number,
};

Clock.defaultProps = {
  name: 'No name',
};
