import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: (new Date()).toLocaleTimeString(),
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({
        date: (new Date()).toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console,max-len
      console.log(`The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      this.state.date
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
