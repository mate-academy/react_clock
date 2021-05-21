import React from 'react';
import PropsTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
    // eslint-disable-next-line
      console.log(prevProps.name === this.props.name || (`The clock was renamed from ${prevProps.name} to ${this.props.name}`));
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <span>
        {time}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropsTypes.number.isRequired,
};
