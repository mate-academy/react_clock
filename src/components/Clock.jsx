/* eslint-disable no-console */
import React from 'react';
import propTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      this.setState({ time: date });

      console.log(date);
    }, 1000);
  }

  componentDidUpdate(prevProps, _) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      console.log(`The Clock was renamed from ${prevProps.name}
      to ${name}.`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <span>
          {this.state.time}
        </span>
      </>
    );
  }
}

Clock.propTypes = {
  name: propTypes.number.isRequired,
};

export default Clock;
