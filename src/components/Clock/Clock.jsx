import React from 'react';
import propTypes from 'prop-types';
import './clock.scss';

export class Clock extends React.Component {
  state = {
    timer: new Date(),
  }

  componentDidMount() {
    this.tick = setInterval(() => {
      this.setState({ timer: new Date() });

      // eslint-disable-next-line
      console.log(this.state.timer.toLocaleTimeString());
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
    clearInterval(this.tick);
  }

  render() {
    const { timer } = this.state;

    return (
      <p className="clock">
        {timer.toLocaleTimeString()}
      </p>
    );
  }
}

Clock.propTypes = {
  name: propTypes.number.isRequired,
};
