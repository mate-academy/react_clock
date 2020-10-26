import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: (new Date()).toLocaleTimeString(),
    });
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="clock">
        <h1>
          {`Clock #${name}`}
        </h1>
        <p>
          {time}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
