import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    currentTime: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const date = new Date();

      this.setState({ currentTime: date.toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { clockName } = this.props;

    if (clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="timer">
        Current time:
        {' '}
        {this.state.currentTime}
      </div>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
