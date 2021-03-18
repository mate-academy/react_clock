import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    currentTime: undefined,
  };

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`Clock renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    const { currentTime } = this.state;

    return (
      <p>
        Current Time:
        {' '}
        <strong>{currentTime}</strong>
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
