import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  clockName = 0;

  static propTypes = {
    name: PropTypes.number.isRequired,
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (this.clockName !== name) {
      // eslint-disable-next-line
      console.log(name);
    }

    this.clockName = name;
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { time } = this.state;

    return (
      <span>{time}</span>
    );
  }
}
