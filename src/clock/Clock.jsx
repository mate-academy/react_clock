import React from 'react';
import PropTypes from 'prop-types';

let interval;

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {

    interval = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      // eslint-disable-next-line
      console.log(date);
      this.setState({ time: date });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <>
        <h4>{`Current time: ${time}`}</h4>
        <h4>{`Current name : ${name} `}</h4>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
