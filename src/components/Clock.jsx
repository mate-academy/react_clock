import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  timer = 0;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
      /* eslint-disable-next-line */
      console.log(`Current time: ${new Date().toLocaleTimeString()}`)
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="clock">
        <h1>React clock</h1>
        <p>
          Name:
          { name }
        </p>
        <p>
          Current time:
          {' '}
          {time.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
