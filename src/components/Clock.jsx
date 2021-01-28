import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const { time } = this.state;

      this.setState(state => ({ time: new Date() }));
      // eslint-disable-next-line
      console.log(time.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="clock">
        <h1 className="clock_name">{`Clock name: ${name}`}</h1>
        <p className="clock_time">
          {`Current time: ${time.toLocaleTimeString()}`}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number,
};

Clock.defaultProps = {
  name: 0,
};
