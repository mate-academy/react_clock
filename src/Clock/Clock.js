/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = { date: new Date().toLocaleTimeString() };

  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      // eslint-disable-next-line
      console.log(new Date().toLocaleTimeString());
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <span>{` ${this.state.date}`}</span>;
  }
}

Clock.defaultProps = {
  name: 0,
};

Clock.propTypes = {
  name: PropTypes.number,
};

export default Clock;
