import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: new Date() }),
      1000,
    );
  }

  componentDidUpdate(prevProps) {
    const oldName = prevProps.clockName;
    const curName = this.props.clockName;

    if (oldName !== curName) {
      console.log(curName);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;

    // eslint-disable-next-line no-console
    console.log(time.toLocaleTimeString());

    return (
      <>
        <p>
          Current time:
          {' '}
          {time.toLocaleTimeString()}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
}
