import React from 'react';
import Proptypes from 'prop-types';

class Clock extends React.Component {
  state= {
    date: new Date(),
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
    console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}.`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const time = this.state.date.toLocaleTimeString();

    return (
      <p>
        Current time:
        {' '}
        {time}
      </p>
    );
  }
}

Clock.propTypes = {
  name: Proptypes.number.isRequired,
};
export default Clock;
