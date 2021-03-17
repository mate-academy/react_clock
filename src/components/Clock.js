import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: '',
  }

  componentDidMount() {
    this.timeInterval = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      this.setState({ time: date });
      // eslint-disable-next-line no-console
      console.log(date);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from `
        + `${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    return (
      <span>{this.state.time}</span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
