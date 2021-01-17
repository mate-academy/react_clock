import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  static propTypes = {
    name: PropTypes.number.isRequired,
  }

  state= {
    time: new Date(),
  };

  componentDidMount() {
    this.timeId = setInterval(() => {
      const date = new Date();

      this.setState({ time: date });

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (name === prevProps.name) {
      return;
    }

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    const { time } = this.state;

    return (
      <span>{time.toLocaleTimeString()}</span>
    );
  }
}
