import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: undefined,
    interval: undefined,
  }

  componentDidMount() {
    this.state.interval = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevState) {
    const { clockName } = this.props;

    if (clockName !== prevState.clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.clockName}
      to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>
      </>

    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
