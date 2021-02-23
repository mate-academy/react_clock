import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <>
        <p className="text">
          Current time:
          {' '}
          { time }

          {
          // eslint-disable-next-line no-console
          console.log(time)
          }
        </p>

        <p className="text">
          Random name:
          {' '}
          { name }
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
