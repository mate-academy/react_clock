import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prewProps) {
    // eslint-disable-next-line
    console.log(
      prewProps.name === this.props.name
        ? this.state.time
        : `The Clock was renamed from ${prewProps.name} to ${this.props.name}`,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <>
        <p>
          Clock №
          {this.props.name}
        </p>
        <p>
          Current time:
          {' '}
          {this.state.time}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
