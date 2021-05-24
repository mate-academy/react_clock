import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  timerId = 0;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
      /* eslint-disable-next-line */
      console.log(`Current time is: ${new Date().toLocaleTimeString()}`)
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval((this.timerId));
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <p>
          Name:
          {' '}
          {name}
        </p>

        <p>
          Current Time is:
          {time.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
